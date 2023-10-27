import { useGetReposQuery } from '../../actions/repos'
import Repository from '../Repository/Repository'
import Loader from '../Loader/Loader'
import styles from './Repositories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Pages from '../Pages/Pages'
import createPages from '../../utils/pagesCreator'

const Repositories = () => {
	const dispatch = useDispatch()
	const searchQuery = useSelector((state) => state.repos.searchQuery)
	const currentPage = useSelector((state) => state.repos.currentPage)
	const perPage = useSelector((state) => state.repos.perPage)
	const { data, error, isFetching } = useGetReposQuery({ searchQuery, currentPage })
	const totalPages = data && Math.ceil(data.total_count / perPage)
	const pages = []

	createPages(pages, totalPages, currentPage)

	return (
		<>
			<div className={styles.repositories}>
				{error ? (
					<>Что-то пошло не так, обновите страницу или попробуйте позднее</>
				) : isFetching ? (
					<Loader />
				) : data ? (
					<>
						<Pages pages={pages} />
						{data.items.map((repository) => (
							<Repository repository={repository} key={repository.id} />
						))}
						<Pages pages={pages} />
					</>
				) : null}
			</div>
		</>
	)
}

export default Repositories
