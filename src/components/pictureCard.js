import React from "react";
import { motion } from "framer-motion"

function PictureCard(){
    return (
            <>
                <motion.div className="container" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <h1>Jobs</h1>
                </motion.div>
            </>
        );
}

export default PictureCard;
