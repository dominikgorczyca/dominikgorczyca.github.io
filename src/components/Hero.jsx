import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

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
    return (
        <div className="border-b border-contrast pb-20 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-6 text-center lg:text-left text-6xl lg:mt-16 lg:text-8xl font-light"
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
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 self-center">
                    <div className="flex justify-center">
                        <motion.img 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            src={profilePic} alt="Dominik Gorczyca" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
