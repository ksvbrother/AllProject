import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Loadimg.css'

import LazyImage from "./LazyImage"

export const Load_image = ({ src }) => {
    return (
        <div className='img_section d-flex'>


            <LazyImage src={Pic3} alt="" styleClass="image" />
            <p>this is mu new lazy load image. this is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load imagethis is mu new lazy load image </p>
        </div>
    )
}
