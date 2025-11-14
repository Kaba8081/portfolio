import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useLocation } from "react-router";

interface PageTransitionProps {
    children?: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({
    children,
} : PageTransitionProps) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    
    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;