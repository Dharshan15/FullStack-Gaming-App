import React from 'react'
import '../cssPages/LandingPage.css'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import miniPekka from '../images/minipekka.png'

const LandingPage = () => {
  return (
    <div className='landingPage'>
    <section className="hero">
        <nav className='landingNav'>
            <img className="logoLand" src={Logo} alt="Logo"/>
            <ul className='landingUl'>
                <li className='LandList'>ABOUT</li>
                <li className='LandList'>GAMES</li>
                <li className='LandList'>ESPORTS</li>
                <Link to='/loginsignup'>
                    <li className='LandList'>SIGN IN</li>
                </Link>
            </ul>
        </nav>
        <div className="hero-area">
            <img className='minipekka'src={miniPekka} alt='minipekka'/>
            <div className="htext">
                <h1 className='landingH1'>DN</h1>
                <div className='sub-text'>Makers of Hay Day, Clash of Clans, Boom Beach, Clash Royale and Brawl Stars.</div>
                <div className='button-centerer'>
                    <div className="button"><a href="#aboutme">See latest</a></div>
                </div>
            </div>
        </div>
    </section>
    <section className="subsection1" id="projects">
        <div className="pro">
            <div className="projects">
                <img className="proimage"src="src/image/project1.png" alt="project1"/>
                <h3 className='landingH3'>Dream</h3>
                <p className="subtext">Dream is an AR app which moves the cube when the virtual button is pressed.</p>
            </div>
            <div className="projects">
                <img className="proimage"src="src/image/project2.png" alt="project2"/>
                <h3 className='landingH3'>Organless</h3>
                <p className="subtext">Made the character in photoshop and animated it in Unity.</p>
            </div>
            <div className="projects">
                <img className="proimage"src="src/image/project3.png" alt="project3"/>
                <h3 className='landingH3'>Trucker</h3>
                <p className="subtext">Trucker is a normal driving game with Speed and RPM meter.</p>
            </div>
            <div className="projects">
                <img className="proimage"src="src/image/project4.png" alt="project4"/>
                <h3 className='landingH3'>Capooter</h3>
                <p className="subtext">Capooter shoots a projectile . The ground material used  in this game is a picture of our original land.</p>
            </div>
        </div>
    </section>
    <footer id="contactme">
        <h2 className='landingH2'>Contact Me</h2>
        <p>somudharsha@gmail.com</p>
    </footer>
    </div>
  )
}

export default LandingPage;