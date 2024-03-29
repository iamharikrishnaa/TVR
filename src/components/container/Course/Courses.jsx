import React from "react";
import { courses } from "../../../Data";
import Course from "./Course";
import { motion } from "framer-motion";


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
    <div className="bg-Velvet justify-center">
      <div className="section w-full" id="courses w-full">
        <div className=" text-center text-white mt-1 w-full">
          <p className="text-xs m-1 mt">10 Unique Courses</p>
          <div className="text-3xl font-space-grotesk " >
            May You Also Like <span className="text-gold">More Courses</span>
          </div>
          <p className="font-F37-grotesk text-xl mt-10">
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
