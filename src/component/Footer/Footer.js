import React from 'react';
import * as Email from '../../img/gmail.png';
import * as Github from '../../img/white_github.png';
import '../../scss/Footer.scss';

const Footer = ( {content} ) => {
    return (
        <footer>
            <section className="line email">
                <img src={Email} alt="Email"/>
                <p>{content.email}</p>
            </section>
            <section className="line github">
                <img src={Github} alt="Github"/>
                <p>{content.github}</p>
            </section>
        </footer>
    );
};

export default Footer;