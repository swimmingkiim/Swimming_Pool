import React from 'react';
import '../../scss/Skill.scss';

const Skill = ( { fileName } ) => {
    const icon = require(`../../img/${fileName}.png`);

    return (
        <div>
            {
                fileName === "html_css_js" ? 
                    <img className="languageIcon bigIcon" src={icon} alt={fileName}/>
                :
                    <img className="languageIcon" src={icon} alt={fileName}/>
            }
        </div>
    );
};

export default Skill;