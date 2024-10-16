import Planet from '../../components/planet/Planet.tsx';
import { motion } from 'framer-motion';

import { DiCss3, DiHtml5, DiNodejsSmall, DiReact, DiJava } from "react-icons/di";
import { SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";

import './About.css';
import { IconContext } from 'react-icons';

import { useState, useEffect } from 'react';




function About() {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        setIsLightMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsLightMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className='about'>
            <div className='me'>
                <h1>About</h1>
                <p>This is the about page</p>
                <h1>Skills</h1>
                <h2>Front End</h2>
                <div className="skillCont">
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <DiHtml5 />
                        </IconContext.Provider>
                        <p>HTML5</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <DiCss3 />
                        </IconContext.Provider>
                        <p>CSS3</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "3.5" : "1.7" } }} >
                            <SiJavascript />
                        </IconContext.Provider>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "3.5" : "1.7" } }} >
                            <SiTypescript />
                        </IconContext.Provider>
                        <p>TypeScript</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <DiReact />
                        </IconContext.Provider>
                        <p>React</p>
                    </div>
                </div>
                <h2>Back End</h2>
                <div className="skillCont">
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <DiJava />
                        </IconContext.Provider>
                        <p>Java</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <SiMongodb />
                        </IconContext.Provider>
                        <p>MongoDB</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "3.5" : "1.7" } }} >
                            <SiTypescript />
                        </IconContext.Provider>
                        <p>TypeScript</p>
                    </div>
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <DiNodejsSmall />
                        </IconContext.Provider>
                        <p>NodeJS</p>
                    </div>
                </div>
                <h2>Tools</h2>
                <div className="skillCont">
                    <div className="skill" >
                        <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: window.innerWidth > 590 ? "4" : "2" } }} >
                            <DiReact />
                        </IconContext.Provider>
                        <p>React</p>
                    </div>
                </div>
            </div>
            <motion.div className='planetDiv'
                initial={{ marginLeft: 0 }}
                animate={{ marginLeft: window.innerWidth > 680 ? "100vw" : 0 }}
                transition={{ duration: 2.2, type: "spring", ease: "easeIn" }}>
                <Planet />
            </motion.div>
        </div>
    )
}

export default About;