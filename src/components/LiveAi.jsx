import React from 'react'
import Container from './Container'
import { IoMdArrowUp } from "react-icons/io";
import {Volume2,ThumbsUp,ThumbsDown,RefreshCcw,Clipboard} from "lucide-react"
import { FaCheckCircle } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";
import paper from "../assets/paper.png"
import message from "../assets/message.png"








const LiveAi = () => {
  return (
    <div className='relative z-50  '>
        <div className="w-full lg:mt-0 mt-[170px] bg-gradient-to-r from-[#103570] to-[#004FCE] ">
        <Container className="py-[60px] ">
            <div className=" lg:mx-0 mx-[10px]">
                <h5 className='text-[24px] text-[#FCE38A] font-questrial font-normal lg:text-start text-center '>Live Ai Coach</h5>
                <h2 className='lg:text-[60px] text-[40px] text-[#ffffff] font-questrial font-normal leading-[120%] pt-[20px] lg:text-start text-center '>Take a Suggestion Coaching </h2>
            </div>
            <div className="lg:flex items-center pt-[60px] ">
                <div className="h-[577px] lg:w-[787px] bg-[#fff] lg:rounded-[12px] lg:mx-0 mx-[10px] rounded-[5px] ">
                    <div className="pt-[16px] pb-[24px] lg:pl-[32px] pl-[20px]">
                        <h5 className='text-[18px] text-[#1B1B1B] font-manrope font-bold' >AI Sales Coach</h5>
                    </div>
                    <div className="bg-[#F2F3F3] pt-[24px] lg:pb-[273px] pb-[200px] lg:pl-[19.81px] pl-[10px]">
                        <div className="flex  lg:gap-x-[24px] gap-x-[10px] ">
                            <div className="lg:h-[40px] h-[20px] lg:w-[40px] w-[37px] rounded-full bg-[#D9D9D9]"></div>
                            <div className="h-[100px] lg:w-[628px] w-[600px] lg:mr-0 mr-[15px] bg-[#fff] rounded-[8px]">
                                <p className='text-[18px] text-[#181818] lg:w-full w-[95%] font-lato font-normal leading-[32px] lg:pl-[24px] pl-[10px] lg:pt-[8px]'>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex  gap-x-[10px] pl-[31px] pt-[16px] ">
                        <div className="">
                            <p className='text-[14px] font-geist font-normal text-[#002868] tracking-[-4%] py-[7px] lg:w-full w-[62%] px-[12px] bg-[#EBEEF3] rounded-[36px] ' >How do I handle objections?</p>
                        </div>
                        <div className="lg:py-0 py-[10px]">
                            <p className='text-[14px] font-geist font-normal text-[#002868] tracking-[-4%] py-[7px] lg:w-full w-[66%] px-[12px] bg-[#EBEEF3] rounded-[36px] ' >Give me a cold email template</p>
                        </div>
                        <div className="lg:block hidden">
                            <p className='text-[14px] font-geist font-normal text-[#002868]  tracking-[-4%] py-[7px] px-[12px] lg:w-full w-[43%] bg-[#EBEEF3] rounded-[36px]' >Closing techniques</p>
                        </div>
                        <div className="lg:block hidden">
                            <p className='text-[14px] font-geist font-normal text-[#002868]  tracking-[-4%] py-[7px] px-[12px] lg:w-full w-[37%] bg-[#EBEEF3] rounded-[36px]' >Negotiation tips</p>
                        </div>
                    </div>
                    <div className="flex lg:gap-x-[12px] gap-x-[10px] items-center pl-[34px] pt-[16px]">
                       <div className="">
                       <input type="text" placeholder='Ask anything you need' className='text-[14px] font-manrope text-[#9A9A9A] font-normal h-[40px] lg:h-[48px] lg:w-[600px] w-[220px] border-[1px] rounded-[5px] border-[#E5E7EB] lg:pl-[23px] pl-[10px] focus:outline-none' />
                       </div>
                       <div className="">
                        <a href="" className='flex items-center lg:py-[12px] py-[7px] lg:px-[14px] px-[10px] gap-x-[12px] rounded-[8px] bg-[#002868] text-[#fff] font-geist font-medium text-[17px]' >Send <IoMdArrowUp/> </a>
                       </div>
                    </div>
                </div>
                <div className="lg:w-[72px]  h-[72px] lg:h-[328px] bg-[#fff] lg:my-0 my-[30px] rounded-[57px] flex items-center justify-center lg:ml-[24px] lg:mx-0 mx-[10px]">
                   <div className="flex lg:block">
                   <div className="">
                    <RefreshCcw />
                    </div>
                    <div className="lg:py-[40px] lg:px-0 px-[40px]">
                    <ThumbsUp />
                    </div>
                    <div className="">
                        <ThumbsDown /> 
                    </div>
                    <div className="lg:py-[40px] lg:px-0 px-[40px]">
                    <Clipboard />
                    </div>
                    <div className="">
                    <Volume2 />
                    </div>
                   </div>
                </div>
                <div className="lg:pl-[24px] lg:mx-0 mx-[10px]">
                    <div className="">
                    <div className="lg:w-[535px] h-[328px] bg-[#EFEFEF] rounded-[20px]">
                        <div className="lg:pl-[30px] lg:px-0 px-[10px] py-[30px] ">
                        <h3 className='text-[32px] text-[#323232] font-manrope font-bold'>Real-time Analysis</h3>
                        <div className="h-[84px] lg:w-[475px] bg-[#FFFFFF] rounded-[10px] lg:pl-[16px] mt-[20px] ">
                            <div className="flex gap-x-[4px] pt-[16px]">
                                <div className=" lg:pl-0 pl-[10px] ">
                                <FaCheckCircle className='text-[#06B217] text-[20px]' />
                                </div>
                                <div className="">
                                    <p className='text-[18px] text-[#171D25] font-manrope font-semibold leading-[132%]'>Confidence Level</p>
                                </div>
                            </div>
                            <div className="flex lg:w-full w-[92%] lg:mx-0 mx-auto items-center pt-[12px] ">
                            <div className="w-[410px] h-[8px] bg-[#DFDFDF] rounded-full">
                    <div
                        className="h-2 rounded-full bg-[#44D618]"
                        style={{ width: "60%" }}
                    ></div>
                </div>
                <div className="pl-[10px]">
                <span className="text-[12px] font-normal text-[#6D6D6D] font-inter">60%</span>
                </div>
                            </div>
                        </div>
                        <div className="h-[100px] lg:w-[475px] bg-[#FFFFFF] rounded-[10px] mt-[20px]  ">
                            <div className="pl-[16px] pt-[16px]">
                            <div className="flex items-center">
                                <div className="gap-x-[4px] ">
                                <BiLineChart className='text-[20px]' />
                                </div>
                                <div className="">
                                    <p className='text-[18px] text-[#171D25] font-manrope font-semibold leading-[132%]'>Confidence Level</p>
                                </div>
                            </div>
                            <div className=" pt-[12px]">
                                <p className='text-[18px] font-normal text-[#909090] font-lato' >85% improvement in objection handling</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pt-[24px]">
                    <div className="lg:w-[535px] lg:h-[220px] h-[340px] bg-[#EFEFEF] rounded-[20px]">
                            <div className="pl-[30px] pt-[30px]">
                            <h3 className='text-[32px] text-[#323232] font-manrope font-bold'>Quick Actions</h3>
                            <div className="lg:flex gap-x-[20px] pt-[20px] ">
                                <div className="h-[96px] w-[227px] bg-[#FFFFFF] rounded-[8px]">
                                   <div className="pt-[16px] pl-[16px]">
                                   <img src={paper} className='h-[32px] w-[32px]' alt="" />
                                   <h5 className='text-[18px] text-[3171D25] font-manrope font-semibold leading-[132%]'>Generate Script</h5>
                                   </div>
                                </div>
                                <div className="h-[96px] w-[227px] bg-[#FFFFFF] rounded-[8px] lg:mt-0 mt-[20px]">
                                   <div className="pt-[16px] pl-[16px]">
                                   <img src={message} className='h-[32px] w-[32px]' alt="" />
                                   <h5 className='text-[18px] text-[3171D25] font-manrope font-semibold leading-[132%]'>Generate Script</h5>
                                   </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            
            </Container>
        </div>
    </div>
  )
}

export default LiveAi