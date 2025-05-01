import React,{useState} from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import shadow from "../assets/shadow.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show,setShow]=useState(false)
    return (
        <div className='py-[30px] relative z-50'>
            <div className="absolute top-[-100px] left-0 -z-10" >
                        <img src={shadow} alt="" />
                    </div>
            <Container>
                <div className="flex justify-between  items-center lg:mx-0 mx-[10px]">
                    <div className="flex items-center lg:gap-x-[74px] ">
                        <div className="lg:w-full w-[70%]" >
                            <img src={logo} alt="" />
                        </div>
                        <div className="hidden md:block">
                            <ul className='flex gap-x-[33px]' >
                                <li className='text-[14px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Home</a></li>
                                <li className='text-[14px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> About</a></li>
                                <li className='text-[14px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Pricing</a></li>
                                <li className='text-[14px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Consulting</a></li>
                                <li className='text-[14px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Ai Coach</a></li>
                            </ul>
                        </div>
                    </div>

                    
                    
                    <div className="flex items-center gap-x-4">
                        <div className="hidden md:block">
                            <a className='py-[13px] px-[35px] rounded-[50px] border-[1px] border-[#010205] text-[#010205] font-jakarta hover:bg-[#002868]  hover:text-[#fff] font-bold duration-200 ' href="#">Get started</a>
                        </div>
                        <div className="md:hidden ">
                            <button onClick={() => setShow(true)}>
                                <FaBars className="text-[28px]" />
                            </button>
                        </div>
                    </div> 
                </div>
            </Container>
            <div className={` top-0 right-0 w-[280px] absolute  max-h-auto bg-white z-50 shadow-lg transform transition-transform duration-300 ${show ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end  mt-[33px] mr-[10px] ">
                <button onClick={() => setShow(false)}>
                <RxCross2 className="text-[28px]" />
                </button>
                </div>
                <div className=" pl-[20px]">
                <ul className='' >
                                <li  className='text-[16px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Home</a></li>
                                <li  className='text-[16px] py-[15px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> About</a></li>
                                <li  className='text-[16px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Pricing</a></li>
                                <li  className='text-[16px] py-[15px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Consulting</a></li>
                                <li  className='text-[16px] text-[#020407] font-semibold leading-[100%] hover:text-[#002868] duration-200'><a href="#"> Ai Coach</a></li>
                            </ul>
                </div>
                <div className=" mt-[30px] ml-[20px] ">
                <a className='py-[10px] px-[20px] rounded-[50px] border-[1px] border-[#010205] text-[#010205] font-jakarta hover:bg-[#002868]  hover:text-[#fff] font-bold duration-200 text-center  ' href="#">Get started</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar