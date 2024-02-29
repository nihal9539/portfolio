import React, { useState } from 'react'
import { BiListUl } from "react-icons/bi";
import { Link } from "react-scroll"
import { motion } from "framer-motion"



const Header = () => {
    const [open, setOpen] = useState(false)
    const transition = { type: 'spring', duration: 2 }

    return (
        <div className={` h-1/6  flex flex-col `}>
            <nav className=' flex flex-row gap-8 justify-evenly items-center p-5'>
                <motion.div
                    initial={{ x: -50, opacity: 0.5, scale: 0.5 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ ...transition, duration: 4 }}
                >
                    <span className='text-4xl max-sm:text-2xl md:text-3xl font-semibold'>Mohammed Nihal VK</span>
                </motion.div>
                <motion.div className='sm:hidden'
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                    }}

                >
                    <BiListUl size={45} onClick={() => setOpen(!open)} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ...transition, duration: 4 }}

                    className='max-sm:hidden '>
                    <ul className='flex flex-row space-x-8 lg:text-2xl md:text-xl cursor-pointer items-center justify-center'>
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
                                to='projects'
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
                                className='hover:text-gray-600 hover:underline-offset-8 hover:underline ' href="">
                                Contact</Link>

                        </li>

                    </ul>
                </motion.div>

            </nav>
            <div className={`${open ? " bg-red-200 right-0    top-20 relative " : "hidden  -right-96 transition-all ease-out duration-1000 "} z-20`}>
                <ul className=' flex  right-0 flex-col justify-center items-center gap-20 text-4xl font-semibold pb-96 h-svh  bg-white '>
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
