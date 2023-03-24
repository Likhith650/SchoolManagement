import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../pexels-lukas-1420709.jpg';
import image2 from '../pexels-mike-b-114820.jpg';
import image3 from '../pexels-emmanuel-ikwuegbu-8948350.jpg'
const home = () => {
    const images = [
        image1,
        image2,
        image3,
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>𝗗𝗜𝗚𝗜𝗧𝗔𝗟</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>𝗖𝗟𝗔𝗦𝗦𝗥𝗢𝗢𝗠</span>
                </div>
            </div>
        </Slide>
    );
};

export default home;