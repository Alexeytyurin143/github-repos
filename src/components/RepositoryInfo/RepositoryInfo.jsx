import { Link, useParams, useNavigate } from 'react-router-dom'
import styles from './RepositoryInfo.module.scss'
import { useGetContributorsQuery, useGetRepositoryQuery } from '../../actions/repos'
import Loader from '../Loader/Loader'

const RepositoryInfo = () => {
	const { username, reponame } = useParams()
	const navigate = useNavigate()
	const { data: repo, error, isFetching } = useGetRepositoryQuery({ username, reponame })
	const {
		data: contributors,
		error: cError,
		isFetching: cIsFetching,
	} = useGetContributorsQuery({ username, reponame })

	return (
		<div className={styles.repositoryInfo}>
			<button onClick={() => navigate(-1)}>Назад</button>
			{error ? (
				<>Что-то пошло не так, обновите страницу или попробуйте позднее</>
			) : isFetching ? (
				<Loader />
			) : repo ? (
				<>
					<div className={styles.info}>
						<div className={styles.header}>
							<img className={styles.avatar} src={repo.owner.avatar_url} alt='Аватар' />
							<div className={styles.headerInfo}>
								<h1 className={styles.name}>
									<a href={repo.html_url}>{repo.name}</a>
								</h1>
								<p className={styles.description}>
									<span>Описание:</span> {repo.description}
								</p>
								<div className={styles.stars}>Количество звёзд: {repo.stargazers_count}</div>
							</div>
						</div>
						<div className={styles.contributors}>
							{cError ? (
								<>Что-то пошло не так, обновите страницу или попробуйте позднее</>
							) : cIsFetching ? (
								<Loader />
							) : contributors ? (
								<>
									<p>Топ 10 контрибьюторов репозитория:</p>
									{contributors.map((contributor, index) => (
										<a className={styles.link} key={contributor.login} href={contributor.html_url}>
											{index + 1}. {contributor.login}
										</a>
									))}
								</>
							) : null}
						</div>
					</div>
				</>
			) : null}
		</div>
	)
}
export default RepositoryInfo
