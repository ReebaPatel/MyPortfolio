import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";


export const Experience = () => {
    return (
        <section id='experience'>
            <h2>EXPERIENCE</h2>
            <div className="container">
                <div>{
                    skills.map((skill, id) => {
                        return (
                            <><div key={id}>
                                <div><img src={getImageUrl(skill.imageSrc)} alt="{skill.title}" /></div>
                            </div><p>{skill.title}</p></>
                        );
                    }
                    )
                }
                </div>
                <ul>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <>
                                    <li key={id}>
                                        <img src={getImageUrl(historyItem.imagesrc)} alt={`${history.organisation} Logo`} />
                                    </li>
                                    <div>
                                        <h3></h3>
                                    </div>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </section >
    )
}

export default Experience
