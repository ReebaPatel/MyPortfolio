import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';
export const About = () => {
    return (
        <section className={styles.aboutsection} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.container}>
                <div className={styles.aboutimg}>
                    <img src={getImageUrl("about/aboutImage.png")} alt="about image" />
                </div>
                <ul className={styles.list}>
                    <li className={styles.listoptions}>
                        <img src={getImageUrl("about/cursor.png")} alt="cursor icon" />
                        <div>
                            <h2 className={styles.listtitle}>Frontend Developer</h2>
                            <p className={styles.listdesc}>I'm a frontend developer with experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.listoptions}>
                        <img src={getImageUrl("about/server.png")} alt="cursor icon" />
                        <div>
                            <h2 className={styles.listtitle}>Backend Developer</h2>
                            <p className={styles.listdesc}>I have experience developing fast and optimised backend systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.listoptions}>
                        <img src={getImageUrl("about/ui-icon.png")} alt="cursor icon" />
                        <div>
                            <h2 className={styles.listtitle}>UI Designer</h2>
                            <p className={styles.listdesc}>I have designed multiple landing pages and have created design systems as well</p>
                        </div>

                    </li>
                </ul>
            </div>

        </section>
    );
};

export default About
