import React from "react";

const words = ['lorem', 'ipsum',
    'dolor', 'sit', 'amet',
    'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod',
    'tempor', 'incididunt', 'ut',
    'labore', 'et', 'dolore',
    'magna', 'aliqua',
    'Ut', 'enim', 'ad',
    'minim', 'veniam',
    'quis', 'nostrud',
    'exercitation', 'ullamco'
]
const Assignment4 = () => {

    const [para, setPara] = React.useState([""])
    const [wordLength, setWordLength] = React.useState(0)

    const onGenerate = () => {
      if(wordLength <= 0){
        alert("word length should be greater than 0")
        return
      } 
      if(wordLength > words.length){
        alert("word limit exceeded")
      }
        setPara(words.slice(0, wordLength))        
    }

  return (
    <>
      <h1>Para Generator</h1>
      <div style={{ display: "flex" }}>
        <input style={{ padding: "5px", width: "300px", height: "50px",
            fontSize: "20px",
         }}
         
         onChange={(e) => setWordLength(parseInt(e.target.value))}
        placeholder="Enter your words"          
        />
        <button onClick={onGenerate} style={{padding:'3px', marginLeft:'10px', backgroundColor:'black', color:'white'}}>Generate</button>
      </div>

      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {
            para?.map((word) => <p key={word}>{" "}{`${word}`} &nbsp;</p>)
        }
      </div>
    </>
  );
};

export default Assignment4;
