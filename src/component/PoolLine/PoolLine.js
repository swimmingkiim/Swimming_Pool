import React from 'react';
import Image from '../Image';
import '../../scss/PoolLine.scss';

const PoolLine = ({ brickNum, lineNum }) => {
    let lineArr = [];
    let brickArr = [];
    let swimGirl = "swimmer.png";
    for (let i = 0; i < lineNum; i++) {
        lineArr.push(i);
    }
    for (let i = 0; i < brickNum; i++) {
        brickArr.push(i);
    }
    return (
        <div className="poolLineContainer">
            {
                lineArr.map((line) => {
                    return (
                        <div className="line">
                            {
                                brickArr.map((brick) => {
                                    return (
                                        <div className="brick"></div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
            <Image sourceName="swimmer.png" alt="swimming girl!" w="5%" position="absolute" top="18%" left="10%"/>
            <Image sourceName="swimmer.png" alt="swimming girl!" w="5%" position="absolute" top="38%" left="85%"/>
            <Image sourceName="swimmer.png" alt="swimming girl!" w="5%" position="absolute" top="58%" left="33%"/>
            <Image sourceName="swimmer.png" alt="swimming girl!" w="5%" position="absolute" top="78%" left="67%"/>
            <Image sourceName="swimmer.png" alt="swimming girl!" w="5%" position="absolute" top="8%" left="50%"/>
            <Image sourceName="swimmer.png" alt="swimming girl!" w="5%" position="absolute" top="90%" left="24%"/>
        </div>
    );
};

export default PoolLine;