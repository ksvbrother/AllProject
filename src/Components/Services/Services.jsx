import React from 'react';
import './Services.css';
import Resume from '../../img/siva.pdf'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion'
const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 1, type: 'spring' }
    return (
        <div className='services' id='Services'>
            <div className='awesome'>
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque, recusandae magnam maiores repudiandae <br /> labore id provident veniam dignissimos eveniet nam, voluptate amet excepturi hic quam, sequi enim architecto nobis?</span>
                <a href={Resume} download>
                    <button className='button s-buttons'>
                        Download CV</button>
                </a>
                <div className='blur
                 s-blur1'
                    style={{
                        backgrond:
                            '#ABF1FF94'
                    }}></div>
            </div>
            <motion.div
                whileInView={{ left: '0rem' }}
                transition={transition}
                initial={{ left: '25%' }}

                className='cards'>
                <motion.div

                    style={{ left: '14rem', top: '-50px' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading='design'
                        details='figma,photoshop, adodexd' />
                </motion.div>
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={Glasses} heading='design' details='figma,photoshop, adodexd' />
                </div>
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card emoji={HeartEmoji} heading='design' details='figma,photoshop, adodexd' />
                </div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}>

                </div>
            </motion.div>
        </div>
    )
}
export default Services;