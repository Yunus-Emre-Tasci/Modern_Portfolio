import React from "react";
import { services } from "@/datadeneme2";
import ServiceCard from "@/components/ServiceCarddeneme2";
import {motion} from "framer-motion"
import { fadeinup, routeAnimation, stagger } from "@/animationsdeneme2";
import { NextPage } from "next";

import Head from "next/head"

const About:NextPage = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title>About | Yunus Emre Taşçı</title>
      </Head>
      <h5 className="my-3 font-medium">
        As a Full Stack Developer and IT enthusiast, I do projects on React,
        JavaScript, Next.js, Vue, Nuxt.js and Django in accordance with my
        teammates to produce the best output, which gives me great joy!
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
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 "
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
