import React, { useState } from 'react'
import { BiListUl } from "react-icons/bi";
import { Link } from "react-scroll"
import {motion} from "framer-motion"



const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={` h-1/6 flex flex-col`}>
            <nav className='dark:bg-gray-900 dark:text-white flex flex-row gap-8 justify-evenly items-center p-5'>
                <div>
                    <span className='text-4xl max-sm:text-2xl font-semibold'>Mohammed Nihal VK</span>
                </div>
                <motion.div className='sm:hidden'
                 whileHover={{
                   scale: 1.1,
                   transition: { duration: 0.5 },
                 }}

                >
                    <BiListUl size={45} onClick={() => setOpen(!open)} />
                </motion.div>
                <div className='max-sm:hidden '>
                    <ul className='flex flex-row space-x-8 text-2xl cursor-pointer'>
                        <li>
                            <Link
                                to='about_me'
                                span={true}
                                smooth={true}

                                className='hover:text-gray-600 hover:underline-offset-8 hover:underline '
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                to='skills'
                                span={true}
                                smooth={true}
                                className='hover:text-gray-600 hover:underline-offset-8 hover:underline  '
                            >Skills</Link>
                        </li>
                        <li>
                            <Link
                                to='Projects'
                                span={true}
                                smooth={true}
                                className='hover:text-gray-600 hover:underline-offset-8 hover:underline '
                            >Projects</Link>
                        </li>
                        <li>
                            <Link
                                to='contact_me'
                                span={true}
                                smooth={true}
                                className='hover:text-gray-600 hover:underline-offset-8 hover:underline  ' href="">
                                Contact</Link>

                        </li>
                    </ul>
                </div>

            </nav>
            <div className={`${open ? "" : "hidden "} z-20`}>
                <ul className='transition-all ease-in-out duration-700 flex flex-col justify-center items-center gap-32 text-4xl font-semibold  h-svh  bg-white '>
                    <li>
                        <Link
                            to='about_me'
                            onClick={() => setOpen(!open)}

                            span={true}
                            smooth={true}
                            className=' text-black ' href="">About</Link>
                    </li>
                    <li>
                        <Link
                            to='skills'
                            span={true}
                            smooth={true}
                            onClick={() => setOpen(!open)}
                            className=' text-black ' href="">Skills</Link>
                    </li>
                    <li>
                        <Link
                            to='projects'
                            span={true}
                            smooth={true}
                            onClick={() => setOpen(!open)}
                            className=' text-black ' href="">Projects</Link>
                    </li>
                    <li>
                        <Link to='contact_me'
                            onClick={() => setOpen(!open)}
                            span={true}
                            smooth={true}
                            className=' text-black ' href="">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
