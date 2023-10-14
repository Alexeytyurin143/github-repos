import React from 'react'
import styles from './Repository.module.scss'

const Repository = ({ repository }) => {
    return (
        <div className={styles.repository}>
            <div className={styles.header}>
                <div className={styles.name}>{repository.name}</div>
                <div className={styles.stars}>{repository.stargazers_count}</div>
            </div>
            <div className={styles.lastCommit}>{repository.updated_at}</div>
            <a href={repository.html_url} className={styles.link}>
                Ссылка на репозиторий
            </a>
        </div>
    )
}

export default Repository
