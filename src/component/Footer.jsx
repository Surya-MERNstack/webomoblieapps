import React from "react";
import company from "../assets/company_icon_1.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white-300 cursor-pointer">
      <div className="mt-10 flex justify-between w-full">
        <div className="mt-3">
          {" "}
          <img src={company} alt="" />
        </div>
        <div className="flex justify-between  mt-5 text-3xl    w-64">
          <FaFacebook />
          <AiFillInstagram />
          <IoLogoTwitter />
          <FaLinkedin />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="  p-4 text-center  ">
          <h1 className="text-3xl  font-semibold">SOLUTIONS</h1>
          <ul className="mt-4 p-3 text-1xl  font-semibold   text-start">
            <li className="hover:underline">Campaign publishing</li>
            <li className="hover:underline">Social Listening</li>
            <li className="hover:underline">For Agency</li>
            <li className="hover:underline">For Enterprise</li>
            <li className="hover:underline">For SMB</li>
          </ul>
          <h2 className="text-3xl  font-semibold">ABOUT</h2>
          <ul className="mt-4 p-3 text-1xl  font-semibold   text-start">
            <li>About Simplify 360</li>
            <li>implify360 Careers</li>
            <li>Why Simplify360</li>
          </ul>
        </div>
        <div className="  p-4 text-center  ">
          <div>
            <h1 className="text-3xl  font-semibold">LEARN</h1>
            <ul className="mt-4 p-3 text-1xl  font-semibold   text-start">
              <li className="hover:underline">Blog</li>
              <li className="hover:underline">Ebooks</li>
              <li className="hover:underline">Digital Customer Experience</li>
              <li className="hover:underline">Resources</li>
            </ul>
            <h2 className="text-3xl  font-semibold mt-2">PLATFORM</h2>
            <ul className="mt-4 p-3  font-semibold   text-start">
              <li className="hover:underline">Conversation AI</li>
              <li className="hover:underline">Customer Service</li>
              <li className="hover:underline">Review Management</li>
              <li className="hover:underline">WhatsApp</li>
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="  p-4 text-center  ">
          <h1 className="text-3xl  font-semibold">FROM OUR CX EXPERTS</h1>
          <ul className="mt-4 p-3 text-1xl  font-semibold   text-start">
            <li>Instagram Publishing is now Live on Simplify360!</li>
            <li>8 Easy Ways to Improve Customer Satisfaction in 2021</li>
            <li>
              5 Mistakes to Avoid while Converting Social Media Followers into
              Sales
            </li>
            <li>
              10 Actionable Customer Service KPIs & Metrics to Measure in 2021
            </li>
            <li>10 Tips for Customer Service in 2021</li>
            <li>
              Ultimate Guide: Social Media & Digital Customer Support for
              Startups
            </li>
          </ul>
        </div>
        <div className="  p-4 text-center  ">
          <h1 className="text-3xl  font-semibold">CONTACT US</h1>
          <ul className="mt-4 p-3  font-semibold   text-start">
            <li className="hover:underline">701 E Plano Parkway, Suite 408, Plano, TX 75074</li>
            <li className="hover:underline">+1 (512) 539-0360 (USA)</li>
            <li className="hover:underline">contact@simplify360.com</li>
            <li className="hover:underline">INDIA: 5th & 6th floor, Trifecta Adatto, 21, ITPL</li>
            <li className="hover:underline">Main Rd, Mahadevapura, Bengaluru, Karnataka 560048</li>
            <li className="hover:underline">+91 70192 3816 (India)</li>
            <li className="hover:underline">+63 906 243 5445 (Manila, Philippines)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
