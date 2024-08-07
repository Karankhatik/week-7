
import React, {useState} from 'react'

const Assignment2 = () => {
    const [buttonColor, setButtonColor] = useState('white');

  return (
    <>
    <div style={{width:'500px', height:'500px', border:'1px solid black', backgroundColor:buttonColor}}>

    </div>
    <div style={{display:'flex', marginTop:'20px', gap:'40px', flexWrap:'wrap', justifyContent:'center'}}>
        <button style={{background: 'red'}} onClick={() => setButtonColor('red')}>Red</button>
        <button style={{background: 'yellow'}} onClick={() => setButtonColor('yellow')}>Red</button>
        <button style={{background: 'black'}} onClick={() => setButtonColor('black')}>Red</button>
        <button style={{background: 'orange'}} onClick={() => setButtonColor('orange')}>Red</button>
        <button style={{background: 'blue'}} onClick={() => setButtonColor('blue')}>Red</button>

    </div>
    </>
    
  )
}

export default Assignment2