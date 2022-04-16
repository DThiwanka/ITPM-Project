import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './components/home'
import check from './components/checkout/checkout'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import placed from './components/placed/placed'
import orderdetails from './components/orderDetails/orderdetails'
import login from './components/login/login'
import register from './components/register/register'
import cart from './components/shopping-cart/shoppingCart'
import testcomponent from './components/testcomponent/test'
import Navigation from './components/navigation/nav'

export default class App extends Component {
  render() {
  return (
    <BrowserRouter key={App.BrowserRouter}>
      
      <Header/>
      <Navigation/>
 
     <Route path="/" exact component={home} key={App.home}></Route>
     <Route path="/check" exact component={check} key={App.check}></Route>
     <switch>
     <Route path="/placed" exact component={placed} key={App.placed}></Route>
     </switch>
     <Route path="/orderdetails" exact component={orderdetails} key={App.orderdetails}></Route>
     <Route path="/login" exact component={login} key={App.login}></Route>
     <Route path="/register" exact component={register} key={App.register}></Route>
     <Route path="/test" exact component={testcomponent} key={App.testcomponent}></Route>
     <Route path="/cart" exact component={cart} key={App.cart}></Route>
     

  <Footer/>
  </BrowserRouter>

  );
}

}