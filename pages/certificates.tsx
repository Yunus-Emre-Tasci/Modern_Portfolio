import React, { useState } from 'react'
import {certificates} from "../data"
import CertificateCard from '@/components/CertificateCarddeneme2';
import { motion } from "framer-motion";
import { fadeinup, routeAnimation, stagger } from "@/animationsdeneme2";
import Head from 'next/head';


const Certificates = () => {

    const [showDetail, setShowDetail] = useState<number | null>(null);

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ height: "90vh" }}
      className='p-2 overflow-auto'
    >
      <Head>
        <title>Certificates | Yunus Emre Taşçı</title>
      </Head>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {certificates.map((certificate, i) => (
          <motion.div
            variants={fadeinup}
            key={i}
            className="col-span-12 p-2 mt-4 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <CertificateCard
              certificate={certificate}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Certificates