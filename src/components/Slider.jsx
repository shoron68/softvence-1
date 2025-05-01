import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from './Container';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`py-[16px] px-[32px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff] cursor-pointer ${className}`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <ArrowLeft className="w-[24px] h-[24px]" />
      </div>
    );
  }


const Slider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='absolute z-10'>
        <Container>
        
      <Slider {...settings}>
        <div>
          

        <div className="w-[1280px] mx-auto pt-[115px]">
    <div className="flex justify-center">
      <div className=" ">
        <p className=" text-[36px] text-[#010205] font-manrope font-semibold leading-[160%] tracking-[-3] ">
        “They thoroughly analyze our industry and target audience, allowing them
          to develop customized campaigns that effectively reach and engage our customers.
          Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
        </p>

        <div className="flex justify-between pt-[74px]">
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-full bg-[#00000038]" />
            <div>
              <p className="text-[20px] text-[#010205] font-manrope font-bold leading-[180%]">Michael Kaizer</p>
              <p className="text-[16px] text-[#878C91] font-manrope font-medium leading-[180%]">CEO of Basecamp Corp</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="py-[16px] px-[32px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff]">
              <ArrowLeft className='w-[24px] h-[24px]' />
            </button>
            <span className="text-[20px] text-[#878C91] font-manrope font-semibold mx-[38px]">01/05</span>
            <button className="py-[16px] px-[32px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff]">
              <ArrowRight className='w-[24px] h-[24px] ' />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
        <div>
          

        <div className="w-[1280px] mx-auto pt-[115px]">
    <div className="flex justify-center">
      <div className=" ">
        <p className=" text-[36px] text-[#010205] font-manrope font-semibold leading-[160%] tracking-[-3] ">
        “They thoroughly analyze our industry and target audience, allowing them
          to develop customized campaigns that effectively reach and engage our customers.
          Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
        </p>

        <div className="flex justify-between pt-[74px]">
          <div className="flex items-center gap-x-4">
            <div className="w-12 h-12 rounded-full bg-[#00000038]" />
            <div>
              <p className="text-[20px] text-[#010205] font-manrope font-bold leading-[180%]">Michael Kaizer</p>
              <p className="text-[16px] text-[#878C91] font-manrope font-medium leading-[180%]">CEO of Basecamp Corp</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="py-[16px] px-[32px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff]">
              <ArrowLeft className='w-[24px] h-[24px]' />
            </button>
            <span className="text-[20px] text-[#878C91] font-manrope font-semibold mx-[38px]">01/05</span>
            <button className="py-[16px] px-[32px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff]">
              <ArrowRight className='w-[24px] h-[24px] ' />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
      </Slider>
        </Container>
    </div>
  )
}

export default Slider