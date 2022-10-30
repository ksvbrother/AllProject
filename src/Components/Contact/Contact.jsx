import React from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
import './Contact.css'
import { themeContext } from '../../Context';
import { useContext } from "react";
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nzrsp65', 'template_vctxiz3', form.current, 'ZgtOFG-bpKY733GW0')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact-form" id="Contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1 " style={{ background: '#ABF1FF94' }}>

                    </div>
                </div>
            </div>
            <div className="c-right">
                <form action="" ref={form}
                    onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Enter your name" />
                    <input type="email" name="user_email" className="user" placeholder="Enter your email" />
                    <textarea name="message" className="user" placeholder="Enter your Comments"></textarea>
                    <input type="submit" value="send" className="button" />
                    <span>{done && 'thank for contact me'}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple' }}></div>
                </form>
            </div>

        </div >
    )
}

export default Contact;