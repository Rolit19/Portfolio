import React from 'react'
import img1 from '../images/reactimg.jpg'
import img2 from '../images/bootstrapimg.jpg'
import img3 from '../images/cssimg.jpg'
import img4 from '../images/htmlimg.jpg'
import img5 from '../images/jsimg.jpg'
import img6 from '../images/c++.jpg'
import img7 from '../images/java.jpg'
import img8 from '../images/python.jpg'
import '../css/techSkill.css'

const TechSkills = () => {
        return (
            <>
            <h1 className="txt">Technologies Learnt</h1>
            <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
                <img className="img" src={img4} alt="reactimg"/>
                <img className="img" src={img3} alt="reactimg"/>
                <img className="img" src={img2} alt="reactimg"/>
                <img className="img" src={img5} alt="reactimg"/>
                <img className="img" src={img1} alt="reactimg"/>
            </div>
            <h1 className="txt">Languages Learnt</h1>
            <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
                <img className="img" src={img6} alt="reactimg"/>
                <img className="img" src={img7} alt="reactimg"/>
                <img className="img" src={img8} alt="reactimg"/>
            </div>
            </>
        )
}

export default TechSkills
