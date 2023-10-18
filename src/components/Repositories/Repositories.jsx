import { useGetReposQuery } from '../../actions/repos'
import Repository from '../Repository/Repository'
import Loader from '../Loader/Loader'
import styles from './Repositories.module.scss'
import { useSelector } from 'react-redux'

const Repositories = () => {
	const searchQuery = useSelector((state) => state.repos.searchQuery)
	const { data, error, isFetching } = useGetReposQuery(searchQuery)

	return (
		<div className={styles.repositories}>
			{error ? (
				<>Что-то пошло не так, обновите страницу или попробуйте позднее</>
			) : isFetching ? (
				<Loader />
			) : data ? (
				<>
					{data.items.map((repository) => (
						<Repository repository={repository} key={repository.id} />
					))}
				</>
			) : null}
		</div>
	)
}

export default Repositories
