import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiSass } from "react-icons/si";
import { FaNodeJs, FaLaravel } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// typescript, sass

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

function Technologies() {
    const { t } = useTranslation("technologies");

    return (
        <div
            className="border-b border-contrast pb-20 overflow-x-hidden pt-20 -mt-20"
            id="technologies"
        >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl"
            >
                {t("technologies")}
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <TbBrandNextjs alt="Next.js" className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <RiReactjsLine alt="React" className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <BiLogoTypescript alt="Typescript" className="text-7xl" color="#3178C6" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <FaNodeJs alt="Node.js" className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <SiExpress alt="Express" className="text-7xl text-black" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <FaLaravel alt="Laravel" className="text-7xl" color="#f55247" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <SiMongodb alt="MongoDB" className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <BiLogoPostgresql alt="Postgresql" className="text-7xl text-sky-700" />
                </motion.div>
                {/* mysql */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <GrMysql alt="MySQL" className="text-7xl" color="#00618A" />
                </motion.div>
                {/* tailwind and sass */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <RiTailwindCssFill alt="Tailwind" className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-main p-4"
                >
                    <SiSass alt="Sass" className="text-7xl text-pink-400" />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Technologies;
