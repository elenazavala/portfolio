import React from "react";
import PageTitle from "../PageTitle";
import "../../styles/education.css";
import "../../styles/buttons.css";
import { motion } from 'framer-motion'


export default function Education() {
    return (
        <div>
            <PageTitle />

            <motion.div className="education-page-wrapper"
                 initial={{ opacity: 0}}
                 animate={{  opacity: 1 }}
                 exit={{ opacity:0}}
                 transition={{ duration: 0.8 }}>

                <div className='row-edu'>
                    <div className="content1-edu">

                        <h1><span style={{ fontSize: "20px", fontFamily: "neue_haas_grotesk_display35Th" }}>■ Development</span></h1>

                        <div className="scroll-container boton">
                            <div className="scroll-set">
                                <div>
                                    <p>Python&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;</p>
                                </div>
                                <div>
                                    Python&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton2">
                            <div className="scroll-set">
                                <div>
                                    JavaScript&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    JavaScript&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton3">
                            <div className="scroll-set">
                                <div>
                                    HTML&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    HTML&nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton4">
                            <div className="scroll-set">
                                <div>
                                    CSS&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    CSS&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton5">
                            <div className="scroll-set">
                                <div>
                                    React.js&nbsp;&nbsp;&nbsp; React.js&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    React.js&nbsp;&nbsp;&nbsp; React.js&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton6">
                            <div className="scroll-set">
                                <div>
                                    C++&nbsp;&nbsp;&nbsp; C++&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    C++&nbsp;&nbsp;&nbsp; C++&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton7">
                            <div className="scroll-set">
                                <div>
                                    Java&nbsp;&nbsp;&nbsp; Java&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    Java&nbsp;&nbsp;&nbsp; Java&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton8">
                            <div className="scroll-set">
                                <div>
                                    AWS&nbsp;&nbsp;&nbsp; AWS&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    AWS&nbsp;&nbsp;&nbsp; AWS&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton10">
                            <div className="scroll-set">
                                <div>
                                    MYSQL&nbsp;&nbsp;&nbsp; MYSQL&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    MYSQL&nbsp;&nbsp;&nbsp; MYSQL&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="scroll-container boton12">
                            <div className="scroll-set">
                                <div>
                                    UNITY&nbsp;&nbsp;&nbsp; UNITY&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    UNITY&nbsp;&nbsp;&nbsp; UNITY&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <h1><span style={{ fontSize: "20px", fontFamily: "neue_haas_grotesk_display35Th" }}>■ Design</span></h1>

                        <div className="scroll-container boton13">
                            <div className="scroll-set">
                                <div>
                                    FIGMA&nbsp;&nbsp;&nbsp; FIGMA&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    FIGMA&nbsp;&nbsp;&nbsp; FIGMA&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton14">
                            <div className="scroll-set">
                                <div>
                                    PHOTOSHOP&nbsp;&nbsp;&nbsp; PHOTOSHOP&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    PHOTOSHOP&nbsp;&nbsp;&nbsp; PHOTOSHOP&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>

                        <div className="scroll-container boton15">
                            <div className="scroll-set">
                                <div>
                                    ILLUSTRATOR&nbsp;&nbsp;&nbsp; ILLUSTRATOR&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    ILLUSTRATOR&nbsp;&nbsp;&nbsp; ILLUSTRATOR&nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>{/*content 1 edu */}
                </div>{/*row*/}

                <div className="row-edu">
                    <div className="content2-edu">
                        <div className="content2-edu-title">
                            <span style={{ fontSize: "15px", fontFamily: "Helvetica", fontWeight: "800" }}>
                                2019 - 2022 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            The University of Kansas
                        </div>
                        <h3><span style={{ fontFamily: "Helvetica", fontSize: "18px", fontWeight: "200" }}>B.S. in Computer Science </span></h3>
                        <h4> <span style={{ fontFamily: "Helvetica", fontSize: "15px", fontWeight: "200" }}>KS, United States </span> </h4>
                        <br></br>
                        <p><span style={{ fontWeight: "bold", fontSize: "15px" }}>GPA:</span> <span style={{ fontWeight: "lighter", fontSize: "15px" }}> 3.7 </span></p>
                        <br></br>
                        <p> <span style={{ fontFamily: "Helvetica", fontSize: "15px" }}> Organizations </span> </p>
                        <span style={{ fontFamily: "neue_haas_grotesk_display35Th", fontSize: "17px", letterSpacing: "0.5px", lineHeight: "25px" }}>
                            <p>Society of Hispanic Professional Engineers (SHPE)&nbsp; ■</p>
                            <p>HackKU Organization Committee (ACM)&nbsp; ■</p>
                        </span>
                    </div> {/*content 2 edu */}
                </div> {/*row*/}

                <div className="row-edu">
                    <div className="content3-edu">
                        <h2 className="content3-edu-title">
                            <span style={{ fontSize: "15px", fontFamily: "Helvetica", fontWeight: "800" }}>
                                2018  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            University of New South Wales
                        </h2>
                        <h3> <span style={{ fontFamily: "Helvetica", fontSize: "18px", fontWeight: "200", }}>Student Exchange Program</span></h3>
                        <h4> <span style={{ fontFamily: "Helvetica", fontSize: "15px", fontWeight: "200", }}>Sydney, Australia</span></h4>
                        <br></br>
                        <p> <span style={{ fontFamily: "Helvetica", fontSize: "15px" }}> Organizations </span> </p>
                        <p>
                            <span style={{ fontFamily: "neue_haas_grotesk_display35Th", fontSize: "17px", letterSpacing: "0.5px" }}>
                                UNSW Computer Science & Engineering Society (CSESoc)&nbsp; ■
                            </span>
                        </p>
                    </div> {/*content 3 edu */}
                </div> {/*row*/}




            </motion.div> {/*education page wrapper */}
        </div>
    );
};