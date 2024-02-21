import React from 'react'
import { MdOutlineBadge } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className='min-h-svh p-8 lg:p-36 md:p-8 w-full' id='about_me'>

            <h1 className='text-center font-bold text-5xl tracking-wider'>About Me</h1>
            <div className='pt-20 grid lg:grid-col-2 md:grid-cols-2 sm:grid-cols-1 gap-20 '>
                {/* <div className='  md:px-0'>
                    <img className='rounded-xl m-auto w-7/12'  src="./IMG_6732 (1).jpg" alt="" />
                </div> */}
                <div>
                    <span className='text-xl font-semibold'>I am a self-taught full-stack developer who loves solving problems digitally with top-notch technologies. I create websites with clean and optimized code, building scalable, secure, and user-friendly websites. Let's work together to turn your ideas into reality.</span>
                </div>

                <div className=' w-full lg:gap-20  md:gap-10 sm:gap-10 max-sm:gap-10 grid grid-cols-1'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-16 md:gap-10 sm:gap-10 max-sm:gap-10 w-full'>
                        <div className='border border-gray-800 rounded-xl p-4 flex flex-col justify-center items-center '>
                            <MdOutlineBadge size={35} />
                            <h1 className='font-bold text-lg'>Experience</h1>
                            <p>2+ years</p>
                            <h1>Full Stack developer</h1>
                        </div>
                        <div className='border border-gray-800 rounded-xl justify-center  p-4 flex flex-col items-center'>
                            <FaUserFriends size={35} />
                            <h1 className='font-bold text-lg'>Education</h1>
                            <p className='text-center'>BCA (Bachelor of Computer Applications)</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
