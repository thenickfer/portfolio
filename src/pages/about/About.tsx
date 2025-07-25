import Planet from '../../components/planet/Planet.tsx';
import { motion } from 'framer-motion';

import { DiCss3, DiHtml5, DiNodejsSmall, DiReact, DiJava, DiUnitySmall } from "react-icons/di";
import { SiNestjs, SiPostgresql, SiTypescript, SiJavascript, SiMongodb, SiIntellijidea, SiVisualstudiocode, SiPrisma, SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

import './About.css';
import { IconContext } from 'react-icons';

import { useState, useEffect, useRef } from 'react';

import { useForm, ValidationError } from '@formspree/react';



type previousPage = {
    previous: string
}

function About(props: previousPage) {
    const [isLightMode, setIsLightMode] = useState(false);
    const [state, handleSubmit] = useForm(import.meta.env.VITE_EMAIL_API);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        setIsLightMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsLightMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(e);

        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';

    }


    return (
        <div className='about'>
            <motion.div className='me'
                initial={{ marginBottom: "100vh" }}
                animate={{ marginBottom: 0 }}
                transition={{ duration: 2.2, type: "spring", stiffness: 260, damping: 20 }} >
                <div className='abt'>
                    <h1>About Me</h1>
                    <p id="abtMe" >I'm a Computer Science student at Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Currently, I'm primarily studying web development. All my repositories are on my GitHub page.</p>
                    <h2>Socials</h2>
                    <div className="skillCont" style={{ gridTemplateColumns: "repeat(3, 30%)" }} >
                        <a href="https://github.com/thenickfer" target='_blank'>
                            <div className="skill" >
                                <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '3.5' } }} >
                                    <SiGithub />
                                </IconContext.Provider>
                                <p>GitHub</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/n%C3%ADcolas-ferreira-156116325/" target='_blank'>
                            <div className="skill" >
                                <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '3.5' } }} >
                                    <SiLinkedin />
                                </IconContext.Provider>
                                <p>LinkedIn</p>
                            </div>
                        </a>
                        <a href="https://discord.com/users/315599004475850763" target='_blank'>
                            <div className="skill" >
                                <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '4' } }} >
                                    <SiDiscord />
                                </IconContext.Provider>
                                <p>Discord</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='skillsTab'>
                    <h1 style={{ marginTop: "7%" }}>Skills</h1>
                    <h2>Front End</h2>
                    <div className="skillCont">
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '4' } }} >
                                <DiHtml5 />
                            </IconContext.Provider>
                            <p>HTML5</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '4' } }} >
                                <DiCss3 />
                            </IconContext.Provider>
                            <p>CSS3</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '3.5' } }} >
                                <SiJavascript />
                            </IconContext.Provider>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '3.5' } }} >
                                <SiTypescript />
                            </IconContext.Provider>
                            <p>TypeScript</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '4' } }} >
                                <DiReact />
                            </IconContext.Provider>
                            <p>React</p>
                        </div>
                    </div>
                    <h2>Back End</h2>
                    <div className="skillCont">
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '4' } }} >
                                <DiJava />
                            </IconContext.Provider>
                            <p>Java</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: '4' } }} >
                                <SiMongodb />
                            </IconContext.Provider>
                            <p>MongoDB</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "3.5" } }} >
                                <SiTypescript />
                            </IconContext.Provider>
                            <p>TypeScript</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "3.5" } }} >
                                <SiPrisma />
                            </IconContext.Provider>
                            <p>Prisma</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "3.5" } }} >
                                <SiPostgresql />
                            </IconContext.Provider>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "3.5" } }} >
                                <SiNestjs />
                            </IconContext.Provider>
                            <p>NestJS</p>
                        </div>
                    </div>
                    <h2>Tools</h2>
                    <div className="skillCont">
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "3.5" } }} >
                                <SiIntellijidea />
                            </IconContext.Provider>
                            <p>IntelliJ IDEA</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "4" } }} >
                                <SiVisualstudiocode />
                            </IconContext.Provider>
                            <p>VS Code</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "5" } }} >
                                <DiUnitySmall />
                            </IconContext.Provider>
                            <p>Unity</p>
                        </div>
                        <div className="skill" >
                            <IconContext.Provider value={{ style: { color: isLightMode ? "#F6228E" : "cyan", scale: "4" } }} >
                                <DiNodejsSmall />
                            </IconContext.Provider>
                            <p>NodeJS</p>
                        </div>
                    </div>
                    <div style={{ height: "10px", position: "relative", display: "block" }}> </div>
                </div>
                <div className="contactMe">
                    <h2>Contact Me</h2>
                    <p>For any questions or proposals, you can contact me through my social networks or by email.</p>

                    <form onSubmit={handleFormSubmit} >
                        <label htmlFor='name'>Your Name</label>
                        <input id="name" name="Name" type="text" placeholder="Name" required ref={nameRef} />


                        <label htmlFor='email'>Your Email</label>
                        <input id="email" name='Email' type="email" placeholder="Email" required ref={emailRef} />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor='message'>Message</label>
                        <textarea required
                            id="message"
                            name="message"
                            ref={messageRef}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <button id="sub" type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                        <p style={{ display: state.succeeded ? "block" : "none" }} id="thanks" >Thanks for the message!</p>

                    </form>


                </div>
            </motion.div>
            <motion.div className='planetDiv'
                initial={{ marginLeft: window.innerWidth > 680 ? (props.previous == 'Work' ? 0 : "-100vw") : '0' }}
                animate={{ marginLeft: 0 }}
                transition={{ duration: 2.2, type: "spring", ease: "easeIn" }}
                exit={{ marginLeft: window.innerWidth > 680 ? "-100vw" : 0 }} >
                <Planet />
            </motion.div>
        </div>
    )
}

export default About;
