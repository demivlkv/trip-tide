import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';

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
			    <div className="signup p-4 w-full h-full flex flex-col justify-center items-center">
                    <div className="mb-8 flex flex-col justify-center items-center">
                        <h1>Sign Up</h1>
                        <h2>Join the travel community</h2>
                    </div>
                    <div className="card">
						<form className="w-full" onSubmit={handleFormSubmit}>
                            <label className="block">Username</label>
							<input
								placeholder="Your username"
								name="username"
								type="username"
								id="username"
								value={formState.username}
								onChange={handleChange}
							/>
                            <label className="block">E-mail</label>
							<input
								placeholder="Your email"
								name="email"
								type="email"
								id="email"
								value={formState.email}
								onChange={handleChange}
							/>
                            <label className="block">Password</label>
							<input
								placeholder="******"
								name="password"
								type="password"
								id="password"
								value={formState.password}
								onChange={handleChange}
							/>
							<button className="w-full my-4" type="submit">
								Submit
							</button>
						</form>
						{error && <div>Sign up failed</div>}
                        <p className="text-sm leading-loose">Already have an account? <Link to="/login" className="text-teal-400 hover:text-teal-200">Login here.</Link></p>
					</div>
                </div>
			</div>
		</Layout>
	);
};

export default Signup;
