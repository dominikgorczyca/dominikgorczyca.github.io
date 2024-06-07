import React from "react";
import profilePic from "../assets/me.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    }
});

function Hero() {
    const { t } = useTranslation("hero");

    return (
        <div className="border-b border-contrast pb-20 pt-40 lg:mb-35 px-8 overflow-x-hidden -mt-20 ">
            <div className="flex flex-wrap justify-between gap-6 max-w-screen-xl m-auto">
                <div className="w-full lg:w-1/2">
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-6 text-6xl lg:mt-12 lg:text-8xl font-light"
                        >
                            Dominik Gorczyca
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-contrast bg-clip-text text-3xl"
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6">
                            {t("description")}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-5/12 flex self-center justify-center items-end ">
                    <motion.img 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        src={profilePic} alt="Dominik Gorczyca" className="w-full rounded-lg max-w-xl" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
