import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ContactForm() {
    const [state, handleSubmit] = useForm("mdoqrvze");
    const { t } = useTranslation("contact");

    if (state.succeeded) {
        return <p className="text-main font-semibold">{t("success")}</p>;
    }
    return (
        <motion.form 
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial = {{ opacity: 0, x: -100 }}
        transition = {{ duration: 1 }}
        onSubmit={handleSubmit} className="max-w-md mx-auto p-8 rounded-lg ">
            <div className="mb-4">
                <label htmlFor="email" className="block text-main font-semibold mb-2">{t("email")}</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-contrast"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 mt-2 text-center"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-main font-semibold mb-2">{t("message")}</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows={8}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-contrast"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 mt-2 text-center"
                />
            </div>
            <button 
                type="submit" 
                disabled={state.submitting} 
                className="w-full bg-accent text-main font-semibold py-2 rounded-md hover:bg-main hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                {t("submit")}
            </button>
        </motion.form>
    );
}

export default ContactForm;
