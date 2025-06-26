import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
        initial={{opacity:0, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Company</span></h1>

        <p className='text-gray-500 max-w-80 text-center mb-8'>Find Your Dream Destination</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/3 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>World of Experiences</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>2k+</p>
                        <p>Find Destinations</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>9k+</p>
                        <p>Customer Reviews</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>4.9</p>
                        <p>Overall Rating</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>we believe in creating unforgettable journeys that
                    inspire and rejuvenate. With a passion for exploration and a commitment to excellence,
                    we specialize in curating personalized travel experiences that cater to your dreams.
                    Whether it's an exotic getaway, a family vacation, or an adventure-packed holiday, 
                    our expert team ensures seamless planning and memorable moments. Let us turn your
                    wanderlust into reality—your journey begins with us!</p>
                      <button className='bg-orange-500 text-white px-8 py-2 rounded'>Learn more</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About