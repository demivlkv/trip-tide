import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Layout from '../components/Layout/Dashboard';
import { AtSymbolIcon, LockClosedIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

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
      <div className="w-full h-screen">
			  <div className="login bg-login bg-fixed bg-cover w-full h-full flex flex-col justify-center items-center px-4 ">
          <div className="mb-8 flex flex-col justify-center items-center text-white z-[1]">
            <h1>Welcome Back</h1>
            <h2>There’s a whole world out there</h2>
        	</div>
       	 	<div className="card">
						<form className="w-full max-w-[500px]" onSubmit={handleFormSubmit}>
							<div className="relative">
								<div className="icons">
									<AtSymbolIcon width={20} />
								</div>
								<input
									placeholder="Your email address"
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

							<button type="submit" className="primary">
								Log In
							</button>

							<div className="w-full flex justify-center items-center text-sm leading-loose">
								Don't have an account?
								<Link to="/signup" className="inline-flex items-center ml-2 text-teal-400 hover:text-teal-200">
									Sign up <ArrowLongRightIcon width={25} className="inline-flex items-center ml-1" />
								</Link>
							</div>
						</form>
						{error && <div className="text-sm text-slate-600 italic">Login failed</div>}
					</div>
					<div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r opacity-80 from-teal-100 via-slate-600 to-sky-800 z-0"></div>
        </div>
			</div>
		</Layout>
	);
};

export default Login;