import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex justify-center sticky top-0 bg-white z-10">
            <div className="container px-8 py-2 flex justify-between">
                <div className="flex flex-shrink-0 items-center">
                    <img className="w-32" src={logo} alt="logo" />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black">
                    <a
                        href="https://www.linkedin.com/in/dominik-gorczyca/"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/dominikgorczyca"
                        target="_blank"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
