import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css'

export const ProjectCard = ({ project: { title, imageSrc, description } }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={getImageUrl(imageSrc)} alt={`${title}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

        </div>
    )
}

export default ProjectCard
