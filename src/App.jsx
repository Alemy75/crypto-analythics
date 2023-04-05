import React from 'react'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import {Routes, Route} from "react-router-dom";
import ItemPage from "./pages/ItemPage.jsx";


const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/:id' element={<ItemPage/>}/>
            </Routes>
        </div>
    )
}

export default App