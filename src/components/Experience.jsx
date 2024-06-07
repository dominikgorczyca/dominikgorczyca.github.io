import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Experience() {
    const { t } = useTranslation("experience");
    const experiences = t("experiences", { returnObjects: true });

    return (
        <div
            className="border-b border-contrast pb-20 overflow-x-hidden pt-20 -mt-20"
            id="experience"
        >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                {t("experience")}
            </motion.h2>
            <div className="flex flex-col text-center sm:text-left items-center justify-center gap-12">
                {experiences.map((experience, index) => {
                    return (
                        <div
                            key={index}
                            className="flex sm:gap-16 flex-col sm:flex-row"
                        >
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="block  sm:w-40 sm:h-40"
                            >
                                <p className="mb-2 text-sm text-gray">
                                    {experience.date}
                                </p>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4"
                            >
                                <h3 className="mb-2 font-semibold">
                                    {experience.role} -
                                    <span className="text-sm text-contrast">
                                        {" "}
                                        {experience.company}
                                    </span>
                                </h3>
                                <p className="mb-4 text-gray">
                                    {experience.description}
                                </p>
                                <div className="flex flex-wrap justify-center sm:justify-start">
                                    {experience.technologies.map(
                                        (tech, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="mr-2 mt-4 rounded bg-accent px-2 py-1 text-sm font-bold text-black"
                                                >
                                                    {tech}
                                                </span>
                                            );
                                        }
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;
