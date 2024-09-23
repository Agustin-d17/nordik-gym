import { motion } from "framer-motion";
import { Children } from "react";

const FadeInText = ({children}) => {
    return (
        <motion.div 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.8}}
        >
            {children}
        </motion.div>
    )
}

export default FadeInText