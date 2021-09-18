import React from "react";
import { motion } from "framer-motion"
import { FaPhoneAlt, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

function ContactList(){
    const mailTo = () => {
        window.location.href = "mailto:xyz@abc.com";
    }
    const callTo = () => {
        window.location.href = "tel:+000000000000";
    }
    return (
            <>
                <motion.button
                    onClick={callTo}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2, rotate: -90, borderRadius: "10px" }}>
                        <FaPhoneAlt />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2, rotate: -90, borderRadius: "10px" }}>
                        <FaLinkedinIn />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2, rotate: -90, borderRadius: "10px" }}>
                        <FaTwitter />
                </motion.button>
                <motion.button
                    onClick={mailTo}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2, rotate: -90, borderRadius: "10px" }}>
                        <FaEnvelope />
                </motion.button>
                       
            </>
        );
}

export default ContactList;
