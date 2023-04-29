import React from "react";
import { services } from "@/datadeneme2";
import ServiceCard from "@/components/ServiceCarddeneme2";
import {motion} from "framer-motion"
import { fadeinup, stagger } from "@/animationsdeneme2";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        provident quaerat repudiandae reprehenderit officiis voluptatum natus
        ipsa aut voluptates perspiciatis.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 mx-[-1.5rem]">
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am doing
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeinup}
              key={service.id}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default index;
