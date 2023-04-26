import React from 'react'
import { Work, Footer,About , Header, Reviews, } from './containers'
import { Navbar } from "./Components";
import './App.css'

const App = () => {
  

  return (
    <div className='App'>
     <div className='gradient__bg'>
      <Navbar />
      <Header />
     </div>
      <About />
      <Work />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App