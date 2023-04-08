import React from 'react'
import HomePage from './pages/HomePage'
import Header from './components/Header/Header'
import {Routes, Route} from "react-router-dom";
import ItemPage from "./pages/ItemPage.jsx";


const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Routes>
                <Route path='/crypto-analythics/' element={<HomePage/>}/>
                <Route path='/crypto-analythics/coins/:id' element={<ItemPage/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default App