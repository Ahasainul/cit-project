import React from "react";
import Container from "../../components/Container";
import allImage from '../all.png'
const Warking = () => {
  return (
    <>
      <div  className={'bg-navColour'}>
        <Container>
          <div className=" py-12">
            <h1 className="text-[50px] text-hadTextColour flex justify-center  font-medium font-vol">
              My Working Portfolio
            </h1>
          </div>
          <img className="w-4/5 mx-auto" src={allImage} alt="" />
        </Container>
      </div>
    </>
  );
};

export default Warking;
