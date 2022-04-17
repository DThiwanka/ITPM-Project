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

import medicine_cat from './components/category/medicine'
import beabyItems_cat from './components/category/babyItems'
import beauty_cat from './components/category/beauty'
import localMedic_cat from './components/category/localMedi'
import medicalEqui_cat from './components/category/medicalEquipments'
import fitness_cat from './components/category/fitnessAndSupplements'

import Navigation from './components/navigation/nav'

export default class App extends Component {
  render() {
  return (
    <BrowserRouter key={App.BrowserRouter}>
      
      <Header/>
 
     <Route path="/" exact component={home} key={App.home}></Route>
     <Route path="/medicine" exact component={medicine_cat} key={App.medicine_cat}></Route>
     <Route path="/baby_items" exact component={beabyItems_cat} key={App.beabyItems_cat}></Route>
     <Route path="/beauty" exact component={beauty_cat} key={App.beauty_cat}></Route>
     <Route path="/localMedicine" exact component={localMedic_cat} key={App.localMedic_cat}></Route>
     <Route path="/medical_equipments" exact component={medicalEqui_cat} key={App.medicalEqui_cat}></Route>
     <Route path="/fitness_supplements" exact component={fitness_cat} key={App.fitness_cat}></Route>
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