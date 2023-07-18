import React from 'react'
import Delivery from "../img/delivery.png";
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:mb-0 mb-10" id='home'>
      <div className="py-2 flex-1 flex flex-col items-start md:items-canter justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full bg-white object-contain"
              alt=""
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] md:text-[5rem]">Your City</span>
        </p>
        <p className="text-base text-textColor md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          nostrum quibusdam. Provident ipsum quo, repellendus dolorem harum
          sapiente animi qui, voluptas, facilis praesentium ut obcaecati.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="mt-10 md:mt-0 py-2 flex-1 flex items-center relative">
        <img src={HeroBg} alt="Hero-background" className='ml-auto h-420 w-full lg:w-auto lg:h-650' />
        <div className='w-full h-full absolute top-0 left-0 grid grid-cols-2 items-center justify-items-center 2xl:px-32 py-4 gap-4'>
            {
                heroData && heroData.map((item) => {
                    return (
                        <div key={item.id} className='lg:w-190 w-150 mt-10 md:mt-0 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                            <img src={item.image} className='w-40 -mt-20' alt="Item1" />
                            <p className='text-xl font-semibold text-textColor mt-4'>{item.name}</p>
                            <p className='text-sm text-gray-500 font-semibold my-3'>{item.decp}</p>
                            <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span> {item.price}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>

    </section>
  )
}

export default HomeContainer