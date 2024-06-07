import React from "react";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation("about");

    return (
        <div className="border-b border-contrast pb-20 overflow-x-hidden pt-20 -mt-20 px-8" id="about">
            <h2 className="my-20 text-center text-4xl">
                <Trans t={t}>about <span className="text-accent">me</span></Trans>
            </h2>
            <div className="flex flex-wrap justify-between items-center gap-6 max-w-5xl m-auto">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial = {{ opacity: 0, x: -100 }}
                    transition = {{ duration: 1 }}
                    className="w-full lg:w-5/12 lg:p-8"
                    >
                    <div className="flex items-center justify-center">
                        <img
                            className="rounded-2xl w-full max-w-xl"
                            src={aboutImg}
                            alt="About Me"
                        />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial = {{ opacity: 0, x: 100 }}
                    transition = {{ duration: 1 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start text-center lg:text-left">
                        <p className="my-2 max-w-xl py-6">{t('description')}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
