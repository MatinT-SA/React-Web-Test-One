import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'


function HeroSection() {
    return (
        <div data-aos="fade" className='hero-container' >
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <h1> ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
                    GET STARTED
                </Button>
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary">
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
