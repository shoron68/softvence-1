import React from 'react'
import Container from './Container'
import robo1 from "../assets/robo1.png"
import robo2 from "../assets/robo2.png"
import atr from "../assets/atr.png"
import { MdBackupTable } from "react-icons/md";
import CountUp from 'react-countup';

const Banner = () => {
  return (
    <div className='pt-[94px] pb-[60px] relative'>
        
        <Container>
            <div className="lg:flex lg:mx-0 mx-[20px]" >
                <div className="lg:w-1/2">
                <div className="">
                    <h1 className='lg:text-[80px] text-[40px] lg:text-start text-center font-manrope font-medium lg:w-[516px]'>Your AI-Powered Sales Coach</h1>
                </div>
                <div className="lg:flex lg:gap-x-[68px] items-center pt-[26px]">


                          <div className="h-[198px] w-[204px] lg:mx-0 mx-auto overflow-hidden bg-[#fff] shadow-xl rounded-[20px] relative">
                              <div className=" relative flex justify-center">
                                  <img src={robo1} className=" w-auto object-contain z-10 animate-float" alt="" />
                                  <div className="absolute bottom-[20px] h-[5px] bg-[#000b] rounded-full z-0 animate-shadowPulse" />
                              </div>
                          </div>


                    <div className="lg:pt-0 pt-[20px]">
                        <p className='lg:text-[20px] text-[18px] font-manrope lg:text-start text-center font-medium text-[#05131dbd] lg:w-[346px] leading-[163%]'>Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</p>
                    </div>
                    
                </div>
                <div className="lg:flex lg:gap-x-[55px] lg:pt-[88px] pt-[30px] lg:pb-0 ">
                <div className="flex gap-x-[34px]">
                        <div className=" h-[86.78px] w-[89px] bg-[#fff] rounded-[15.57px] shadow-2xl flex items-center">
                            <MdBackupTable className='h-[55px] w-[55px] mx-auto text-[#062F71]' />
                        </div>
                        <div className="">
                        
                                  <CountUp start={0} end={2000} duration={2} suffix="+" separator=""  enableScrollSpy  scrollSpyOnce >
                                      {({ countUpRef }) => (
                                          <span
                                              ref={countUpRef}
                                              className="text-[40px] font-semibold text-[#05131D]"
                                          />
                                      )}
                                  </CountUp>
                            <p className='text-[20px] font-manrope font-medium text-[#05131dbd]' >Your protection</p>
                        </div>
                    </div>

                    <div className="flex gap-x-[34px] lg:pt-0 pt-[20px]">
                        <div className=" h-[86.78px] w-[89px] bg-[#fff] rounded-[15.57px] shadow-2xl flex items-center">
                            <img src={atr} className='h-[38px] w-[40px] mx-auto ' alt="" />
                            
                        </div>
                        <div className="">
                        <CountUp start={0} end={7001} duration={2} suffix="+" separator=""  scrollSpyOnce  enableScrollSpy>
                                      {({ countUpRef }) => (
                                          <span
                                              ref={countUpRef}
                                              className="text-[40px] font-semibold text-[#05131D]"
                                          />
                                      )}
                                  </CountUp>
                            <p className='text-[20px] font-manrope font-medium text-[#05131dbd]' >Provide tailored</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2 lg:pt-0 pt-[50px]">
                <div className=" flex justify-end relative">
                    <div className="">
                    <img src={robo2} className='lg:w-[583px] lg:h-[628px]' alt="" />
                    </div>

                    <div className="lg:h-[359px] lg:w-[467px] bg-[#fff] rounded-[27px] shadow-lg absolute lg:bottom-[-120px] bottom-[-200px] left-0 lg:left-[-28px]">
                    <div className=" lg:px-0 px-[10px] lg:pt-[50px] lg:py-0 py-[30px]">
                    <div className="flex lg:gap-x-[140px] gap-x-[90px] lg:pl-[24.67px]">

                    <CountUp start={0} end={721} duration={2} suffix="+" separator=""  scrollSpyOnce  enableScrollSpy>
                                      {({ countUpRef }) => (
                                          <span
                                              ref={countUpRef}
                                              className="lg:text-[50px] text-[24px] font-manrope font-semibold text-[#00245F] "
                                          />
                                      )}
                                  </CountUp>
                                  <CountUp start={0} end={1000} duration={2} suffix="+" separator=""  scrollSpyOnce  enableScrollSpy>
                                      {({ countUpRef }) => (
                                          <span
                                              ref={countUpRef}
                                              className="lg:text-[50px] text-[24px] font-manrope font-semibold text-[#00245F] "
                                          />
                                      )}
                                  </CountUp>
                    </div>
                    <div className="lg:pt-[23px] lg:pl-[28px] pt-[10px]">
                        <h3 className='lg:text-[27.98px] text-[20px] font-manrope font-semibold text-[#05131D]'>Growth is our priority.</h3>
                    </div>
                    <div className="lg:pt-[39px] lg:pl-[28px]">
                        <p className='lg:text-[17px] text-[14px] lg:text-start text-center lg:mx-0 mx-auto  w-[230px] font-poppins font-medium leading-[163%] lg:w-[407px] text-[rgba(5,19,29,0.71)] '>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                    </div>
                    </div>
                </div>
                </div>
                
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner