import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[520px] flex flex-col"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden flex items-center justify-center bg-black/10">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain p-4"
          />

          {/* GitHub Icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className='flex gap-2'>
              {/* GitHub Button */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                title="View Code"
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>

              {/* Live Demo Button */}
              {live_link && (
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className='green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  title="View Live"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px] line-clamp-1">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[14px] leading-[22px] line-clamp-4">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]"
        >
          The following projects showcase my experience building real-world web
          applications. Each project highlights frontend system design,
          performance optimization, and problem-solving using modern
          technologies. Source code links are provided.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
