import React from 'react'

const Skills = () => {
    return (
        <div className='h-svh bg-white p-10 lg:p-28 md:p-24 space-y-20' id='skills'>
            <h1 className='text-center font-bold text-5xl tracking-wider'>Skills</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
                <div className='border-2 border-gray-900 p-4 rounded-xl'>
                    <h1 className='pl-4 text-3xl font-bold mb-4'>Frontend</h1>
                    <div className='flex flex-wrap gap-3'>
                        <span className='p-2 border border-gray-600 rounded-xl'>HTML</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>CSS</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Javascript</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>React Js</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Redux</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Bootstrap</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Tailwind CSS</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Sass</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Flutter</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Typescript</span>
                    </div>
                </div>
                <div className='border-2 border-gray-900 p-4 rounded-xl'>
                    <h1 className='pl-4 text-3xl font-bold mb-4'>Backend</h1>
                    <div className='flex flex-wrap gap-3'>
                        <span className='p-2 border border-gray-600 rounded-xl'>Node Js</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Express Js</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Mongo DB</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>MySQL</span>
                        <span className='p-2 border border-gray-600 rounded-xl'>Firebase</span>

                    </div>
                </div>
                <div className='border-2 border-gray-900 p-4 rounded-xl'>
                    <h1 className='pl-4 text-3xl font-bold mb-4'>Devops</h1>
                    <div className='flex flex-wrap gap-3'>
                        <span className='p-2 border border-gray-600 rounded-xl'>Git</span>
                

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
