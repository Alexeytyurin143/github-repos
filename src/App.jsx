import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={Main} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
