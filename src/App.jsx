import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { CurrentEmployees } from './pages/currentEmployees'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/currentEmployees' element={<CurrentEmployees />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
