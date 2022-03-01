import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import HomePage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'


class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser : null
    }
  }

  unSubscribeFromAuth= null;

  componentDidMount(){
    this.unSubscribeFromAuth= auth.onAuthStateChanged(user => {
      this.setState({ currentUser :user})
    })
    
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header/>
        <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/signin' element={<SignInAndSignUpPage/>} />
        </Routes>
      </div>
    );
  }
 
}


export default App;
