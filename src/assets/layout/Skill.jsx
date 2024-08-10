import React from "react";
import Container from "../../components/Container";

const Skill = () => {
  return (
    <>
      <div className="bg-navColour">
        <Container>
          <div className=" py-12 flex justify-center">
            <h1 className="text-[40px] text-btnColour   pt-5 font-medium font-vol inline-block border-b border-btnColour">
              View all Projects
            </h1>
          </div>
          <div className="flex">
            <div className="w-2/5 pt-28 ml-20">
              <h3 className="text-pColour text-[18px] font-medium font-vol">
                OUR SKILLS
              </h3>
              <h1 className="font-medium text-[50px] leading-[50px] text-hadTextColour font-vol py-5 ">
                Modern Digital Creative Agency
              </h1>
              <p className="text-[18px] font-vol text-hadTextColour  opacity-80 pr-[100px] pb-5">
                If you need to redesign your new project, new visual strategy,
                ux structure or you do have some cool ideas for collaboration
              </p>
              <div className="p-1 bg-btnColour mt-5 inline-block mb-[100px]">
                <button className="text-[18px] py-[15px] px-[30px] bg-btnColour text-white font-intel border transition-all duration-300 border-white hover:bg-white hover:text-btnColour ">
                  Download CV
                </button>
              </div>
            </div>
            <div className="w-3/5 flex flex-col justify-center ml-20">
              <div className="pt-10 w-[640px] ">
                <div className=" flex justify-between font-vol pb-3 text-hadTextColour">
                  <h3 className="text-[18px] font-vol font-medium text-hadTextColour">
                    Adobe Illustration
                  </h3>
                  <h3>60%</h3>
                </div>
                <div className="bg-hadTextColour p-1 relative">
                  <div className="bg-btnColour w-[480px] p-1 absolute top-0 left-0"></div>
                </div>
              </div>
              <div className=" w-[640px] pt-8 ">
                <div className=" flex justify-between font-vol pb-3 text-hadTextColour">
                  <h3 className="text-[18px] font-vol font-medium text-hadTextColour">
                    {" "}
                    Adobe Photoshop
                  </h3>
                  <h3>85%</h3>
                </div>
                <div className="bg-hadTextColour p-1 relative">
                  <div className="bg-btnColour w-[560px] p-1 absolute top-0 left-0"></div>
                </div>
              </div>
              <div className=" w-[640px] pt-8 ">
                <div className=" flex justify-between font-vol pb-3 text-hadTextColour">
                  <h3 className="text-[18px] font-vol font-medium text-hadTextColour">
                    {" "}
                    Figma
                  </h3>
                  <h3>90%</h3>
                </div>
                <div className="bg-hadTextColour p-1 relative">
                  <div className="bg-btnColour w-[580px] p-1 absolute top-0 left-0"></div>
                </div>
              </div>
              <div className=" w-[640px] pt-8">
                <div className=" flex justify-between font-vol pb-3 text-hadTextColour">
                  <h3 className="text-[18px] font-vol font-medium text-hadTextColour">
                    Adobe XD
                  </h3>
                  <h3>70%</h3>
                </div>
                <div className="bg-hadTextColour p-1 relative">
                  <div className="bg-btnColour w-[550px] p-1 absolute top-0 left-0"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skill;
