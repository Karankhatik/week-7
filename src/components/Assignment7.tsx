import React from 'react'

const Assignment7 = () => {
    const [userName, setUserName] = React.useState("");
    const [showCard, setShowCard] = React.useState(false);
  return (
    <div>
        {
          showCard && <h1>Happy birthday {userName}</h1>
          
        }
        {
            showCard && <h1>Happy janam {userName}</h1>
        }
        {
            showCard && <h1>Happy subh din {userName}</h1>
        }
      <h1>Enter your name</h1><br/>
      <input 
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => setShowCard(true)}>Show birthday card</button>


    </div>
  )
}

export default Assignment7