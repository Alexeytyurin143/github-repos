import { useDispatch } from 'react-redux'
import styles from './SearchForm.module.scss'
import { setCurrentPage, setSearchQuery } from '../../reducers/reposSlice'

const SearchForm = () => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const searchData = new FormData(searchForm)
		const searchQuery = searchData.get('searchQuery')
		dispatch(setSearchQuery(searchQuery))
		dispatch(setCurrentPage(1))
	}

	return (
		<form onSubmit={handleSubmit} className={styles.searchForm} id='searchForm'>
			<input name='searchQuery' type='text' placeholder='Поиск...' className={styles.searchInput} />
			<input type='submit' value='Найти' className={styles.searchBtn} />
		</form>
	)
}
export default SearchForm
