import React from 'react';

// import images
import Italy from '../../assets/images/almafi-coast.jpg';
import Kyoto from '../../assets/images/arashiyama.jpg';
import Germany from '../../assets/images/germany.jpg';
import Paris from '../../assets/images/paris.jpg';
import Maldives from '../../assets/images/maldives.jpg';

const About = () => {
	return (
		<div className="about w-full h-full md:h-screen p-8">
			<div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">
				<h1 className="mb-4 text-2xl md:text-4xl text-center font-semibold uppercase tracking-widest">
          			Bringing the world to you
				</h1>
				<p className="pt-4 text-left">
					Trip Tide was founded in 2022 by a traveler, <em>for travelers</em>.
				</p>
				<p className="py-8 text-left leading-loose">
					Trip Tide is a humble, small-scale travel agency to help plan your
					next getaway. Our core belief is that everyone should travel, and it
					is vital that we make travel accessible to everyone.
				</p>

				<div className="images grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
					<img
						src={Italy}
						alt="Soak in the view of the Almafi Coast, Italy"
						className="col-span-2 md:col-span-3 row-span-2"
					/>
					<img
						src={Kyoto}
						alt="Get lost in the bamboo forest of Kyoto, Japan"
					/>
					<img
						src={Germany}
						alt="Collect moments in local the towns of Germany"
					/>
					<img src={Paris} alt="Escape the ordinary in the streets of Paris" />
					<img
						src={Maldives}
						alt="Wake up to a different world in Maldives"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
