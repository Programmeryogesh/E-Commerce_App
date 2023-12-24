import './App.css'
import HomePage from './components/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from "./components/navbar";
import ExploreComponent from './components/exploreComponent';
import { store } from './store/reducers/store';
import {Provider} from 'react-redux'
import LoginPage from './components/loginPage';
import CartComponent from './components/CartComponent';
import SignUp from './components/signUpPage';

function App() {

  return (
    <>
     <Provider store = {store}>
     <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/product/:productId' element={<ExploreComponent />} />
          <Route path='/Cart' element={<CartComponent/>} />
          <Route path='/login/SignUp' element={<SignUp/>} />



        </Routes>
      </BrowserRouter>
     </Provider>

    </>
  )
}

export default App
