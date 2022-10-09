import React from "react";
import { useEffect } from "react";
import '../../styles/circle.scss'
import '../../styles/style.css'
import PageTitle from "../PageTitle";

import { motion } from 'framer-motion'
import Mailto from '../utilities/Mailto'


export default function Home() {

  return (
    <div>
      <PageTitle />

      <motion.div className="home--container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}>

        {/* <h4 className="home--title"><span style={{ fontFamily: "" }}>Elena</span> Zavala F.</h4>
        <p className="home--skills">Software Engineer & Web Developer</p> */}

        <div className="home--socials">
          <a className="social--link" href="https://tinyurl.com/3p8dpmkw" target="_blank" >
            <p>  ↗ LinkedIn</p>
          </a>
          <a className="social--link" href="https://tinyurl.com/mryp89ns" target="_blank">
            <p> ↗ My Resume</p>
          </a>
          <a className="social--link" href="https://github.com/elenazavala" target="_blank">
            <p> ↗ GitHub</p>
          </a>
        </div>

        <div className="home-row">
          <div className="home-column">


          </div>

          <div className="home-column">
            <div className="home--about">
              <p>Born in 1998, Paraguay.
                <br></br>I believe Software Engineering can be more creative
                <br></br> and inspiring.
                <br></br>Programming quietly runs the world,
                <br></br> and my hope is to be part
                <br></br>of such by exploring and
                <br></br>working on development expressions, projects and products that matter.
                <br></br>Currently, I enjoy working on web-based applications.
              </p>
            </div>
          </div>
        </div>

      </motion.div>

    </div >
  );
}
