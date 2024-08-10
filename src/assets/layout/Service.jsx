import React from "react";
import Container from "../../components/Container";
import icon from "../icon.png";
import zeo from "../zeo.png";
import is from "../is.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Service = () => {
  return (
    <>
      <div className="pt-[100px]">
        <div className="text-center">
          <h3 className="text-pColour text-[18px] font-medium font-vol">
            Service
          </h3>
        </div>
        <div className="mx-auto text-center w-[475px]">
          <h1 className="text-[50px] font-vol font-medium text-hadTextColour">
            09+ Years Experience in This Field
          </h1>
        </div>
      </div>
      <div className="bg-navColour">
        <Container>
         <div className=" flex justify-center gap-8">
         <div className=" py-10">
            <div className="w-[410px] bg-white relative group hover:shadow-xl transition-all duration-300 pl-[50px]">
              <img src={icon} className="pt-12 pb-14 " />
              <h1 className="font-extrabold text-hadTextColour font-vol text-2xl">
                Web & Development
              </h1>
              <p className="text-base text-hadTextColour opacity-80 pt-5 pr-10 pb-[70px] ">
                Facilizes sed odic morbid quiz commodore odic nexus et malasadas
                fames research and brand strategy system.
              </p>
              <div className=" pb-10">
                <FaArrowRightLong className="text-[20px] group-hover:text-btnColour " />
              </div>
              <img className="absolute bottom-0 right-0 " src={zeo} alt="" />
            </div>
          </div>
         <div className=" py-10">
            <div className="w-[410px] bg-white group hover:shadow-xl transition-all duration-300 relative  pl-[50px]">
              <img src={is} className="pt-12 pb-14  w-[23%]" />
              <h1 className="font-extrabold text-hadTextColour font-vol text-2xl">
                Web & Development
              </h1>
              <p className="text-base text-hadTextColour opacity-80 pt-5 pr-10 pb-[70px] ">
                Facilizes sed odic morbid quiz commodore odic nexus et malasadas
                fames research and brand strategy system.
              </p>
              <div className=" pb-10">
                <FaArrowRightLong className="text-[20px] group-hover:text-btnColour " />
              </div>
              <img className="absolute bottom-0 right-0" src={zeo} alt="" />
            </div>
          </div>
         <div className=" py-10">
            <div className="w-[410px] bg-white relative group hover:shadow-xl transition-all duration-300  pl-[50px]">
              <img src={icon} className="pt-12 pb-14 " />
              <h1 className="font-extrabold text-hadTextColour font-vol text-2xl">
                Web & Development
              </h1>
              <p className="text-base text-hadTextColour opacity-80 pt-5 pr-10 pb-[70px] ">
                Facilizes sed odic morbid quiz commodore odic nexus et malasadas
                fames research and brand strategy system.
              </p>
              <div className=" pb-10">
                <FaArrowRightLong className="text-[20px] group-hover:text-btnColour " />
              </div>
              <img className="absolute bottom-0 right-0" src={zeo} alt="" />
            </div>
          </div>
         </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
