import { ICertificates } from '@/typedeneme2'
import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { MdClose } from 'react-icons/md';
import { motion } from "framer-motion";
import { fadeinup, stagger } from "@/animationsdeneme2";
import { AiFillProject } from 'react-icons/ai';

const CertificateCard: FunctionComponent<{
  certificate: ICertificates;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  certificate: { id, image_path, name, url },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div className="cursor-pointer ">
      <div onClick={() => setShowDetail(id)}>
        <Image
          src={image_path}
          alt={name}
          className="font-medium"
          layout="responsive"
          height="150"
          width="300"
        />
        <p className="my-2 font-[550] text-center">{name}</p>
      </div>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg dark:text-white dark:bg-dark-100">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="border-4 border-gray-100"
          >
            <motion.div variants={fadeinup}>
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
              />
            </motion.div>
            <motion.div
              variants={fadeinup}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Verify</span>
              </a>
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 transition duration-300 bg-gray-200 rounded-full top-3 right-3 hover:scale-120 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificateCard