import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../reducers/reposSlice'
import styles from './Pages.module.scss'

const Pages = ({ pages }) => {
	const dispatch = useDispatch()
	const currentPage = useSelector((state) => state.repos.currentPage)
	const perPage = useSelector((state) => state.repos.perPage)
	const pagesCount = Math.ceil()

	return (
		<div className={styles.pages}>
			{pages.map((page, index) => (
				<span key={index} className={`${styles.page}  ${currentPage == page && styles.page_active}`} onClick={() => dispatch(setCurrentPage(page))}>
					{page}
				</span>
			))}
		</div>
	)
}
export default Pages
