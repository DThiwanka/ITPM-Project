import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// Components
// import Navbar from "./components/shopping-cart/Navbar";
import SideDrawer from "./components/shopping-cart/SideDrawer";
import Backdrop from "./components/shopping-cart/Backdrop";
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Header/>
      {/* <Navbar click={() => setSideToggle(true)}/> */}
      <SideDrawer show={sideToggle}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
