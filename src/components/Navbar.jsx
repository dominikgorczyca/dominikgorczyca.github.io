import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Navbar = () => {
    const { t, i18n } = useTranslation("navbar");
    const [cookies, setCookie] = useCookies(["language"]);
    const [isOpen, setIsOpen] = useState(false);

    console.log(cookies);

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        setCookie("language", lang, { path: "/" });
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", () => {
                const nav = document.getElementsByTagName("nav")[0];
                if (!nav.contains(event.target)) {
                    setIsOpen(false);
                }
            });
        }
    }, [isOpen]);

    return (
        <nav className="shadow-xl border-b-1 flex justify-center sticky top-0 bg-white z-10">
            <div className="container flex justify-between  p-4">
                <div className="flex flex-shrink-0 items-center">
                    <img className="w-24 sm:w-32" src={logo} alt="logo" />
                </div>
                <div className="flex gap-8 ">
                    <div className="items-center gap-4 hidden lg:flex">
                        <a href="#about" className="hover:text-contrast">
                            {t("about")}
                        </a>
                        <a href="#technologies" className="hover:text-contrast">
                            {t("technologies")}
                        </a>
                        <a href="#experience" className="hover:text-contrast">
                            {t("experience")}
                        </a>
                        <a href="#projects" className="hover:text-contrast">
                            {t("projects")}
                        </a>
                        <a href="#contact" className="hover:text-contrast">
                            {t("contact")}
                        </a>
                    </div>

                    <div className=" flex items-center justify-center gap-4 text-2xl text-black">
                        <button className="hidden lg:block border-main border" onClick={() => changeLanguage('pl')}>
                            <svg
                                width="30"
                                height="20"
                            >
                                <image
                                    xlinkHref="https://catamphetamine.gitlab.io/country-flag-icons/3x2/PL.svg"
                                    width="30"
                                />
                            </svg>
                        </button>
                        <button className="hidden lg:block border-main border" onClick={() => changeLanguage('en')}>
                            <svg
                                width="30"
                                height="20"
                            >
                                <image
                                    xlinkHref="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"
                                    width="30"
                                />
                            </svg>
                        </button>
                        <a
                            href="https://www.linkedin.com/in/dominik-gorczyca/"
                            target="_blank"
                            className="hover:text-contrast"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/dominikgorczyca"
                            target="_blank"
                            className="hover:text-contrast"
                        >
                            <FaGithub />
                        </a>
                        <motion.button whileTap={{ scale: 0.8 }}
                                onClick={() => setIsOpen(!isOpen)} className="lg:hidden" id="hamburger">
                            <GiHamburgerMenu className="text-3xl" />
                        </motion.button>
                    </div>
                </div>
            </div>
            <motion.div initial={false} animate={isOpen ? "open" : "closed"} variants={{
            open: {
                clipPath: "inset(0% 0% 0% 0% round 0%)",
                transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
                }
            },
            closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
                }
            }
            }} style={{ pointerEvents: isOpen ? "auto" : "none" }} className="shadow-xl text-center absolute lg:hidden right-0 -mt-px px-8 pt-0 w-full top-full bg-white flex flex-col">
                <motion.a variants={itemVariants}
                    href="#about"
                    className="hover:text-contrast p-4 border-b border-contrast"
                >
                    {t("about")}
                </motion.a>
                <motion.a variants={itemVariants}
                    href="#technologies"
                    className="hover:text-contrast p-4 border-b border-contrast"
                >
                    {t("technologies")}
                </motion.a>
                <motion.a variants={itemVariants}
                    href="#experience"
                    className="hover:text-contrast p-4 border-b border-contrast"
                >
                    {t("experience")}
                </motion.a>
                <motion.a variants={itemVariants}
                    href="#projects"
                    className="hover:text-contrast p-4 border-b border-contrast"
                >
                    {t("projects")}
                </motion.a>
                <motion.a variants={itemVariants}
                    href="#contact"
                    className="hover:text-contrast p-4 border-b border-contrast"
                >
                    {t("contact")}
                </motion.a>
                <motion.div variants={itemVariants} className="flex justify-center p-4 gap-4">
                    <button className="block">
                        <svg
                            width="30"
                            height="20"
                            className="border-main border"
                        >
                            <image
                                xlinkHref="https://catamphetamine.gitlab.io/country-flag-icons/3x2/PL.svg"
                                width="30"
                                onClick={() => changeLanguage('pl')}
                            />
                        </svg>
                    </button>
                    <button className="block">
                        <svg
                            width="30"
                            height="20"
                            className="border-main border"
                        >
                            <image
                                xlinkHref="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"
                                width="30"
                                onClick={() => changeLanguage('en')}
                            />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
