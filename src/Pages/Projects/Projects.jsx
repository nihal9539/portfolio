import React from 'react'

const Projects = () => {
    return (
        <div className='min-h-svh bg-white p-10 lg:p-28 md:p-24 space-y-20' id='Projects'>
            <h1 className='text-center font-bold text-5xl tracking-wider'>Projects</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div className='border-2 border-gray-900 space-y-6 p-1 pb-5 rounded-xl'>
                    <img src="./fitclub.png" className='rounded-xl w-full h-72 rounded-b-none' alt="" />
                    <div className='text-center text-2xl tracking-wider  hover:tracking-widest cursor-pointer hover:duration-500 font-bold'>FitClub</div>
                    <div className='flex justify-center gap-10 '>
                        <a href='https://fitclubskl.netlify.app' target="_blank" className='p-2 px-5 border border-black rounded-3xl font-bold'><span>Live Demo</span></a>
                        <a target="_blank" href='https://github.com/nihal9539/fitClub' className='p-2 px-5 border border-black rounded-3xl font-bold'><span>GitHub</span></a>

                    </div>
                </div>
                <div className='border-2 border-gray-900 space-y-6 p-1 pb-5 rounded-xl'>
                    <img src="./fitclub.png" className='rounded-xl w-full h-72 rounded-b-none' alt="" />
                    <div className='text-center text-2xl tracking-wider  hover:tracking-widest cursor-pointer hover:duration-500 font-bold'>FitClub</div>
                    <div className='flex justify-center gap-10 '>
                        <a href='https://fitclubskl.netlify.app' target="_blank" className='p-2 px-5 border border-black rounded-3xl font-bold'><span>Live Demo</span></a>
                        <a target="_blank" href='https://github.com/nihal9539/fitClub' className='p-2 px-5 border border-black rounded-3xl font-bold'><span>GitHub</span></a>

                    </div>
                </div>
             
            
                <div className='border-2 border-gray-900 space-y-6 p-1 pb-5 rounded-xl'>
                    <img src="./fitclub.png" className='rounded-xl w-full h-72 rounded-b-none' alt="" />
                    <div className='text-center text-2xl tracking-wider  hover:tracking-widest cursor-pointer hover:duration-500 font-bold'>FitClub</div>
                    <div className='flex justify-center gap-10 '>
                        <a href='https://fitclubskl.netlify.app' target="_blank" className='p-2 px-5 border border-black rounded-3xl font-bold'><span>Live Demo</span></a>
                        <a target="_blank" href='https://github.com/nihal9539/fitClub' className='p-2 px-5 border border-black rounded-3xl font-bold'><span>GitHub</span></a>

                    </div>
                </div>
              
            
               
            </div>
        </div>
    )
}

export default Projects
