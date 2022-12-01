import React from 'react';

// import images
// import Italy from '../../assets/images/almafi-coast.jpg';
import Kyoto from '../../assets/images/arashiyama.jpg';
import Iceland from '../../assets/images/iceland.jpg';
import Maldives from '../../assets/images/maldives.jpg';
import Mykonos from '../../assets/images/mykonos.jpg';

const Discover = () => {
  return (
    <div className="discover w-full h-full md:h-screen relative p-8">
        <div className="w-full md:max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center">
            <h1 className="mb-8 text-2xl md:text-4xl font-semibold uppercase tracking-widest">
                Discover dreamy destinations
            </h1>
            <h2 className="mb-8 text-xl md:text-2xl font-light uppercase tracking-widest">
                Don't miss these deals
            </h2>

            <div className="w-full md:max-w-screen-lg flex flex-row flex-wrap justify-center items-center">
                <div className="left w-full md:w-[600px] pr-4">
                    <div className="images grid grid-cols-2 gap-2 md:gap-4">
                        {/* <img
                            src={Italy}
                            alt="Soak in the view of the Almafi Coast, Italy"
                            className="col-span-2"
                        /> */}
                        <img
                            src={Kyoto}
                            alt="Get lost in the bamboo forest of Kyoto, Japan"
                        />
                        <img
                            src={Iceland}
                            alt="Collect moments in Iceland"
                        />
                        <img src={Maldives} alt="Escape the ordinary in Maldives" />
                        <img
                            src={Mykonos}
                            alt="Wake up to a different world in Mykonos, Greece"
                        />
                    </div>
                </div>

                <div className="right w-full md:w-[375px]">
                    <form className="w-[80%] sm:w-full mx-auto">
                        <div className="py-4">
                            <label className="block">Destination</label>
                            <input type="text" className="w-full" />
                        </div>
                        <div className="w-full flex justify-between items-center pb-4">
                            <div>
                                <label className="block">Departure Date</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label className="block">Return Date</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button className="w-full">Find Your Trip</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Discover;