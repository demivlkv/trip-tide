import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import { UserIcon, AtSymbolIcon, LockClosedIcon, ArrowLongRightIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

const Signup = () => {
	const [formState, setFormState] = useState({ username: '', email: '', password: '', location: '', description: '' });
	const [addUser, { error }] = useMutation(ADD_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({ ...formState, [name]: value });
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			// execute addUser mutation & pass in variable data from form
			const { data } = await addUser({
				variables: { ...formState },
			});
			console.log(data);
      Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Layout>
      <div className="w-full h-screen">
			  <div className="signup bg-signup bg-fixed bg-cover w-full h-full flex flex-col justify-center items-center px-4">
					<div className="mb-8 flex flex-col justify-center items-center text-white z-[1]">
						<h1>Sign Up</h1>
						<h2>Join the travel community</h2>
					</div>
					<div className="card">
						<form className="w-full max-w-[500px]" onSubmit={handleFormSubmit}>
							<div className="relative">
								<div className="icons">
									<UserIcon width={20} />
								</div>
								<input
									placeholder="Enter username"
									name="username"
									type="username"
									id="username"
									value={formState.username}
									onChange={handleChange}
								/>
							</div>
							<div className="relative">
								<div className="icons">
									<AtSymbolIcon width={20} />
								</div>
								<input
									placeholder="Enter email address"
									name="email"
									type="email"
									id="email"
									value={formState.email}
									onChange={handleChange}
								/>
							</div>
							<div className="relative">
								<div className="icons">
									<LockClosedIcon width={20} />
								</div>
								<input
									placeholder="Password"
									name="password"
									type="password"
									id="password"
									value={formState.password}
									onChange={handleChange}
								/>
							</div>
							<div className="relative">
								<div className="icons">
									<MapPinIcon width={20} />
								</div>
								<input
									placeholder="Location"
									name="location"
									type="location"
									id="location"
									value={formState.location}
									onChange={handleChange}
								/>
							</div>
							<div className="relative">
								<div className="icons">
									<BriefcaseIcon width={20} />
								</div>
								<input
									placeholder="Tell us a little about yourself"
									name="description"
									type="description"
									id="description"
									value={formState.description}
									onChange={handleChange}
								/>
							</div>

							<button type="submit" className="primary">
								Create Account
							</button>

							<div className="w-full flex justify-center items-center text-sm leading-loose">
								Already a member?
								<Link to="/login" className="inline-flex items-center ml-2 text-teal-400 hover:text-teal-200">
									Login <ArrowLongRightIcon width={25} className="inline-flex items-center ml-1" />
								</Link>
							</div>
						</form>
						{error && <div className="text-sm text-slate-600 italic">Sign up failed</div>}
					</div>
					<div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r opacity-80 from-teal-100 via-slate-600 to-sky-800 z-0"></div>
        </div>
			</div>
		</Layout>
	);
};

export default Signup;