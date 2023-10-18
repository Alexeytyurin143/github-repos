import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './reset.scss'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './reducers/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
