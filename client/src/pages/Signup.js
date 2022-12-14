import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import { UserIcon, AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const Signup = () => {
	const [formState, setFormState] = useState({ username: '', email: '', password: '' });
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
					<div className="card">
						<div className="mb-8 flex flex-col justify-center items-center">
							<h1>Sign Up</h1>
							<h2>Join the travel community</h2>
						</div>
						<form className="w-full max-w-[500px]" onSubmit={handleFormSubmit}>
							<label className="block">Username</label>
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
							<label className="block">E-mail</label>
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
							<label className="block">Password</label>
							<div className="relative">
								<div className="icons">
									<LockClosedIcon width={20} />
								</div>
								<input
									placeholder="******"
									name="password"
									type="password"
									id="password"
									value={formState.password}
									onChange={handleChange}
								/>
							</div>
							<button className="w-full my-4" type="submit">
								Submit
							</button>
						</form>
						{error && <div>Sign up failed</div>}
						<p className="text-sm leading-loose">Already have an account? <Link to="/login" className="text-teal-400 hover:text-teal-200">Login here.</Link></p>
					</div>
					<div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r opacity-50 from-teal-300 via-sky-600 to-slate-800 z-0"></div>
                </div>
			</div>
		</Layout>
	);
};

export default Signup;