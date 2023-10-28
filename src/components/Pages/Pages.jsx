import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../reducers/reposSlice'
import styles from './Pages.module.scss'

const Pages = ({ pages }) => {
	const dispatch = useDispatch()

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
