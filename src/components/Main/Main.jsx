import { useDispatch } from 'react-redux'
import Repository from '../Repository/Repository'
import { useGetReposQuery } from '../../actions/repos'

const Main = () => {
	const dispatch = useDispatch()
	const { data, error, isLoading } = useGetReposQuery()

	return (
		<div>
			<div>
				{error ? (
					<>Что-то пошло не так, обновите страницу или попробуйте позднее</>
				) : isLoading ? (
					<>Загрузка...</>
				) : data ? (
					<>
						{data.items.map((repository) => (
							<Repository repository={repository} key={repository.id} />
						))}
					</>
				) : null}
			</div>
		</div>
	)
}

export default Main
