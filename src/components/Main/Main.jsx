import styles from './Main.module.scss'
import Repositories from '../Repositories/Repositories'
import SearchForm from '../SearchForm/SearchForm'
import { useState } from 'react'

const Main = () => {
	return (
		<main className={styles.main}>
			<SearchForm />
			<Repositories />
		</main>
	)
}

export default Main
