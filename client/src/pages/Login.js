import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({ ...formState, [name]: value });
    };

	// submit form
    const handleFormSubmit = async event => {
        event.preventDefault();
      
        try {
          const { data } = await login({
            variables: { ...formState }
          });
          console.log(data);
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    };

	return (
		<Layout>
            <div className="w-full h-full md:h-screen pt-16 md:pt-0">
			    <div className="login p-4 w-full h-full flex flex-col justify-center items-center">
                    <div className="mb-8 flex flex-col justify-center items-center">
                        <h1>Welcome Back</h1>
                        <h2>There’s a whole world out there</h2>
                    </div>
                    <div className="max-w-screen-lg flex flex-wrap md:flex-nowrap flex-row bg-gray-50 rounded-lg overflow-hidden">
						<img src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="Welcome back. Please log in." className="w-full md:w-1/2 object-cover" />
						<div className="card">
							<form className="w-full" onSubmit={handleFormSubmit}>
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
							{error && <div>Login failed</div>}
							<p className="text-sm leading-loose">Don't have an account? <Link to="/signup" className="text-teal-400 hover:text-teal-200">Sign up here.</Link></p>
						</div>
					</div>
                </div>
			</div>
		</Layout>
	);
};

export default Login;