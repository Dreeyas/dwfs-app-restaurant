import React from 'react';
import './Hero.css';
import { BsCheckLg } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <h1>Discover the amazing flavor, <br />
                            straight from Asia!</h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</span>
                        <span>"Ut enim ad minim veniam, quis nostrud exercitation ullamco"</span>
                    </div>
                    <div className="text-center">
                        <button className='button'>
                            <Link to="/dwfs-app-restaurant/menu">Our Menu</Link>
                        </button>
                    </div>
                    <div className="flexCenter feats">
                        <div className="flexColCenter feat">
                            <span>
                                <BsCheckLg color="var(--purple)" size={25} />Ten years of</span>
                            <span>gastronomic journey.</span>
                        </div>
                        <div className="flexColCenter feat">
                            <span>
                                <BsCheckLg color="var(--purple)" size={25} />Four talented and
                            </span>
                            <span>passionate chefs.</span>
                        </div>
                        <div className="flexColCenter feat">
                            <span>
                                <BsCheckLg color="var(--purple)" size={25} />An experience
                            </span>
                            <span>you will never forget.</span>
                        </div>
                    </div>

                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./heroimage.jpg" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
