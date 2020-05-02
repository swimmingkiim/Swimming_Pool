import React from 'react';
import '../../scss/Card.scss';

const Card = ( { content } ) => {
    const addClass = content.addClass !== undefined ? `card ${content.addClass}`: "card";

    return (
        <div className={addClass}>
            {
                content.iconAddr !== undefined ? 
                <a href={content.link} target="_blank">
                    <img src={require(`../../img/${content.iconAddr}`)} alt="project_logo"/>
                </a>
                : null
            }
            {
                content.projectTitle !== undefined ? 
                <p className="projectTitle">{content.projectTitle}</p>
                : null
            }
            {
                content.description !== undefined ?
                content.description.map((item) => {
                    return (
                        <p className="description">{item}</p>
                    );
                })
                : null
            }
            {
                content.usedSkills !== undefined ?
                <>
                    <p className="usedSkills"> Used Skills : </p>
                    <div className="skillContainer">
                        {
                            content.usedSkills.map((item) => {
                                return (
                                    <span>{item}</span>
                                );
                            })
                        }
                    </div>
                </>
                : null
            }
        </div>
    );
};

export default Card;