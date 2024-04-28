import React, { useEffect, useState } from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ContactMe = () => {
    const [visible, setVisible] = useState(false)
    const scrolled = document.documentElement.scrollTop;

    const [offset, setOffset] = useState(0);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    let scrollVal = Math.round((scrolled *100)/calcHeight);

    const style ={
        display: visible ? 'inline' : 'none',
        // background:`conic-gradient(#03cc65 ${scrollVal}%,#d7d7d7${scrollVal}%)`
        background: `conic-gradient(#1a202c ${scrollVal}%,white ${scrollVal}% )`
    }

    const toggleVisible = () => {
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div className={`  lg:p-20 md:p-12 max-sm:pt-28   space-y-10 `} id='contact_me'>
            <div onClick={scrollToTop} style={style}  className=' fixed bottom-14 right-14   hover:scale-110  place-items-center grid cursor-pointer border border-gray-500 rounded-full   duration-200 p-1'><div className='bg-white dark:bg-gray-900 border-gray-500 border block rounded-full ' style={{ height: "calc(100% - 15px)" }}><MdKeyboardDoubleArrowUp    size={40} /></div></div>

            <h1 className='text-center text-4xl font-bold'>Contact me </h1>

            <div className='p-10 max-sm:p-4'>
                <form action="" className='w-full p-4 border rounded-lg border-gray-800 '>
                    <div className='flex lg:flex-row max-sm:flex-col md:flex-row w-full  justify-evenly p-2 gap-8'>
                        <div className='lg:w-1/2 sm:w-full md:w-full space-y-2'>
                            <label htmlFor="Name">Name</label><br />
                            <div className='border-2 p-3 rounded-md border-black dark:border-gray-400 '>
                                <input className='w-full outline-none dark:bg-gray-900' type="text" placeholder='Your Name' />
                            </div>
                        </div>
                        <div className='lg:w-1/2 sm:w-full md:w-full space-y-2'>
                            <label htmlFor="Name">Email</label>
                            <br />
                            <div className='border-2 p-3 rounded-md border-black dark:border-gray-400'>
                                <input className='w-full outline-none dark:bg-gray-900' type="email" placeholder='Your Email' />
                            </div>
                        </div>


                    </div>
                    <div className='w-full p-2'>

                        <div className='border-2 p-3 rounded-md border-black dark:border-gray-400 '>
                            <textarea name="" placeholder='Your Message' className='w-full border-none outline-none resize-none dark:bg-gray-900' id="" rows="5" ></textarea>

                        </div>
                    </div>

                </form>


            </div>


            <div className='flex justify-center'>
                <hr class="w-11/12 bg-black h-0.5 " />
            </div>

            <div className=' flex justify-center max-sm:gap-10 md:gap-28 lg:gap-44 max-sm:px-2'>


                <a href="https://www.instagram.com/_nihal_vk_" target='_blank'>
                    <img src="./instagram.png" className='w-14 h-14' alt="" />
                </a>
                <a href="https://www.linkedin.com/in/mohammed-nihal-v-k-a02045237/" target='_blank'>
                    <img src="./linkedin.png" className='w-14 h-12' alt="" />
                </a>
                <a href="https://github.com/nihal9539" target="_blank">

                    <VscGithubInverted className='w-14 h-12 dark:text-white'/>
                </a>

            </div>
        </div>
    )
}

export default ContactMe
