import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion'
const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works">
            <div className='awesome'>
                <span style={{ color: darkMode ? 'white' : '' }}>Work for all theses</span>
                <span>
                    Brands and Clients
                </span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque, recusandae magnam maiores repudiandae <br /> labore id provident veniam dignissimos eveniet nam,<br /> voluptate amet excepturi hic quam, sequi enim architecto nobis?<br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum perspiciatis eius dicta!</span>
                <button className='button s-buttons'>
                    Hire me</button>

                <div className='blur
                 s-blur1'
                    style={{
                        backgrond:
                            '#ABF1FF94'
                    }}></div>
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}


                    className="w-maincircle">
                    <div className="w-sec-circle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-sec-circle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                <div className="w-back-circle blue-circle">

                </div>
                <div className="w-back-circle yellow-circle">

                </div>
            </div>

        </div>
    )
}

export default Works;