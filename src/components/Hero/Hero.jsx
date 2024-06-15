import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Reeba Patel</h1>
                <p className={styles.description}>I am a Front-End Developer Fresher. I am very proficient in using Reactjs and Nodejs.</p>
                <a className={styles.contactbtn} href="mailto:reebapatel2210@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroimg} src={getImageUrl("hero/heroimage.png")} alt="Hero Image" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>

    );
};

export default Hero