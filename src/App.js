import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './components/home'
import check from './components/checkout/checkout'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import placed from './components/placed/placed'

export default class App extends Component {
  render() {
  return (
    <BrowserRouter key={App.BrowserRouter}>
      <Header/>
   <div className="container">
     <Route path="/" exact component={home} key={App.home}></Route>
     <Route path="/check" exact component={check} key={App.check}></Route>
     <Route path="/placed" exact component={placed} key={App.placed}></Route>
    
  </div>
  <Footer/>
  </BrowserRouter>

  );
}

}