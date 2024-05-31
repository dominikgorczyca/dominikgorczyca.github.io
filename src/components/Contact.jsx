import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contact() {
    return (
        <div  className="border-b border-contrast pb-20 overflow-x-hidden pt-20 -mt-20" id="contact">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl">
                Contact
            </motion.h2>
            <div className="text-center tracking-tighter flex flex-col justify-center">
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">{CONTACT.address}</motion.p>
                <motion.p 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4">{CONTACT.phoneNo}</motion.p>
                <motion.a 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    href="#" className="border-b block no-underline m-auto">
                    {CONTACT.email}
                </motion.a>
            </div>
        </div>
    );
}

export default Contact;
