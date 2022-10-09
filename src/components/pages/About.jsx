import React from "react";
import "../../styles/about.css"

export default function About() {
    return (
        <div className="about-container">
          

            <p>Born in 1998, Paraguay.<br></br>
                I believe Software Engineering can be artistic and inspiring.
                <br></br>
                Programming quietly runs the world, and my hope is to be part
                of such by exploring and working on development expressions, projects and products that matter.
                Currently, I enjoy working on web-based applications.
                <br></br><br></br>
                If you'd like to contact me for work opportunities or anything else please do through my e-mail
                or LinkedIn. Click below to copy my e-mail to Clipboard.

            </p>
            <a className="clipboard" onClick={() =>  navigator.clipboard.writeText('elenazafe@gmail.com')}>elenazafe@gmail
            <p className="hehehe"> <span style={{ color:"white" }}>Copied!</span></p>
            </a>
        </div>
    )
}