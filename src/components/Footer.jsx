import React from 'react'
import Container from './Container'
import logo2 from "../assets/logof.png"
import sahdowb from "../assets/sahdowb.png"
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";





const Footer = () => {
    return (
        <div className="bg-[url('./assets/bgb.png')] bg-cover bg-centers  overflow-hidden ">
            <Container className="pb-[40px] " >
                <div className=" lg:mx-0 mx-[10px]">
                    <div className="py-[32px]">
                        <div className="lg:h-[353px] w-full bg-gradient-to-r from-[#103570] to-[#004FCE] lg:rounded-[24px]   ">
                            <div className="">
                                <div className="lg:pt-[80px] lg:py-0 py-[25px]">
                                    <h3 className='text-[38px] font-manrope font-semibold text-[#fff] leading-[130%] text-center'>Ready to Hire Smarter?</h3>
                                    <p className='text-[16px] font-manrope font-medium leading-[160%] text-[#B9BDC7] pt-[12px] text-center'>Unlock Exclusive Insights Subscribe to Our Newsletter</p>
                                </div>
                                <div className="flex justify-center lg:pt-[48px] ty-[20px] lg:pb-0 pb-[30px]">
                                    <a href="#" className='text-[16px] cursor-pointer text-[#00245F] font-manrope font-medium leading-[160%] py-[16px] px-[36px] rounded-[50px] bg-[#FCE38A]'>Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:flex  lg:pt-[112px] pt-[50px] lg:mx-0 mx-[10px]  ">
                    <div className=" lg:block">
                        <div className="lg:block flex justify-center">
                            <img src={logo2} alt="" />
                        </div>
                        <p className='text-[14px] leadig-[24px] text-[#335386] lg:text-start text-center font-manrope lg:w-[534px] font-normal pt-[30px]'>SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.</p>
                        <div className="flex items-center gap-x-[12px] pt-[30px] lg:justify-start justify-center">
                            <a href="#">
                            <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center text-[#002868] hover:text-[#fff] hover:bg-[#002868] duration-200">
                                <RiFacebookFill className='' />
                            </div>
                            </a>
                            <a href="#">
                            <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center text-[#002868] hover:text-[#fff] hover:bg-[#002868] duration-200">
                                <FaTwitter className='' />
                            </div>
                            </a>
                            <a href="#">
                            <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center text-[#002868] hover:text-[#fff] hover:bg-[#002868] duration-200">
                                <FaLinkedinIn className='' />
                            </div>
                            </a>
                           <a href="#">
                           <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center text-[#002868] hover:text-[#fff] hover:bg-[#002868] duration-200">
                                <FaInstagram className='' />
                            </div>
                           </a>
                        </div>
                    </div>
                    <div className="lg:flex lg:pt-0 pt-[30px] ">
                        <div className="flex lg:justify-start lg:mx-0 lg:gap-x-0 gap-x-[30px]  mx-[70px] ">
                            <div className="lg:pl-[257px] ">
                                <h4 className='text-[18px] font-manrope text-[#001C4A] font-semibold leading-auto lg:text-start text-center'>Navigation</h4>
                                <ul className='lg:pt-[36px] pt-[20px]'>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto lg:text-start text-center hover:underline hover:text-[#002868] '><a href="#">Service</a></li>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Agency</a></li>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Case Study</a></li>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Resource</a></li>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="lg:pl-[115px]">
                                <h4 className='text-[18px] font-manrope text-[#001C4A] font-semibold leading-auto lg:text-start text-center'>Licence</h4>
                                <ul className='lg:pt-[36px] pt-[20px]'>

                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Privacy Policy</a></li>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Copyright</a></li>
                                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center hover:underline hover:text-[#002868]'><a href="#">Email Address</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:pl-[110px] lg:pt-0 pt-[20px]">
                            <h4 className='text-[18px] font-manrope text-[#001C4A] font-semibold leading-auto lg:text-start text-center'>Contact</h4>
                            <ul className='lg:pt-[39px] pt-[15px]'>
                                <li className='flex items-center lg:justify-start justify-center text-[14px] font-manrope text-[#335386] font-normal leading-auto gap-x-[8px] lg:text-start text-center '><span className='text-[#002868]'><FaPhone className='lg:h-[24px] lg:w-[24px] h-[18px] w-[18px]' /> </span>(406) 555-0120</li>
                                <li className='flex items-center text-[14px] lg:justify-start justify-center font-manrope text-[#335386] font-normal leading-auto gap-x-[8px] pt-[17px] lg:text-start text-center py-[20px] '><span className='text-[#002868]'><MdEmail className='lg:h-[24px] lg:w-[24px] h-[20px] w-[20px]' /></span>Hey@boostim.com</li>
                                <li className='flex  text-[14px] font-manrope text-[#335386] lg:justify-start justify-center font-normal leading-auto gap-x-[8px] lg:text-start text-center '> <span className='text-[#002868]  pt-[5px]'><IoLocation className='lg:h-[24px] lg:w-[24px] h-[20px] w-[20px]' /></span> 2972 Westheimer Rd. Santa Ana,<br /> Illinois 85486 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="h-[1px] bg-[#B4B4B4] mb-[90px]"></div>
        </div>
    )
}

export default Footer