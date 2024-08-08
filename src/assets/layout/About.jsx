import React from "react";
import Container from "../../components/Container";
import man from "../man.png";

const About = () => {
  return (
    <>
      <div className=" bg-bgColour bg-opacity-[80%] ">
        <Container>
          <div className="  flex  pt-[133px] pb-[250px]">
            <div className="w-[60%]  ">
              <h3 className="text-pColour text-[18px] font-medium font-vol">
                About me
              </h3>
              <h2 className="text-[50px] font-medium font-vol text-hadTextColour pr-[50px] leading-[56px] pt-[30px]">
                At The Heart of Design is An Opportunity to Problem Solve.
              </h2>
              <img className="pt-8 hover:scale-105 transition-all duration-300" src={man} alt="" />
            </div>

            <div className="w-[40%]">
              <div className="pt-[230px]">
                <p className="text-[18px] text-hadTextColour font-vol pb-[35px] pr-[150px] text-opacity-[80%]">
                  Solvency based award-winning design director and UI/UX design
                  expert with 10 years of experience in design and management.
                </p>
                <p className="text-[18px] text-opacity-[80%] text-hadTextColour font-vol pb-[35px] pr-[180px]">
                  Internum various sit a met mattes ululate denim. Orcin asellus
                  celestas tells rut rum tells pelletised eu. Nunc pulvinar
                  supine et ligula albacore.
                </p>
                <div className="p-1 bg-btnColour inline-block">
                <button className="text-[18px] py-[15px] px-[30px] bg-btnColour text-white font-intel border transition-all duration-300 border-white hover:bg-white hover:text-btnColour ">Download CV</button>

                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
