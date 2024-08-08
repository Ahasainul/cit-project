import React from "react";
import Container from "../../components/Container";
import "../hero.css";
import asif from "../asif.png";
import shap from "../shape.png";
const Hero = () => {
  return (
    <>
      <div className="bg-navColour">
        <Container>
          <div className="flex pt-[209px] pb-[200px]">
            <div className="w-3/5">
              <div className="">
                <h3 className="text-pColour text-[18px] font-medium font-vol">
                  Front-End Developer
                </h3>
                <h1 className="font-bold text-[120px] text-hadTextColour font-vol ">
                  Steven Product{" "}
                </h1>
                <h1 className=" leading-[50px] one text-[120px] text-navColour font-vol flex  pb-[35px]">
                  Portfolio
                </h1>
                <p className="text-[20px] font-vol text-hadTextColour font-normal opacity-80 pr-[200px]">
                  You can find me on Dribble, Instagram, LinkedIn, Behance or
                  Facebook. I'm working at User interface or User experience.
                </p>
                <h3 className="pt-[50px]  font-vol font-semibold text-[40px]  text-btnColour border-b inline-block  border-btnColour">
                  Steven@gmai.com
                </h3>
              </div>
            </div>
            <div className="w-2/5">
              <div className=" flex justify-center relative">
                <img
                  className="w-[75%] h-[550px] mt-[44px] mr-[32px] rounded-lg z-10 hover:scale-105 transition-all duration-300"
                  src={asif}
                  alt=""
                />
                <div className="absolute">
                  <img src={shap} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
