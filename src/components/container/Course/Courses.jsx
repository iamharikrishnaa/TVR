import React from "react";
import { courses } from "../../../Data";
import Course from "./Course";
import { motion } from "framer-motion";
import line from "../../../assets/line.png";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="bg-Velvet  justify-center">
      <div className="section" id="Training">
        <div className=" text-center text-white">
          <div className="text-[20px] font-light">10 Unique Courses</div>
          <div className="text-[32px] font-space-grotesk ">
            {" "}
            May You Also Like <span className="text-gold">More Courses</span>
          </div>
          <img
            className="w-[305px] ml-[500px] -mb-4 h-[44px] text-gold "
            src={line}
            alt="line"
          />
          <p className="font-F37-grotesk text-sm mt-10">
            "Explore our collaboration with Mumbai-based company Cosderma to
            provide a diverse range of education courses in the Training
            Institute vertical."
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid-cols-5 mt-12 gap-8 "
        >
          <div className="mt-12 overflow-x-hidden w-full">
            <div className="flex w-full gap-8 md:w-full animate-slide">
              {courses.map((course) => {
                return <Course key={course.id} {...course} />;
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;


