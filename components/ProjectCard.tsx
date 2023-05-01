import { FunctionComponent} from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import {motion} from "framer-motion"

import Image from "next/image";
import { fadeinup, stagger } from "@/animationsdeneme2";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  // const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="cursor-pointer ">
      <div onClick={() => setShowDetail(id)}>
        <Image
          src={image_path}
          alt={name}
          className="font-medium"
          // onClick={() => setShowDetail(id)}
          layout="responsive"
          height="150"
          width="300"
        />
        {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
        <p className="my-2 font-[550] text-center">{name}</p>
      </div>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="border-2 border-gray-100"
          >
            {/* <img src={image_path} alt={name} /> */}
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
                href={github_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-300"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 dark:bg-dark-300"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeinup}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeinup} className="mb-3 font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={fadeinup}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
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

export default ProjectCard;
