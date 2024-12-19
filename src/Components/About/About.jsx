import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)}/>
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Company Profile</h2>
            <p>Mitra Taxindo Consulting (M-Tax) is a tax consulting company located 
                in Jakarta that has obtained official certification and has experience 
                in handling tax obligations for taxpayers.</p>
            <p>M-Tax was established in response to the needs of individuals and companies to 
                understand and comply with complex tax regulations. 
                Taxes are one of the most important aspects of business activities, 
                and errors in tax calculation or reporting can significantly impact a company'ss finances and reputation.</p>
            <p>M-Tax is a solution to meet specific tax consultation needs where 
                each company has different tax consultation requirements, 
                depending on the type of business and income earned or received. 
                Thus, companies can focus more on their core business activities 
                without worrying about complex tax regulations, which can help 
                improve operational efficiency and company productivity.
            </p>
        </div>
    </div>
  )
}

export default About