"use client"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import "../components/Header.css"
import { TextField } from "@mui/material"

export default function Contact() {
    return (
        <div>
            <Header/>
            <div>
                <h1 id="slideHead" className="text-4xl font-bold text-gray-900 mb-8 text-left">Contact Today.</h1>
                <div className="box">
                    <div className="emailform">
                        <p>If you're interested in shooting your car, or require a real-estate photographer, reach out today and let's set up a meeting!</p>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </div>
                </div>
            </div>
            <div className="footerbelow">
                <Footer/>
            </div>
        </div>
    )
}