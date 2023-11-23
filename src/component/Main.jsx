import React from "react";
import banner from "../assets/dashboard_1.png";
import { FaSquare } from "react-icons/fa";
import company from "../assets/company_1.png";
import company_2 from "../assets/company_2.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four_1.png";
import five from "../assets/five.png";
import six from "../assets/six_1.png";
import great from "../assets/great_banner.png";
import facebook from "../assets/social.png";
import ai from "../assets/ai_chat.png";
import all from "../assets/all_in_one.png";
import e_com from "../assets/e_com.png";
import fav from "../assets/fav_1.png";
import { MdComputer } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { IoShield } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import last_before from "../assets/last_before.png";
import { FaAngleRight } from "react-icons/fa";

const Main = () => {
  return (
    <div className="border border-green-700 overflow-hidden">
      <div className="flex  justify-between ">
        <div className="w-1/3 md:w-1/3 md:mx-24 mt-24 p-3 ">
          <h1 className="font-bold text-3xl md:text-4xl">
            <span role="img" aria-label="wave" className="text-4xl md:text-5xl">
              👋
            </span>{" "}
            Hey, Welcome to nextgen customer support!
          </h1>
          <br />
          <p>Create “WoW” experiences for your customers & agents. We help</p>

          <ul>
            <li className="flex gap-1">
              <span className="mt-1 text-red-500">
                <FaSquare />
              </span>
              <p>
                Agents collaborate and provide quicker resolutions with{" "}
                <span className="text-red-500 font-bold">
                  one inbox for all customer queries.
                </span>
              </p>
            </li>
            <li className="flex gap-1">
              <span className="mt-1 text-red-500">
                <FaSquare />
              </span>{" "}
              <p>
                <span className="text-red-500 font-bold">
                  Automate repetitive tasks{" "}
                </span>
                and route tickets to the right teams to increase agent
                productivity.
              </p>
            </li>
            <li className="flex gap-1">
              <span className="mt-1 text-red-500">
                <FaSquare />
              </span>{" "}
              <p>
                You understand your customers better with{" "}
                <span className="text-red-500 font-bold">
                  game-changing insights{" "}
                </span>
                and deliver customer delight.
              </p>
            </li>
          </ul>

          <br />
          <div className="flex flex-col md:flex-row">
            <button className="w-full md:w-36 bg-blue-700 text-white p-2 font-semibold rounded-sm my-2 md:mx-2">
              Try for Free
            </button>
            <button className="w-full md:w-36 bg-red-500 p-2 text-white font-semibold rounded-sm my-2 md:mx-2">
              Book Demo
            </button>
          </div>
        </div>
        <div className="w-auto  md:w-fit">
          <img
            src={banner}
            alt=""
            className="w-auto h-full  md:object-contain  sm:object-contain"
          />
        </div>
      </div>
      {/* company */}
      <div className="flex justify-center mt-10">
        <img src={company} alt="" />
      </div>
      {/* all company */}
      <div className=" mt-16">
        <h1 className="font-bold text-4xl text-center  w-1/3 mx-auto text-blue-800">
          5000+ global users trust and love using Simplify360
        </h1>
        <h1 className=" bg-blue-800 border border-blue-500 h-1 w-64 mt-4 mx-auto"></h1>
        <div className="flex justify-center mt-10">
          <FaChevronCircleLeft className="text-4xl mt-24" />
          <img src={company_2} alt="" />
          <FaChevronCircleRight className="text-4xl mt-24" />
        </div>
      </div>
      {/* Box */}
      <div className="mt-24">
        <h1 className="font-bold text-4xl text-center  w-1/3 mx-auto text-blue-800">
          Explore Simplify360's end-to-end support engagement & growth solution
        </h1>
        <div className="flex justify-around md:mt-16 flex-wrap md:gap-3 sm:gap-5 md:justify-around">
          <img src={one} alt="" srcset="" />
          <img src={two} alt="" srcset="" />
          <img src={three} alt="" srcset="" />
          <img src={four} alt="" srcset="" />
          <img src={five} alt="" srcset="" />
          <img src={six} alt="" srcset="" />
        </div>
      </div>
      {/* Great */}
      <div className="flex justify-between mt-28 ">
        <div className="text-center   mx-auto w-1/3">
          <h1 className="text-4xl text-blue-800 font-bold mt-24">
            Great support starts by being available
          </h1>
          <p className="mt-14">
            connect and engage with customers on channels they prefer in
            real-time
          </p>
          <div className="mt-14">
            <button className="w-36 bg-purple-700 p-3 text-white rounded-sm font-bold">
              Read more
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src={great} alt="" />
        </div>
      </div>

      {/* facebook */}
      <div className="flex justify-between mt-28">
        <div className="w-full">
          <img src={facebook} alt="" />
        </div>
        <div className="text-center  mx-auto w-1/3">
          <h1 className="text-4xl text-blue-800 font-bold mt-24">
            Better features & tools to make support a delight for agents
          </h1>
          <p className="mt-14">
            Modern customer support platform to empower agents and make customer
            support a delight for them.
          </p>
          <div className="mt-14">
            <button className="w-36 bg-green-600 p-3 text-white rounded-sm font-bold">
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* ai */}
      <div className="flex justify-between mt-28">
        <div className="text-center  mx-auto w-1/3">
          <h1 className="text-4xl text-blue-800 font-bold mt-24">
            Great support starts by being available
          </h1>
          <p className="mt-14">
            connect and engage with customers on channels they prefer in
            real-time
          </p>
          <div className="mt-14">
            <button className="w-36 bg-purple-700 p-3 text-white rounded-sm font-bold ">
              Read more
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src={ai} alt="" width="850px" />
        </div>
      </div>

      {/* all in one */}
      <div className="flex justify-between mt-10 ">
        <div className="w-full">
          <img src={all} alt="" width="900px" />
        </div>
        <div className="text-center mx-auto w-1/3 md:flex-wrap sm:flex-wrap">
          <h1 className="text-4xl text-blue-800 font-bold mt-24">
            All-in-one social suite for publishing listening & more
          </h1>
          <p className="mt-14">
            Leverage social superpower with the all-in-one social suite. Grow
            your business using automated publishing and collect meaningful
            insights by listening to what customers want{" "}
          </p>
          <div className="mt-14">
            <button className="w-36 bg-purple-700 p-3 text-white rounded-sm font-bold">
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* e-com */}
      <div className="flex justify-between mt-28">
        <div className="text-center mx-auto w-1/3 ">
          <h1 className="text-4xl text-blue-800 font-bold mt-24">
            End to end review management in one place{" "}
          </h1>
          <p className="mt-14">
            Modern customer support platform to empower agents and make customer
            support a delight for them
          </p>
          <div className="mt-14">
            <button className="w-36 bg-green-700 p-3 text-white rounded-sm font-bold ">
              Read more
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src={e_com} alt="" width="850px" />
        </div>
      </div>
      {/* bg gird */}
      <div className="w-full ">
        <div className=" mt-24 w-full h-auto shadow-sm ">
          <h2 className="text-4xl text-blue-800 font-bold mt-52 text-center">
            Why choose Simplify360 for your business
          </h2>
          <div className="flex justify-around md:flex-wrap sm:flex-wrap">
            <div className="w-72 bg-white mt-24 border shadow-md">
              <div className="h-44 bg-red-500">
                <MdComputer className="h-40 font-bold text-9xl text-gray-600 mx-4" />
              </div>
              <div className="mt-14 text-center">
                <h1 className="text-3xl font-bold text-blue-800">
                  Dedicated CX superhero
                </h1>
                <p className="mt-3">
                  Tell us your challenges. And one of our CX experts will tell
                  you how it can sorted. And yes, they ll stick with you along
                  your CX journey
                </p>
              </div>
            </div>
            <div className="w-72 bg-white mt-24 border shadow-md">
              <div className="h-44 bg-red-500 ">
                <IoShield className="h-40 font-bold text-9xl text-gray-600 mx-4" />
              </div>
              <div className="mt-14 text-center">
                <h1 className="text-3xl font-bold text-blue-800">
                  Dedicated CX superhero
                </h1>
                <p className="mt-3">
                  Tell us your challenges. And one of our CX experts will tell
                  you how it can sorted. And yes, they ll stick with you along
                  your CX journey
                </p>
              </div>
            </div>
            <div className="w-72 bg-white mt-24 border shadow-md">
              <div className="h-44 bg-red-500">
                <FaSackDollar className="h-40 font-bold text-9xl text-gray-600 mx-4" />
              </div>
              <div className="mt-14 text-center">
                <h1 className="text-3xl font-bold text-blue-800">
                  Dedicated CX superhero
                </h1>
                <p className="mt-3">
                  Tell us your challenges. And one of our CX experts will tell
                  you how it can sorted. And yes, they ll stick with you along
                  your CX journey
                </p>
              </div>
            </div>
            <div className="w-72 bg-white mt-24 border shadow-md">
              <div className="h-44 bg-red-500">
                <FaHome className="h-40 font-bold text-9xl text-gray-600 mx-4" />
              </div>
              <div className="mt-14 text-center">
                <h1 className="text-3xl font-bold text-blue-800">
                  Dedicated CX superhero
                </h1>
                <p className="mt-3 ">
                  Tell us your challenges. And one of our CX experts will tell
                  you how it can sorted. And yes, they ll stick with you along
                  your CX journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marketplace */}
      <div className=" mt-16 w-11/12 ">
        <div className="">
          <h1 className="text-4xl text-blue-800 font-bold mt-52 text-center">
            Integrate with your favorite tools on the go. Accomplish more by
            doing less
          </h1>
        </div>
        <div className="mx-44 mt-11 flex flex-col items-center">
          <img src={fav} alt="" />
          <button className="w-72 bg-red-500 flex  justify-around text-center text-white text-2xl p-3 rounded  mb-10">
            view Marketpalce <FaAngleRight className="mt-2" />
          </button>
        </div>
      </div>
      <img
        src={last_before}
        alt="last_before"
        className="mb-5"
        style={{ width: "100%" }}
      />
      <div className=" mt-5 w-11/12">
        <div className="mx-12 px-12">
          <h1 className="text-4xl text-blue-800 font-bold mt-20 text-center mx-12 px-12">
            Use Simplify360 for your business. Deliver customer delight on the
            go.
          </h1>
          <div className="m-10 px-10 mt-3">
            <p className="mx-12 px-12  text-center ">
              Start using Simplify360 to deliver great customer service.
              Automate support on every channel and save agent time and boost
              productivity on the go.
            </p>
          </div>
        </div>
        <div className="mx-44 mt-11 flex flex-col items-center">
          <button className="w-40 bg-yellow-500 text-center text-xl p-3 rounded  mb-10">
            Start for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
