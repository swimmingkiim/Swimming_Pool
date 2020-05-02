import React from 'react';
import styled from 'styled-components';

const Image = ( { sourceName, alt, w, h, position, top, bottom, left, right } ) => {

    console.log(sourceName);

    const image = require(`../../img/${sourceName}`);

    return (
        <TargetImage 
            src={image}
            alt={alt} 
            w={w ? w : null} 
            h={h ? h : null} 
            position={position ? position : null}
            top={top ? top : null}
            bottom={bottom ? bottom : null}
            left={left ? left : null}
            right={right ? right : null}
        />
    );
}

const TargetImage = styled.img`
    width: ${props => props.w ? props.w : "auto"};
    height: ${props => props.h ? props.h : "auto"};
    position: ${props => props.position ? props.position : null};
    top: ${props => props.top ? props.top : null};
    bottom: ${props => props.bottom ? props.bottom : null};
    left: ${props => props.left ? props.left : null};
    right: ${props => props.right ? props.right : null};
    border: none;
`;

export default Image;