import React from 'react';
import '../../scss/SelfImg.scss';

const SelfImg = ({ content }) => {
    const Img = require(`../../img/${content.imgName}.jpg`);
    const Bolt = require(`../../img/hexagon.png`);
    const hexagonList = [
        "topleft",
        "topcenter",
        "topright",
        "middleleft",
        "middleright",
        "bottomleft",
        "bottomcenter",
        "bottomright"
    ];
    return (
        <div className="selfImgContainer">
            <div>
                <img src={Img} alt={content.imgName}/>
            </div>
            {
                hexagonList.map((position) => {
                    let str = `hexagon ${position}`;
                    return (
                        <img className={str} src={Bolt}/>
                    );
                })
            }
        </div>
    );
};

export default SelfImg;