import React, { useEffect } from 'react';
import '../../scss/SwimmingStatusBar.scss';

const SwimmingStatusBar = () => {

    useEffect(() => {
        const endPoint = window.outerHeight * 3.3;
        const swimmer = document.getElementsByClassName("swimmer")[0];
        window.addEventListener("scroll", (e) => {
            const location = window.pageYOffset /endPoint * 100;
            swimmer.style.right = `${location}%`;
            if (location.toFixed(0) % 3 === 0) {
                swimmer.classList.add("stretchArm");
                swimmer.classList.remove("bendArm");
                swimmer.classList.remove("inWaterArm");
                swimmer.classList.remove("goldMedal");
            } else if (location.toFixed(0) % 3 === 1) {
                swimmer.classList.remove("stretchArm");
                swimmer.classList.add("bendArm");
                swimmer.classList.remove("inWaterArm");
                swimmer.classList.remove("goldMedal");
            } else {
                swimmer.classList.remove("stretchArm");
                swimmer.classList.remove("bendArm");
                swimmer.classList.add("inWaterArm");
                swimmer.classList.remove("goldMedal");
            }
            if (location > 99) {
                swimmer.classList.remove("stretchArm");
                swimmer.classList.remove("bendArm");
                swimmer.classList.remove("inWaterArm");
                swimmer.classList.add("goldMedal");
            }
        });
    }, []);

    return (
        <div className="swimmerLine">
            <div className="swimmer stretchArm"></div>
        </div>
    );
};

export default SwimmingStatusBar;