import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";


const HomeSection = () => {
    return (
        <div className='flex  md:flex-row   max-sm:flex-col  justify-center max-sm:gap-28 w-full gap-56 items-center h-5/6'>
            <div>
                <img  className='rounded-full w-80 h-80' src="./IMG_6732 (1).jpg" alt="" />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <h3>Hello, I'm</h3>
                <span className='text-3xl font-bold'>Mohammed Nihal VK</span>
                <span className='text-xl font-bold'>Full Stack Developer</span>
                <div className='space-x-2 text-sm'>
                    <button className='p-4 px-6 border-black border rounded-3xl font-semibold'>Download CV</button>
                    <button className='p-4 px-6 bg-gray-800 border-gray-800 text-white border rounded-3xl font-semibold'>Contact Info</button>
                </div>
                <div className='flex flex-row gap-4 mt-3'>
                    <VscGithubInverted size={35} />
                    <IoLogoLinkedin className='' size={35}/>

                </div>
            </div>
        </div>
    )
}

export default HomeSection
