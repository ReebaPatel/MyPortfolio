import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links} >
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt="email icon " />
                    <a href="mailto:reebapatel2210@gmail.com">reebapatel2210@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="linkedin icon " />
                    <a href="linkedin.com/in/reeba-patel-981b50290">linkedin.com/in/reeba-patel-981b50290</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="github icon " />
                    <a href="https://github.com/ReebaPatel">https://github.com/ReebaPatel</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact
