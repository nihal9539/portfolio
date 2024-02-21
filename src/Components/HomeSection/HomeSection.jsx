import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';


const HomeSection = ({DarkTheme,setDarkTheme}) => {
    console.log(DarkTheme);
    return (
        <div className={`flex ${DarkTheme ? "dark bg-gray-900 text-white":""}  md:flex-row lg:p-20 lg:px-36 md:p-0  max-sm:flex-col  justify-center max-sm:gap-8 lg:gap-56 w-full md:gap-56 items-center h-5/6 `}>
            <div className='lg:w-1/2 md:w-full sm:w-ful'>
                <img className='m-auto  rounded-full w-96 h-96' src="./IMG_6732 (1).jpg" alt="" />
            </div>
            <div className='lg:w-1/2 md:w-full sm:w-full '>
                <div className='flex flex-col items-center  gap-2'>
                    <h1 className='text-lg font-semibold'>Hello, I'm</h1>
                    <TypeAnimation
                        sequence={[
                            'Mohammed Nihal VK', // Types 'One'
                            2000, // Waits 1s
                            'Full Stack Developer', // Deletes 'One' and types 'Two'
                            2000,
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        // wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2rem', display: 'block', fontWeight: "bold" }}
                    />
                    {/* <span className='text-3xl font-bold'>Mohammed Nihal VK</span>
                <span className='text-xl font-bold'>Full Stack Developer</span> */}
                    <div className='space-x-2 text-sm'>
                        <button className='p-2.5 px-5 dark:border-white border-black border rounded-3xl font-semibold'>Download CV</button>
                        <Link

                            to='contact_me'
                            span={true}
                            smooth={true}
                            className='p-2.5 px-5  bg-gray-800 border-gray-800 text-white border cursor-pointer rounded-3xl font-semibold'>Contact Info</Link>
                    </div>
                    <div className='flex flex-row gap-4 mt-3'>
                        <VscGithubInverted size={35} />
                        <IoLogoLinkedin className='' size={35} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection
