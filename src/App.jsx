import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'

function App() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.repos.count)
    const handleClick = () => {}

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Main} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
