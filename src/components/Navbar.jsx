import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav className="flex justify-center sticky top-0 bg-white z-10">
            <div className="container px-8 py-2 flex justify-between">
                <div className="flex flex-shrink-0 items-center">
                    <img className="w-32" src={logo} alt="logo" />
                </div>
                <div className="flex">
                    <div className="items-center gap-4 hidden lg:flex">
                        <a href="#about" className="hover:text-contrast">About</a>
                        <a href="#technologies" className="hover:text-contrast">Technologies</a>
                        <a href="#experience" className="hover:text-contrast">Experience</a>
                        <a href="#projects" className="hover:text-contrast">Projects</a>
                        <a href="#contact" className="hover:text-contrast">Contact</a>
                    </div>

                    <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black">
                        <button className="hidden lg:block">
                            <svg width="30" height="20" className="border-main border">       
                                <image xlinkHref="https://catamphetamine.gitlab.io/country-flag-icons/3x2/PL.svg" width="30" />    
                            </svg>
                        </button>
                        <button className="hidden lg:block">
                            <svg width="30" height="20" className="border-main border">       
                                <image xlinkHref="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg" width="30" />    
                            </svg>
                        </button>
                        <a
                            href="https://www.linkedin.com/in/dominik-gorczyca/"
                            target="_blank" className="hover:text-contrast"   
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/dominikgorczyca"
                            target="_blank" className="hover:text-contrast"
                        >
                            <FaGithub />
                        </a>
                        <button className="lg:hidden" id="hamburger">
                            <GiHamburgerMenu className="text-3xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
