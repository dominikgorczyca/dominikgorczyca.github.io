import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaShareSquare } from "react-icons/fa";

function Projects() {
    const { t } = useTranslation("projects");
    const projects = t("projects", { returnObjects: true });

    return (
        <div
            className="border-b border-contrast pb-20 flex flex-col items-center overflow-x-hidden pt-20 -mt-20"
            id="projects"
        >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                {t("title")}
            </motion.h2>
            <div className="flex flex-col justify-center gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex gap-4 sm:gap-16 flex-col items-center sm:flex-row"
                    >
                        <motion.a 
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="rounded min-w-40 w-40 h-40"
                            href={project.link}
                            target={project.link == "#" ? "" : "_blank"}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain shadow-lg"
                            />
                        </motion.a>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl flex flex-col justify-center items-center sm:items-start text-center sm:text-left"
                        >
                            <h3 className="flex items-center gap-4 mb-2 font-semibold">
                                {project.title} 
                                <a
                                    href={project.github} target="_blank"
                                    className="hover:text-contrast text-xl flex	leading-0"
                                >
                                    <FaGithub className="inline" />
                                </a>
                                <a
                                    href={project.link}
                                    target={project.link == "#" ? "" : "_blank"}
                                    className="hover:text-contrast text-xl flex leading-0"
                                >
                                    <FaShareSquare className="inline" />
                                </a>
                            </h3>
                            <p className="mb-4 text-gray">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap justify-center sm:justify-start">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-4 rounded bg-accent px-2 py-1 text-sm font-bold text-black"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
