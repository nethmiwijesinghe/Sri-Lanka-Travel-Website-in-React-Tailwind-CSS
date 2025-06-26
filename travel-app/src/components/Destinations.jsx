import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Destinations = () => {

    const[currentIndex, setcurrentIndex] = useState(0);
    const[cardsToShow, setcardsToShow] =useState(1);

useEffect(()=>{
const updateCardsToShow = ()=>{
    if(window.innerWidth >= 1024){
        setcardsToShow(projectsData.length);
    }else{
        setcardsToShow(1);
    };
};
    updateCardsToShow();

    window.addEventListener('resize',updateCardsToShow);
    return () => window.removeEventListener('resize',updateCardsToShow);


},[])

    const nextProject = ()=>{
        setcurrentIndex((prevIndex) => (prevIndex + 1) %projectsData.length)
    }
    const prevProject = ()=>{
        setcurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length -1: prevIndex-1)
    }

  return (
    <motion.div 
        initial={{opacity:0, x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once: true}}
    className='container mx-auto p-14 md:px-20 lg:px-32 my-20 w-full overflow-hidden'id='Destination'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'><span className='underline underline-offset-4 decoration-1 under font-light'>Featured</span> Destinations</h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Find Your Dream Destination</p>
       
        {/* slider button */}

        <div className='flex justify-end items-center mb-8'>
            <button onClick={prevProject}
             className='p-3 bg-gray-200 rou mr-2' aria-label='Previous Destination'>
                <img src={assets.left_arrow} alt="previous" />
            </button>
            <button onClick={nextProject}
            className='p-3 bg-gray-200 rou mr-2' aria-label='Next Destination'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* Destination slider container */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
            >
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                <h2 className='text-xl font-semibold text-gray-800'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='px-1'>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </motion.div>
  )
}

export default Destinations