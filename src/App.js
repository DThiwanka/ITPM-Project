import React from "react"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/home'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home/>
      </main>
      <Footer />

    </>
  );
}

export default App;
