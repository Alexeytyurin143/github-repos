import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from './reducers/reposSlice'

function App() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.repos.count)

    const handleClick = () => {
        dispatch(setCount(4))
    }

    return (
        <>
            <button onClick={handleClick}>Set Count</button>
            <div>{count}</div>
        </>
    )
}

export default App
