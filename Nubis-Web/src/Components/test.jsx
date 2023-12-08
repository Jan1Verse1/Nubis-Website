import { useState } from "react";
// import logo from "../assets/image 1.svg";
// import { MdSegment } from "react-icons/md";
const Headerww = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex flex-row justify-between align-middle px-4">
        <div className="header__logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className="header__nav">
          <ul className="md:flex flex-row justify-around hidden ">
            <li className="p-4">About us </li>
            <li className="p-4">Services</li>
            <li className="p-4">FAQ</li>
            <li className="p-4">Contact Us</li>
          </ul>
        </div>
        <button className="my-4 hidden md:block">Learn more </button>
        <div>
          {/* <MdSegment
            size={40}
            className="flex my-4 md:hidden"
            onClick={toggleNav}
          /> */}
        </div>
      </div>
      <div>
        <ul
          className={
            nav
              ? "flex flex-col md:hidden absolute top-20 left-20 h-max w-full text-center text-white rounded-md bg-textBlue"
              : "hidden"
          }
        >
          <li>About us </li>
          <li>Services</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Headerww;
