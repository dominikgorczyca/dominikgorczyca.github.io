import React from "react";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <motion.button animate = {{ opacity: visible ? 1 : 0 }} transition = {{ duration: 0.5 }}
         className="fixed bottom-5 right-5 z-50 w-10 h-10 justify-center items-center bg-main " style={{ display: visible ? "flex" : "none"}}>
            <FaArrowUp
                onClick={scrollToTop}
                className="text-accent w-5 h-5"
            />
        </motion.button>
    );
}

export default ScrollTopButton;
