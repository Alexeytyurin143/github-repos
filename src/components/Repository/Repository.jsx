import styles from './Repository.module.scss'

const Repository = ({ repository }) => {
	return (
		<div className={styles.repository}>
			<a href={repository.html_url} className={styles.name}>
				Репозиторий {repository.name}
			</a>
			<div className={styles.description}>{repository.description}</div>
			<div className={styles.footer}>
				<div className={styles.lastCommit}>Последний коммит: {repository.updated_at}</div>
				<div className={styles.stars}>Количество звёзд: {repository.stargazers_count}</div>
			</div>
		</div>
	)
}

export default Repository
