import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";


const ContactMe = () => {
    return (
        <div className='h-svh lg:p-28 md:p-12 max-sm:pt-28   space-y-10' id='contact_me'>
            <h1 className='text-center text-4xl font-bold'>Contact me </h1>

            <div className='p-10 max-sm:p-4'>
                <form action="" className='w-full p-4 border rounded-lg border-gray-800 '>
                    <div className='flex lg:flex-row max-sm:flex-col md:flex-row w-full  justify-evenly p-2 gap-8'>
                        <div className='lg:w-1/2 sm:w-full md:w-full space-y-2'>
                            <label htmlFor="Name">Name</label><br />
                            <div className='border-2 p-3 rounded-md border-gray-600 '>
                                <input className='w-full outline-none' type="text" placeholder='Your Name' />
                            </div>
                        </div>
                        <div className='lg:w-1/2 sm:w-full md:w-full space-y-2'>
                            <label htmlFor="Name">Email</label>
                            <br />
                            <div className='border-2 p-3 rounded-md border-black'>
                                <input className='w-full outline-none' type="email" placeholder='Your Email' />
                            </div>
                        </div>


                    </div>
                    <div className='w-full p-2'>

                        <div className='border-2 p-3 rounded-md border-black '>
                            <textarea name="" placeholder='Your Message' className='w-full border-none outline-none resize-none ' id="" rows="5" ></textarea>

                        </div>
                    </div>

                </form>


            </div>
            <hr class="w-full bg-black h-0.5  " />

            <div className='flex justify-center gap-28 max-sm:px-2'>
                <img src="./instagram.png" className='w-14 h-14' alt="" />
                <a href="https://www.linkedin.com/in/mohammed-nihal-v-k-a02045237/" target='_blank'>

                    <img src="./linkedin.png" className='w-14 h-12' alt="" />
                </a>
                <a href="https://github.com/nihal9539" target="_blank">

                    <VscGithubInverted className='w-14 h-12' />
                </a>
            </div>
        </div>
    )
}

export default ContactMe
