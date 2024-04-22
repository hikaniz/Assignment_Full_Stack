import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CreateFoodPage from './pages/CreateFoodPage'
import AllFoodPage from './pages/AllFoodPage'
import FoodEditPage from './pages/FoodEditPage'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/create-food' element={<CreateFoodPage/>}></Route>
                <Route path='/' element={<AllFoodPage/>}></Route>
                <Route path='/edit/:id' element={<FoodEditPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App