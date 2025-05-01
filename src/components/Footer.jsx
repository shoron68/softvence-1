import React from 'react'
import Container from './Container'
import logo2 from "../assets/logof.png"
import sahdowb from "../assets/sahdowb.png"
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter,FaLinkedinIn  } from "react-icons/fa";
import { FaInstagram ,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";





const Footer = () => {
  return (
    <div className="bg-[url('./assets/bgb.png')] bg-cover bg-center relative z-50  overflow-hidden ">
    
<div className="absolute bottom-[0px] left-0 -z-40   ">
            <img src={sahdowb} alt="" />
        </div>
        <Container className="pb-[40px] " >

        <div className=" lg:mx-0 mx-[10px]">
        <div className="py-[32px]">
            <div className="h-[353px] w-full bg-gradient-to-r from-[#103570] to-[#004FCE] lg:rounded-[24px]   ">
                    <div className="">
                    <div className="lg:pt-[80px] lg:py-0 py-[25px]">
                        <h3 className='text-[38px] font-manrope font-semibold text-[#fff] leading-[130%] text-center'>Ready to Hire Smarter?</h3>
                        <p className='text-[16px] font-manrope font-medium leading-[160%] text-[#B9BDC7] pt-[12px] text-center'>Unlock Exclusive Insights Subscribe to Our Newsletter</p>
                    </div>
                    <div className="flex justify-center pt-[48px]">
                        <a href="#" className='text-[16px] cursor-pointer text-[#00245F] font-manrope font-medium leading-[160%] py-[16px] px-[36px] rounded-[50px] bg-[#FCE38A]'>Join Now</a>
                    </div>
                    </div>
            </div>
            </div>
        </div>

        <div className="lg:flex  lg:pt-[112px] pt-[50px] lg:mx-0 mx-[10px]  ">
            <div className="lg:w-[534px] lg:block">
                <div className="lg:block flex justify-center">
                <img src={logo2} alt="" />
                </div>
                <p className='text-[14px] leadig-[24px] text-[#335386] lg:text-start text-center font-manrope font-normal pt-[30px]'>SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.</p>
                <div className="flex items-center gap-x-[12px] pt-[30px] lg:justify-start justify-center">
                    <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center">
                    <RiFacebookFill className='text-[#002868]'/>
                    </div>
                   <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center">
                   <FaTwitter className='text-[#002868]'/>
                   </div>
                    <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center">
                    <FaLinkedinIn className='text-[#002868]'/>
                    </div>
                   <div className="h-[34px] w-[34px] rounded-full bg-[#fff] flex justify-center items-center">
                   <FaInstagram className='text-[#002868]'/>
                   </div>
                </div>
            </div>
            <div className="lg:flex lg:pt-0 pt-[30px] ">
            <div className="flex lg:justify-start gap-x-[40px] mx-[70px] ">
            <div className="lg:pl-[257px] ">
                <h4 className='text-[18px] font-manrope text-[#001C4A] font-semibold leading-auto lg:text-start text-center'>Navigation</h4>
                <ul className='lg:pt-[36px] pt-[20px]'>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto lg:text-start text-center'>Service</li>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center'>Agency</li>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center'>Case Study</li>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center'>Resource</li>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center'>Contact</li>
                </ul>
            </div>
            <div className="lg:pl-[115px]">
            <h4 className='text-[18px] font-manrope text-[#001C4A] font-semibold leading-auto lg:text-start text-center'>Licence</h4>
                <ul  className='lg:pt-[36px] pt-[20px]'>
                   
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto lg:text-start text-center'>Privacy Policy</li>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center'>Copyright</li>
                    <li className='text-[14px] font-manrope text-[#335386] font-normal leading-auto pt-[17px] lg:text-start text-center'>Email Address</li>
                </ul>
            </div>
            </div>
            <div className="lg:pl-[115px] lg:pt-0 pt-[20px]">
            <h4 className='text-[18px] font-manrope text-[#001C4A] font-semibold leading-auto lg:text-start text-center'>Contact</h4>
                <ul  className='lg:pt-[36px] pt-[15px]'>
                    <li className='flex items-center lg:justify-start justify-center text-[14px] font-manrope text-[#335386] font-normal leading-auto gap-x-[8px] lg:text-start text-center '><span className='text-[#002868]'><FaPhone /> </span>(406) 555-0120</li>
                    <li className='flex items-center text-[14px] lg:justify-start justify-center font-manrope text-[#335386] font-normal leading-auto gap-x-[8px] pt-[17px] lg:text-start text-center '><span className='text-[#002868]'><MdEmail/></span>Hey@boostim.com</li>
                    <li className='flex  text-[14px] font-manrope text-[#335386] lg:justify-start justify-center font-normal leading-auto gap-x-[8px] pt-[17px] lg:text-start text-center '> <span className='text-[#002868] pt-[5px]'><IoLocation/></span> 2972 Westheimer Rd. Santa Ana,<br/> Illinois 85486 </li>
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