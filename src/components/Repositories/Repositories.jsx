import { useGetReposQuery } from '../../actions/repos'
import Repository from '../Repository/Repository'
import Loader from '../Loader/Loader'
import styles from './Repositories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { setCurrentPage } from '../../reducers/reposSlice'

const Repositories = () => {
	const dispatch = useDispatch()
	const searchQuery = useSelector((state) => state.repos.searchQuery)
	const currentPage = useSelector((state) => state.repos.currentPage)
	const perPage = useSelector((state) => state.repos.perPage)
	const { data, error, isFetching } = useGetReposQuery({ searchQuery, currentPage })
	const totalPages = data && Math.ceil(1000 / perPage)

	return (
		<>
			<div className={styles.repositories}>
				{error ? (
					<>Что-то пошло не так, обновите страницу или попробуйте позднее</>
				) : isFetching ? (
					<Loader />
				) : data ? (
					<>
						<Pagination
							shape='rounded'
							count={totalPages}
							page={currentPage}
							onChange={(_, page) => dispatch(setCurrentPage(page))}
							siblingCount={4}
							sx={{ marginY: 1 }}
						/>
						{data.items.map((repository) => (
							<Repository repository={repository} key={repository.id} />
						))}
						<Pagination
							shape='rounded'
							count={totalPages}
							page={currentPage}
							onChange={(_, page) => dispatch(setCurrentPage(page))}
							siblingCount={4}
							sx={{ marginY: 1 }}
						/>
					</>
				) : null}
			</div>
		</>
	)
}

export default Repositories
