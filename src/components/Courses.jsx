import React from 'react'
import Container from './Container'
import robo3 from "../assets/robo3.png"
import robo4 from "../assets/robo4.png"

const Courses = () => {
    return (
        <div className='pt-[84px] relative z-50 lg:mx-0 mx-[20px]'>
            <Container>
                <div className="">
                <div className="mb-[6px]">
                         <h2 className='text-[48px] font-manrope font-semibold leading-[150%] lg:text-start text-center text-[#262626]'>Our Courses</h2>
                    </div>
                </div>
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-[1029px]">
                        <p className='lg:text-[18px] text-[16px] leading-[150%] lg:text-start text-center  font-manrope font-normal text-[#59595A] '>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    </div>
                    <div className="pt-[6px] flex justify-center lg:block lg:mt-0 mt-[10px]">
                        <a className='lg:py-[18px] py-[12px] lg:px-[24px] px-[20px] text-[#fff] text-[18px] font-manrope font-medium bg-[#002868] border-[1px] border-[#002868] rounded-[7px] hover:bg-[#fff] hover:text-[#002868] hover:border-[1px] hover:border-[#002868] duration-200 ' href="#">View All</a>
                    </div>
                </div>
                <div className="lg:flex justify-between pt-[48px] ">
                    <div className="lg:w-[1/2]">
                    <div className="bg-[#F0F0F0] rounded-[15px] lg:w-[705px]  ">
                        <div className="lg:w-[605.81px] lg:mx-auto mx-[25px] lg:pt-[50px] lg:pb-[30px] py-[30px]">
                        <div className="">
                        <img src={robo3} alt="" />
                        </div>
                        <div className="flex pt-[30px] justify-between items-center ">
                            <div className="flex gap-x-[10px]">
                                <div className="py-[10px] px-[12px] bg-[#fff] rounded-[6px]" >
                                    <span className='lg:text-[18px] text-[14px] text-[#4C4C4D] leading-auto font-manrope font-medium '>4 Weeks</span>
                                </div>
                                <div className="py-[10px] px-[16px] bg-[#fff] rounded-[6px]" >
                                    <span className='lg:text-[18px] text-[14px] text-[#4C4C4D] leading-auto font-manrope font-medium'>Beginner</span>
                                </div>
                            </div>
                            <div className="">
                                <p className='lg:text-[20px] text-[14px] font-manrope font-medium text-[#262626]'>By John Smith</p>
                            </div>
                        </div>
                        <div className=" pt-[30px]">
                            <h2 className='text-[24px] lg:text-start text-center font-manrope font-semibold text-[#262626] leading-[150%]'>Web Design Fundamentals</h2>
                            <p className='text-[18px] lg:text-start text-center text-[#4C4C4D] font-manrope font-normal leaing-[150%] pt-[14px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                        </div>
                        <div className="pt-[30px] pb-[50px]">
                            <a className='text-[18px] text-[#fff] font-Vietnam font-medium py-[18px] lg:px-[258px] px-[100px]  bg-[#002868] rounded-[8px]' href="#">Get it Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="lg:w-[1/2] lg:mt-0 mt-[30px]">
                    <div className="bg-[#F0F0F0] rounded-[15px] lg:w-[705px]  ">
                        <div className="lg:w-[605px] lg:mx-auto mx-[25px] lg:pt-[50px] pb-[30px] py-[30px]">
                        <div className="">
                        <img src={robo4} alt="" />
                        </div>
                        <div className="flex pt-[30px] justify-between items-center" >
                        <div className="flex gap-x-[10px]">
                                <div className="py-[10px] px-[12px] bg-[#fff] rounded-[6px]" >
                                    <span className='lg:text-[18px] text-[14px] text-[#4C4C4D] leading-auto font-manrope font-medium '>4 Weeks</span>
                                </div>
                                <div className="py-[10px] px-[16px] bg-[#fff] rounded-[6px]" >
                                    <span className='lg:text-[18px] text-[14px] text-[#4C4C4D] leading-auto font-manrope font-medium'>Beginner</span>
                                </div>
                            </div>
                            <div className="">
                                <p className='lg:text-[20px] text-[14px] font-manrope font-medium text-[#262626]'>By John Smith</p>
                            </div>
                        </div>
                        <div className=" pt-[30px]">
                            <h2 className='text-[24px] lg:text-start text-center font-manrope font-semibold text-[#262626] leading-[150%]'>Web Design Fundamentals</h2>
                            <p className='text-[18px] lg:text-start text-center text-[#4C4C4D] font-manrope font-normal leaing-[150%] pt-[14px]'>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                        </div>
                        <div className="pt-[30px] pb-[50px]">
                            <a className='text-[18px] text-[#fff] font-Vietnam font-medium py-[18px] lg:px-[258px] px-[100px]  bg-[#002868] rounded-[8px]' href="#">Get it Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}

export default Courses