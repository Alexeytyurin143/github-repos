import { Link } from 'react-router-dom'
import styles from './Repository.module.scss'

const Repository = ({ repository }) => {
	return (
		<div className={styles.repository}>
			<p className={styles.name}>Репозиторий {repository.name}</p>
			<div className={styles.description}>{repository.description}</div>
			<div className={styles.info}>
				<div className={styles.lastCommit}>Последний коммит: {repository.updated_at}</div>
				<div className={styles.stars}>Количество звёзд: {repository.stargazers_count}</div>
			</div>
			<div className={styles.footer}>
				<a href={repository.html_url}>Ссылка на репозиторий</a>
				<Link to={`/repository/${repository.owner.login}/${repository.name}`}>Подробнее...</Link>
			</div>
		</div>
	)
}

export default Repository
