import { useState } from 'react'

import './App.css'
import Assignment1 from './components/assignment1'
import Assignment2 from './components/Assignment2'
import Assignment4 from './components/Assignment4'
import Assignment5 from './components/assignment5'
import Assignment6 from './components/Assignment6'
import Assignment7 from './components/Assignment7'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Assignment1/>    */}
    {/* <Assignment2/> */}
    {/* <Assignment4/>    */}
    {/* <Assignment5/> */}
    {/* <Assignment6/> */}
    <Assignment7/>
    
    </>
  )
}

export default App
