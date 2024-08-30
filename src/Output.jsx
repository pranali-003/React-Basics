import React, { useState } from 'react'

const Output = (props) => {
    // const [newText,setNewText]=useState(props.text);
  return (
    <div>
        <div>
            <label htmlFor="output text">Output Text:</label>
            <br />
            <textarea style={props.styleOfText} name="output text" id="output text" rows='8' cols='50' value={props.outputText}></textarea>
        </div>
        <div>
            <label htmlFor="words" className='my-3 mx-3' >Words:</label>
            <input type="text" id='words' value ={props.wordCount}/>
            <label htmlFor="characters"  className='my-3 mx-3'>Characters:</label>
            <input type="text" id='characters'value ={props.charCount} />
        </div>
    </div>
  )
}

export default Output
