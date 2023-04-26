import React from 'react'
import { Work, Footer,About , Header, } from './containers'
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
      <Footer />
    </div>
  )
}

export default App