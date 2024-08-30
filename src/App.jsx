import React from 'react'
import Navbar from './Navbar'
import Input from './Input'

const App = () => {
  return (
    <div  style={{display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'space-around'}}>
      <Navbar/>
      <h3 style={{color: 'red'}}>Welcome to Text Formatter App</h3>
      <Input/>
    </div>
  )
}

export default App
