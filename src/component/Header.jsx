// import React, { useState } from "react";
// import icon from "../assets/company_icon_1.png";
// import { FaAngleDown } from "react-icons/fa6";
// import { MdOutlineSegment } from "react-icons/md";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggle = () => {
//     setShowMenu(!showMenu);
//     console.log('clicked')
//   }

//   return (
//     <div className="header">
//       <div className="w-full bg-white-400 flex justify-around py-5 flex-nowrap">
//         <div>
//           <img src={icon} alt="" width="170px" />
//         </div>
//         <div className="bg-white-400 flex w-1/2 gap-2">
//           {showMenu ?
//             <nav>
//             <ul className="flex gap-10 mx-auto text-center font-bold flex-nowrap md:bg-red-400 mt-20 md:animate-bounce">
//               <li>Product </li>
//               <li>
//                 <span className="flex gap-2">
//                   By Channel
//                   <span className="mt-2 font-bold">
//                     <FaAngleDown />
//                   </span>{" "}
//                 </span>
//               </li>
//               <li>
//                 <span className="flex gap-2">
//                   Company{" "}
//                   <span className="mt-2 font-bold">
//                     <FaAngleDown />
//                   </span>
//                 </span>
//               </li>
//               <li>Resources</li>
//               <li>Customers</li>
//             </ul>
//             </nav> : <MdOutlineSegment className="text-4xl absolute right-0 bg-red-500" onClick={toggle}/>}
//         </div>
//         <div className="">
//           <button className="bg-purple-600 text-white rounded p-1 w-28">
//             Request
//           </button>
//           <button className="bg-red-600 text-white  rounded p-1 mx-2 w-28 md:bg-grey-500">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import icon from "../assets/company_icon_1.png";
// import { FaAngleDown, FaTimes } from "react-icons/fa";
// import { MdOutlineSegment } from "react-icons/md";

// const Header = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggle = () => {
//     setShowMenu(!showMenu);
//     console.log("clicked");
//   };

//   return (
//     <div className="header">
//       <div className="w-full bg-white-400 flex justify-around py-5 flex-wrap items-center">
//         <div>
//           <img src={icon} alt="" width="170px" />
//         </div>
//         <div className="bg-white-400 flex w-full md:w-auto gap-2 relative md:flex-grow-1">
//           {showMenu ? (
//             <nav className="w-full md:w-auto">
//               <ul className="flex gap-10 mx-auto text-center font-bold flex-wrap md:flex-nowrap md:justify-center md:p-5 md:h-40 md:shadow-md">
//                 <li>Product </li>
//                 <li>
//                   <span className="flex gap-2">
//                     By Channel
//                     <span className="mt-2 font-bold">
//                       <FaAngleDown />
//                     </span>{" "}
//                   </span>
//                 </li>
//                 <li>
//                   <span className="flex gap-2">
//                     Company{" "}
//                     <span className="mt-2 font-bold">
//                       <FaAngleDown />
//                     </span>
//                   </span>
//                 </li>
//                 <li>Resources</li>
//                 <li>Customers</li>
//               </ul>
//             </nav>
//           ) : (
//             <MdOutlineSegment
//               className="text-4xl absolute right-0 top-5 md:-top-4 md:-right-44  cursor-pointer"
//               onClick={toggle}
//             />
//           )}
//           {showMenu && (
//             <FaTimes
//               className="text-4xl absolute right-0 top-5 md:top-auto md:-right-44 cursor-pointer"
//               onClick={toggle}
//             />
//           )}
//         </div>
//         <div className="flex justify-center md:justify-end mt-4 md:mt-0">
//           <button className="bg-purple-600 text-white rounded p-1 w-28">
//             Request
//           </button>
//           <button className="bg-red-600 text-white rounded p-1 mx-2 w-28 md:bg-grey-500">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useState } from "react";
import icon from "../assets/company_icon_1.png";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
    console.log("clicked");
  };

  return (
    <nav className="bg-white py-5">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <div>
          <img src={icon} alt="" width="170px" />
        </div>
        <div className={`${showMenu ? "block" : "hidden"} md:flex gap-10`}>
          <ul className="flex gap-10 font-bold">
            <li>Product </li>
            <li>
              <span className="flex gap-2">
                By Channel
                <span className="mt-1">
                  <FaAngleDown />
                </span>{" "}
              </span>
            </li>
            <li>
              <span className="flex gap-2">
                Company{" "}
                <span className="mt-1">
                  <FaAngleDown />
                </span>
              </span>
            </li>
            <li>Resources</li>
            <li>Customers</li>
          </ul>
        </div>
        <div className={`${showMenu ? "block" : "hidden"} md:flex gap-4 items-center`}>
          <button className="bg-purple-600 text-white rounded p-1 w-28">
            Request
          </button>
          <button className="bg-red-600 text-white rounded p-1 w-28">
            Login
          </button>
        </div>
        <div className="md:hidden">
          {showMenu ? (
            <FaTimes
              className="text-4xl mt-1 cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <MdOutlineSegment
              className="text-4xl mt-1 cursor-pointer"
              onClick={toggle}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
