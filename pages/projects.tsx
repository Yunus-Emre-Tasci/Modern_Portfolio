import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import {motion} from "framer-motion"
import { fadeinup, routeAnimation, stagger } from "@/animationsdeneme2";
import Head from "next/head";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-5 py-2 overflow-y-scroll"
        style={{ height: "70vh" }}
      >
        <Head>
          <title>Projects | Yunus Emre Taşçı</title>
        </Head>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-12 gap-4 my-3"
        >
          {projects.map((project) => (
            <motion.div
              variants={fadeinup}
              key={project.name}
              className="p-2 mt-4 bg-gray-200 rounded-lg col-span-12 sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
