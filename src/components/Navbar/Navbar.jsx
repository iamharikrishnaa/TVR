import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import TVR from "../../assets/TVR.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Velvet" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-0 transition-all duration-300" : "py-0"
          } container  mx-auto flex items-center justify-between h-[72px]`}
        >
          <div className="flex items-center">
            <HiMenuAlt1
              className="text-4xl sm:hidden text-white cursor-pointer"
              onClick={() => setToggle(true)}
            />
              <img className=" h-[126px] mt-8" src={TVR} alt="logo" />
          </div>
          <div className="sm:flex items-center hidden text-1xl ">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
            <button className=" w-[156.45px] h-[41px]  font-bold text-white bg-gold rounded-[5px] text-[16px]"> 
                Get Started 
            </button>
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-[25rem] top-0 left-0 z-20 bg-Velvet text-white flex flex-col text-[38px] justify-center items-center shadow-lg gap-8 py-auto"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <button className="w-[200px] h-[60px]  font-bold text-white bg-gold rounded-[9px] text-[28px]"> 
                Get Started 
            </button>
              <HiX
                className="absolute right-12 top-12 text-5xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
