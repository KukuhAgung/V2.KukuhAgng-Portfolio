import React from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Contact() {
  return (
    <main className="w-full flex flex-col gap-y-10 h-fit p-2">
      <h1 className="text-center text-[4rem] font-medium tracking-[1%]">
        GET IN TOUCH
      </h1>
      <div></div>
      <div className="w-full flex flex-col gap-y-6 border-b border-second pb-6">
        <div className="flex items-center gap-x-4">
          <FaSquareGithub className="w-[30px] h-[30px]" />
          <h6 className="text-[20px] font-medium tracking-[1%]">Github</h6>
        </div>
        <div className="flex items-center gap-x-4">
          <FaSquareInstagram className="w-[30px] h-[30px]" />
          <h6 className="text-[20px] font-medium tracking-[1%]">Instagram</h6>
        </div>
        <div className="flex items-center gap-x-4">
          <IoLogoLinkedin className="w-[30px] h-[30px]" />
          <h6 className="text-[20px] font-medium tracking-[1%]">LinkedIn</h6>
        </div>
        <div className="flex items-center gap-x-4">
          <FaTiktok className="w-[30px] h-[22px]" />
          <h6 className="text-[20px] font-medium tracking-[1%]">TikTok</h6>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 border-b border-second pb-6">
        <div>
          <div className="flex items-center gap-x-4">
            <MdEmail className="w-[30px] h-[40px]" />
            <h6 className="text-[20px] font-medium tracking-[1%]">Email</h6>
          </div>
          <h6 className="text-[16px] font-medium tracking-[1%] ml-12">
            ff.agri2567@gmail.com
          </h6>
        </div>
        <div>
          <div className="flex items-center gap-x-4">
            <MdLocationPin className="w-[30px] h-[40px]" />
            <h6 className="text-[20px] font-medium tracking-[1%]">Location</h6>
          </div>
          <h6 className="text-[16px] font-medium tracking-[1%] ml-12">
            Banyumas, East Java, Indonesia
          </h6>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h6 className="text-[22px] font-medium tracking-[1%]">LOCAL TIME</h6>
        <h6 className="text-[22px] font-medium tracking-[1%]">
          2:26 PM GMT+11
        </h6>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-[40px] font-medium tracking-[1%]">
          Copyright © 2024.
        </h1>
        <h1 className="text-[48px] font-medium tracking-[1%]">Kukuh Agung</h1>
      </div>
    </main>
  );
}

export default Contact;
