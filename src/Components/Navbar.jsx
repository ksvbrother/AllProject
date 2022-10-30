import React from "react";
import './Navbar.css'
import '../App.css';
import Toogle from '../Components/Toogle/Toogle'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name"> Vicky</div>
                <Toogle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='Navbar' activeClass="activeClass" smooth={true}>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonnial' smooth={true}>
                            <li>Testimonnial</li>
                        </Link>
                    </ul>
                </div>

                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button n-button" >Contact</button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar;