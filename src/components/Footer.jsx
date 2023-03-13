import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { sectionsFooter } from "../data";

const socialIconsSize = 30;

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-around md:w-[75%] my-6">
          <FaFacebookSquare size={socialIconsSize} className='hover:text-[#4267B2]'/>
          <FaInstagramSquare size={socialIconsSize} className='hover:text-[#fb3958]'/>
          <FaTwitterSquare size={socialIconsSize} className='hover:text-[#1DA1F2]'/>
          <FaGithubSquare size={socialIconsSize} className='hover:text-[#00df9a]'/>
          <FaDribbbleSquare size={socialIconsSize} className='hover:text-[#00df9a]'/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6">
        {sectionsFooter.map((section, index) => (
          <div key={index}>
            <h6 className="font-medium text-white">{section.title}</h6>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="py-2 text-sm text-gray-400 hover:text-[#00df9a] cursor-pointer relative"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
