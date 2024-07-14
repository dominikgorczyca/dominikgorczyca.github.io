import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

function Contact() {
    const { t } = useTranslation("contact");

    return (
        <div  className=" pb-20 overflow-x-hidden pt-20 -mt-20" id="contact">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl">
                {t("contact")}
            </motion.h2>
            <ContactForm/>
        </div>
    );
}

export default Contact;
