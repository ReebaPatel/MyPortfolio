import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";


export const Experience = () => {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}> EXPERIENCE</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (
                            <>
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillimgcontainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt="{skill.title}" />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            </>
                        );
                    }
                    )
                }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <>
                                    <li key={id} className={styles.historyitem}>
                                        <img src={getImageUrl(historyItem.imagesrc)}
                                            alt={`${history.organisation} Logo`} />
                                        <div className={styles.historyitemdetails}>
                                            <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                            <p>{`${historyItem.startdate}-${historyItem.enddate}`}</p>
                                            {/* <ul>
                                                {historyItem.experiences.map((experience, id) => {
                                                    return (<li key={id}>{experience}</li>);
                                                })}
                                            </ul> */}
                                        </div>
                                    </li>

                                </>
                            );
                        })
                    }
                </ul>
            </div>
        </section >
    )
}

export default Experience
