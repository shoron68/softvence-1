import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Container from './Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";


function SampleNextArrow(props) {
  let { onClick } = props;
  return (
    <div
      className='absolute lg:bottom-[-30px] bottom-[-100px] right-0 lg:right-[100px] translate-y-[-50%] z-20 lg:py-[16px] py-[10px] lg:px-[31px] px-[21px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff]'
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  let { onClick } = props;
  return (
    <div
      className='absolute lg:bottom-[-30px] bottom-[-100px] right-[130px] lg:right-[320px] translate-y-[-50%] z-10  lg:py-[16px] py-[10px] lg:px-[31px] px-[21px] flex items-center justify-center rounded-full border border-[#00245F] hover:bg-[#00245F] duration-200 text-[#00245F] hover:text-[#fff]'
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
}



const Faq = () => {
  let [activeIndex, setActiveIndex] = useState(null);

  let toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  let [currentPage, setCurrentPage] = useState(1);
  let totalPages = 5;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    customPaging: function () {
      return (
        <div className="w-[8px] h-[8px] bg-[#B0B0B0] rounded-full"></div>
      );
    },
    dotsClass: "slick-dots custom-dots",
    afterChange: (index) => setCurrentPage(index + 1),
  };

  let faqs = [
    {
      number: "01",
      question: "Why should I choose Humestic?",
      ans:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
    },
    {
      number: "02",
      question: "I like your works, how do we start a project?",
      ans: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
    },
    {
      number: "03",
      question: "What info is required to get a quotation?",
      ans: "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.",
    },
  ];

  return (
    <div className='lg:pt-[164px] pt-[60px] pb-[101px] overflow-hidden lg:mx-0 mx-[20px] '>

      <Container>
        <div className="lg:flex gap-x-[80px]">
          <div className="lg:w-[280px]">
            <p className='text-[24px] lg:text-start text-center lg:w-[280px] font-questrial font-normal text-[#001C4A]'>
              Frequently asked questions
            </p>
          </div>
          <div>
            <h2 className='lg:text-[60px] text-[30px] lg:text-start text-center font-questrial font-normal text-[#111111]'>
              Constant collaboration is how we <br className='lg:block hidden' /> roll. Let's see if we are a good fit.
            </h2>
          </div>
        </div>

        <div className=" pt-[80px] ">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-[#CCCCCC] lg:py-[30px] lg:pb-[40px] pb-[20px] lg:pt-0 pt-[10px]">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center lg:pt-[40px] pt-[20px]"
              >
                <div className="flex lg:gap-x-[40px] gap-x-[10px] items-center cursor-pointer" >
                  <span className="text-[#8B7D4C] font-normal lg:text-[32px] w-[40px] font-questrial">{item.number}</span>
                  <span className="text-[#111111] font-questrial font-normal text-[20px] lg:text-center text-start lg:text-[40px]">{item.question}</span>
                </div>
                <div className="text-[#111111] text-xl font-light ">
                  <div
                    className={`transition-transform duration-500 ${activeIndex === index ? "rotate-[360deg]" : "rotate-0"}`}>
                    {activeIndex === index ? <FiMinus className="lg:h-[40px] lg:w-[40px] h-[30px] w-[30px]" /> : <GoPlus className="lg:h-[40px] lg:w-[40px] h-[30px] w-[30px]" />}
                  </div>
                </div>
              </button>
              <AnimatePresence initial={true}>
                {activeIndex === index && item.ans && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="lg:pl-[75px] lg:text-[16px] text-[14px] text-[#636363] font-inter font-light lg:w-[1260px]  ">
                      {item.ans}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>


        <div className="relative lg:mx-0 mx-[10px]">
          <div className="flex absolute lg:bottom-[14px] bottom-[-66px] right-[77px] lg:right-[230px]">
            <p className="text-[#001A72] underline lg:text-[20px] text-[16px] font-semibold font-manrope">
              {String(currentPage).padStart(2, '0')}
            </p>
            <p className="text-[#B0B0B0] lg:text-[20px] text-[16px] font-semibold font-manrope">
              /{String(totalPages).padStart(2, '0')}
            </p>
          </div>
          <Slider {...settings}>
            {[...Array(totalPages)].map((index) => (
              <div key={index}>
                <div className="lg:w-[1280px] mx-auto pt-[115px]">
                  <div className="flex justify-center">
                    <div>
                      <p className="lg:text-[36px] text-[17px] text-[#010205] lg:text-start text-center font-manrope font-semibold leading-[160%] tracking-[-3%]">
                        “They thoroughly analyze our industry and target audience, allowing them
                        to develop customized campaigns that effectively reach and engage our customers.
                        Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”
                      </p>
                      <div className="lg:flex justify-between lg:pt-[74px] pt-[20px]">
                        <div className="flex items-center gap-x-[24px]">
                          <div className="h-[70px] w-[70px] rounded-full bg-[#C9C5C9]" />
                          <div>
                            <p className="text-[20px] text-[#010205] font-manrope font-bold leading-[180%]">Michael Kaizer</p>
                            <p className="text-[16px] text-[#878C91] font-manrope font-medium leading-[180%] ">CEO of Basecamp Corp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </Container>
    </div>
  );
};

export default Faq;
