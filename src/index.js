import React, {Component} from 'react';

const VerticalRhythm = ({fontSize, lineHeight}) => {
    const LINE_HEIGHT_VAL = fontSize.replace(/[^-\d\.]/g, '') * lineHeight;
    const UNIT = fontSize.replace(/[\d\.]/g, '');
    const DIV_STYLE = {
        backgroundImage: 'linear-gradient(to top, red 5%, rgba(0, 0, 0, 0) 5%)',
        backgroundSize: `100% ${LINE_HEIGHT_VAL}${UNIT}`,
        backgroundPosition: 'left top',
        zIndex: 20,
        height: '100%',
        width: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0
    };
    return <div className='vertical-rhythm' style={DIV_STYLE}></div>;
};

export default VerticalRhythm;
