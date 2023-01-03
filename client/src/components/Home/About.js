import React from 'react';

const About = () => {
	return (
		<div name="about" className="about md:bg-about bg-cover bg-top w-full h-full md:h-screen">
			<div className="w-full md:max-w-screen-lg mx-auto p-8 flex flex-col justify-center z-[2]">
				<h1>
          Bringing the world to you
				</h1>
				<p className="my-4 text-center">
					Trip Tide was founded in 2022 by a traveler, <em className="text-teal-400">for travelers</em>.
				</p>
				<div className="flex flex-wrap justify-evenly items-start md:bg-[#ffffff8a] rounded-lg leading-loose">
					<div className="w-full md:w-1/2 p-4">
						We are a humble, small-scale travel agency to help plan your
						next getaway. Our core belief is that everyone should travel, and it
						is vital that we make travel accessible to everyone.
					</div>
					<div className="w-full md:w-1/2 p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>
				{/* <div className="images grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
					<img
						src="https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						alt="Soak in the view of the Almafi Coast, Italy"
						className="col-span-2 md:col-span-3 row-span-2"
					/>
					<img
						src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2434&q=80"
						alt="Get lost in the bamboo forest of Kyoto, Japan"
					/>
					<img
						src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						alt="Collect moments in local the towns of Germany"
					/>
					<img
						src="https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						alt="Escape the ordinary in the streets of Paris"
					/>
					<img
						src="https://images.unsplash.com/photo-1542082873-c1d89ae3a6ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
						alt="Wake up to a different world in Hawaii"
					/>
				</div> */}
			</div>
		</div>
	);
};

export default About;
