import React from 'react'
import Navbar from './Navbar'
import phonelogo from '../contactimg.jpeg'
import Form1 from './Form.js'
import '../css/techSkill.css'
 
const Contacts=()=> {
    return (
        <>
        <Navbar />
        <div className="container1">
            <img className="img1" src={phonelogo} alt="phone"/>
            <div className="addform">
                <Form1/>
            </div>
        </div>
        </>
    )
}

export default Contacts
