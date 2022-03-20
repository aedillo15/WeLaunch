import React from "react"
import {motion} from "framer-motion"

const animations = {
    inital: {opacity: 0, x: 100, scaleY:0},
    animate:{opacity: 1, x: 0, scaleY:1},
    exit:{opacity: 0, x: -100, scaleY:0}
}

const AnimatedPage = ({children}) =>{
    return(
        <motion.div 
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit" style={{height: '100%'}}>

            {children}
        </motion.div>
    )
}

export default AnimatedPage;