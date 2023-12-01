import React from "react";
import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { TfiAgenda } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";
import { TfiBook } from "react-icons/tfi";
import { BiSolidContact } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";

import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillCloudDownloadFill } from "react-icons/bs";


import duthuyen from "../src/assets/image/duthuyen.jpg";
export default function App() {
  return (
    <>
    <div className="h-[100%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
    <header className="flex justify-around">
        <h1 className="text-red-500 text-5xl">Bostami</h1>
        <div className="flex justify-around w-3/5">
          <div className="bg-red-200 w-24 h-11 mt-2 rounded-lg flex justify-around items-center cursor-pointer">
            <AiFillHome></AiFillHome>Home{" "}
          </div>
          <div className=" border-red-700 bg-red-200 w-24 h-11 mt-2 rounded-lg flex justify-around items-center cursor-pointer">
            <VscAccount></VscAccount> About
          </div>
          <div className=" border-red-700 bg-red-200 w-24 h-11 mt-2 rounded-lg flex justify-around items-center cursor-pointer">
            <TfiAgenda></TfiAgenda> Pi Chuẩy
          </div>
          <div className=" border-red-700 bg-red-200 w-24 h-11 mt-2 rounded-lg flex justify-around items-center cursor-pointer">
            <TfiGithub></TfiGithub> Writers
          </div>
          <div className=" border-red-700 bg-red-200 w-24 h-11 mt-2 rounded-lg flex justify-around items-center cursor-pointer">
            {" "}
            <TfiBook></TfiBook> Blogs
          </div>
          <div className=" border-red-700 bg-red-200 w-24 h-11 mt-2 rounded-lg flex justify-around items-center cursor-pointer">
            <BiSolidContact></BiSolidContact> Contact
          </div>
          <div className="bg-red-200 w-12 flex items-center pl-4 rounded-bl-full mt-2 cursor-pointer">
            <FaRegMoon></FaRegMoon>
          </div>
        </div>
      </header>

      <div className="mt-28 w-[100%] h-[900px] ">
        <div className="w-fit m-auto leading-10">
          <img className="w-96 rounded-[50%] " src={duthuyen} alt="" />
          <p className="text-center">Monalía Asheley Woa Thao</p>
          <p className="text-center">Ú/ư Designer</p><br />
          <div className="flex justify-around ">
            <AiFillFacebook className="w-10 h-10"></AiFillFacebook>
            <BsInstagram className="w-10 h-10"></BsInstagram>
            <AiFillTwitterCircle className="w-10 h-10"></AiFillTwitterCircle>
            <AiFillYoutube className="w-10 h-10"></AiFillYoutube>
          </div><br />
          <div className="w-[100%] rounded cursor-pointer bg-red-700 flex pl-32"><BsFillCloudDownloadFill className="mt-3.5 "></BsFillCloudDownloadFill> Download CV</div>
        </div>
      </div>
    </div>
     
    </>
  );
}
