import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'
import RepositoryInfo from './components/RepositoryInfo/RepositoryInfo'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/repository/:username/:reponame' element={<RepositoryInfo />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
