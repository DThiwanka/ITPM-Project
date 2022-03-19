import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './components/home'
import check from './components/checkout/checkout'
import Footer from './components/footer/footer'

export default class App extends Component {
  render() {
  return (
    <BrowserRouter key={App.BrowserRouter}>
   <div className="container">
     <Route path="/" exact component={home} key={App.home}></Route>
     <Route path="/check" exact component={check} key={App.check}></Route>
    
  </div>
  <Footer/>
  </BrowserRouter>

  );
}

}