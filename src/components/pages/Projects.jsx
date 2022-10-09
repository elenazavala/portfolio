import React from "react";
import AudioButton from "../utilities/AudioButton"
import { useEffect } from "react";
import { useState } from "react";
import "../../styles/projects.css";
import "../../styles/test.scss";

import audio from "../../assets/audio/stoicize-me-audio.mp3"
import proj1img from "../../assets/content/proj1-img.gif"
import proj2img from "../../assets/content/proj2-img.gif"
import proj3img from "../../assets/content/proj3-img.gif"
import proj4img from "../../assets/content/proj4-img.gif"
import { motion } from 'framer-motion'




export default function Projects() {
    /*
    Source to change background on different route
    here 👉 https://tinyurl.com/56d76v2n 
    */
    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add("bg-proj");

        // 👇️ set style on body element
        document.body.style.backgroundColor = "black";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";



        return () => {
            // 👇️ optionally remove styles when component unmounts
            document.body.style.background = null;
            document.body.classList.remove("bg-proj");
            document.body.style.overflow = "hidden";

        };
    }, []);

    const [isplaying, setisplaying] = useState(false);
    return (


        <motion.div className="projects-page-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}>
        


            <div className="proj1">

                <div className="row--proj">

                    <div className="column--proj">
                        <h2 className="proj1-title">Autonomous Driving
                            <span style={{ fontSize: "15px" }}> ■ Reinforcement Learning</span>

                            <br></br>
                            <span style={{ fontSize: "20px" }}>2021</span>
                        </h2>
                        <div className="proj1-description">
                            Developed and tested prototypes for the AWS DeepRacer
                            under the guidance of Dr. Andrew Williams; and competed
                            in the virtual autonomous racing league. I also taught how
                            to train and create reinforcement learning based models
                            for autonomous driving to new undergraduates,
                            and published a <a href="https://tinyurl.com/mr494aue" target="_blank" >
                                <span style={{ color: "blue" }}>learning guide.</span>
                            </a>
                        </div>
                        <div className="tools-container">
                            Tools:
                            <div className="tools-content">
                                <p>Python</p>
                                <p>AWS DeepRacer Console</p>
                            </div>

                        </div>
                        {/* <div className="tools1">
                                <p>Python</p>
                                <p>AWS DeepRacer Console</p>

                            </div> */}
                    </div>
                    <div className="column--proj">
                        <div className="tdimension">
                            <div className="imagen">
                                <img className="imagen-project" src={proj1img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proj1">
                <div className="row--proj">

                    <div className="column--proj">
                        <h2 className="proj1-title">CodeClash
                            <br></br>
                            <span style={{ fontSize: "20px" }}>2021</span>
                        </h2>
                        <div className="proj1-description">
                            Developed and designed the front-end and UI components of a video game for kids to start learning basic programming logic in a
                            player versus player online battle arena.
                            <br></br><br></br> It, in general structure,
                            resembles the drag and drop visual coding system used by MIT’s Scratch Visual Programming.
                            <br></br>Project was built by a team of 5 developers.
                        </div>
                        <div className="tools-container2">
                            Tools:
                            <div className="tools-content2">
                                <p>Unity</p>
                                <p>Mirror Networking</p>
                                <p>C</p>
                            </div>
                        </div>
                    </div>
                    <div className="column--proj">
                        <div className="tdimension">
                            <div className="imagen">
                                <img className="imagen-project" src={proj2img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proj1">
                <div className="row--proj">

                    <div className="column--proj">
                        <h2 className="proj1-title">RPG Student Survival
                            <br></br>
                            <span style={{ fontSize: "20px" }}>2020</span>
                        </h2>
                        <div className="proj1-description">
                            Developed the front-end, physics engine and designed gameplay assets
                            of a pixel style RPG, based on the ordeals and
                            adventures of a computer science student.
                            <br></br><br></br> Project was built by a team of 4 developers.
                        </div>
                        <div className="tools-container3">
                            Tools:
                            <div className="tools-content3">
                                <p>JavaScript</p>
                                <p>Phaser 3 (HTML5 Framework)</p>
                                <p>Photoshop</p>
                            </div>
                        </div>
                    </div>
                    <div className="column--proj">
                        <div className="tdimension">
                            <div className="imagen">
                                <img className="imagen-project" src={proj3img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="proj1">
                <div className="row--proj">

                    <div className="column--proj">
                        <h2 className="proj1-title">Stoicize Me
                            <br></br>
                            <span style={{ fontSize: "20px" }}>2021</span>
                        </h2>
                        <div className="proj1-description">
                            Implemented an Amazon Alexa skill to help people live better, serene lives by playing stoic meditations from the greatest
                            Roman and Greek philosophers.
                        </div>
                        <p className="click-audio-text">■ &nbsp; Click audio button to demo the skill</p>
                        <AudioButton url={audio} />
                        <div className="tools-container4">
                            Tools:
                            <div className="tools-content4">
                                <p>Python</p>
                                <p>Alexa Skills Kit (ASK)</p>
                            </div>
                        </div>
                    </div>
                    <div className="column--proj">
                        <div className="tdimension">
                            <div className="imagen">
                                <img className="imagen-project" src={proj4img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}