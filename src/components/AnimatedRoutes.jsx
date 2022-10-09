import React from 'react'
import { Router, Route, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import About from './pages/About';
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { motion } from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
            </Routes >
            </AnimatePresence>

        </div>
    )
}