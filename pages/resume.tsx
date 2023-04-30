import { fadeinup, routeAnimation } from "@/animationsdeneme2";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from "framer-motion"
import Head from "next/head";

const Resume = () => {
    
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <Head>
        <title>Resume | Yunus Emre Taşçı</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeinup} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold border-b-2">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Clarusway IT Training School
            </h5>
            <p className="font-semibold">Fullstack Developer (2022-2023)</p>
            <p className="my-3">
              Dynamic learning the Frontend, Backend Programming Languages,
              developing projects and accessing to the competence level to work
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeinup} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold border-b-2">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Fullstack Developer</h5>
            <p className="font-semibold">Freelancer (2020- )</p>
            <p className="my-3">
              I develop custom software solutions for the customer or company or
              improve existing software systems
            </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold border-b-2">
            Language & Framework
          </h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold border-b-2">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
