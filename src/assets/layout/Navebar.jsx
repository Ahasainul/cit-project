import React from "react";
import Container from "../../components/Container";
import List from "../../components/List";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../../assets/s.png'
const Navebar = () => {
  return (
    <>
      <div className="bg-navColour border border-b border-[#D3DCD4]">
        <Container>
          <div className=" flex justify-between py-5 items-center">
            <div className="flex gap-2 items-center">
                <img src={logo} alt="" />
              <h2 className="text-xl font-bold font-intel cursor-pointer"> Ahasainul</h2>
            </div>
            <div className="flex">
              <List className={"px-10 text-lg font-intel font-semibold text-hadTextColour hover:text-btnColour transition-all duration-300 cursor-pointer "} Manuname={'Home'} />
              <List className={"px-10 text-lg font-intel font-semibold text-hadTextColour hover:text-btnColour transition-all duration-300 cursor-pointer "} Manuname={'Projects'} />
              <List className={"px-10 text-lg font-intel font-semibold text-hadTextColour hover:text-btnColour transition-all duration-300 cursor-pointer "} Manuname={'Pages'} />
              <List className={"px-10 text-lg font-intel font-semibold text-hadTextColour hover:text-btnColour transition-all duration-300 cursor-pointer "} Manuname={'Blog'} />
              <List className={"px-10 text-lg font-intel font-semibold text-hadTextColour hover:text-btnColour transition-all duration-300 cursor-pointer "} Manuname={'Contact'} />
            </div>
            <div className="flex gap-5 items-center ">
                <FaSearch className="text-lg text-hadTextColour"/>
                <span className="h-6 w-[2px] bg-hadTextColour"></span>
                <FaBarsStaggered className="text-lg text-hadTextColour " />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navebar;
