import React from 'react';
import { Container } from  'react-bootstrap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        <h1>Welcome To City Medicals</h1>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;