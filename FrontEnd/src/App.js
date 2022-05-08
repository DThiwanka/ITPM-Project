import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import home from './components/home'
import check from './components/checkout/checkout'
import Footer from './components/footer/footer'
import Header from './components/header/Header'
import placed from './components/placed/placed'
import orderdetails from './components/orderDetails/orderdetails'
import Login from './components/login/Login'
import Register from './components/register/Register'
import UserProfile from './components/user_Profile/UserProfile'
import cart from './components/shopping-cart/shoppingCart'
import retrivealldetails from './components/retrivealldetails/retrivealldetails'
import testcomponent from './components/testcomponent/test'

// import Navigation from './components/navigation/nav'

import medicine_cat from './components/category/medicine'
import beabyItems_cat from './components/category/babyItems'
import beauty_cat from './components/category/beauty'
import localMedic_cat from './components/category/localMedi'
import medicalEqui_cat from './components/category/medicalEquipments'
import fitness_cat from './components/category/fitnessAndSupplements'

import Stock_Handling from './components/stock-handling/Stock_handling'
import Stock_Edit from './components/stock-handling/Stock_Edit'
import User_Handling from './components/user-handling/User_handling'
import User_Edit from './components/user-handling/UserEdit'
import AdminHeader from './components/header/adminHeader'

export default class App extends Component {
  render() {
  return (
    <BrowserRouter key={App.BrowserRouter}>
      
      {/* <Header/>
      <Navigation/> */}
      {window.location.pathname !== "/admin/stockHandling" && window.location.pathname !== "/admin/userHandling" && window.location.pathname !== '/admin/user/:id/edit' && window.location.pathname !== "/admin/product/:id/edit" && <Header />}

      {window.location.pathname === "/admin/stockHandling" && <AdminHeader />}
      {window.location.pathname === "/admin/userHandling" && <AdminHeader />}
      {window.location.pathname === "/admin/user/:id/edit" && <AdminHeader />}
      {window.location.pathname === "/admin/product/:id/edit" && <AdminHeader />}
 
      <Route path="/" exact component={home} key={App.home} options={{ Header: () => null }} ></Route>
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
      <Route path="/login" exact component={Login} key={App.Login}></Route>
      <Route path="/register" exact component={Register} key={App.Register}></Route>
     <Route path="/admin/details" exact component={retrivealldetails} key={App.retrivealldetails}></Route>
     <Route path="/cart" exact component={cart} key={App.cart}></Route>

      <Route path="/profile" exact component={UserProfile} key={App.UserProfile}></Route>
      <Route path="/test" exact component={testcomponent} key={App.testcomponent}></Route>
      <Route path="/admin/stockHandling" exact component={Stock_Handling} key={App.Stock_Handling}></Route>
      <Route path="/admin/product/:id/edit" exact component={Stock_Edit} key={App.Stock_Edit}></Route>
      <Route path="/admin/userHandling" exact component={User_Handling} key={App.User_Handling}></Route>
      <Route path="/admin/user/:id/edit" exact component={User_Edit} key={App.User_Edit}></Route>

      {window.location.pathname !== '/admin/stockHandling' && window.location.pathname !== '/admin/userHandling' && window.location.pathname !== '/admin/user/:id/edit' && window.location.pathname !== "/admin/product/:id/edit" && <Footer />}
     

  <Footer/>
  </BrowserRouter>

  );
}

}