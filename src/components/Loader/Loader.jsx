import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loaderWrapper}>
			<div className={styles.ldsRing}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loader
