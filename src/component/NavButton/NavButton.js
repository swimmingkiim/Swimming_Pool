import React from 'react';
import * as lifeSaver from '../../img/life_saver.png';
import '../../scss/NavButton.scss';

const NavButton = () => {
    return (
        <button>
            <img src={lifeSaver} alt="life_saver"/>
        </button>
    );
};

export default NavButton;