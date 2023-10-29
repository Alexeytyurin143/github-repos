import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Main from './components/Main/Main'

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
					<Route path='/' Component={Main} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
