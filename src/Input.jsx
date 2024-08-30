import React, { useState } from 'react';
import Output from './Output';

const Input = () => {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [showOutput, setShowOutput] = useState(false); 

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const changeToUpperCase = () => {
    setText((prevText) => prevText.toUpperCase());
    setShowOutput(true);
  };

  const changeToLowerCase = () => {
    setText((prevText) => prevText.toLowerCase());
    setShowOutput(true);
  };

  const capitalizeSentence = () => {
    setText((prevText) => prevText.charAt(0).toUpperCase() + prevText.slice(1));
    setShowOutput(true);
  };

  const capitalizeWords = () => {
    const words = text.split(" ");
    setText(
      words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    );
    setShowOutput(true);
  };

  const clearWords = () => {
    setText('');
    setShowOutput(true);
    
  };

  const toggleBoldText = () => {
    setIsBold(!isBold);
    setShowOutput(true);
  };

  const toggleItalicText = () => {
    setIsItalic(!isItalic);
    setShowOutput(true);
  };

  const toggleUnderlineText = () => {
    setIsUnderline(!isUnderline);
    setShowOutput(true);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  // Styling object
  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
  };
 
  return (
    <div>
      <div>
        <label htmlFor="input-text">Input Text:</label>
        <br />
        <textarea 
          name="input-text" 
          id="input-text" 
          placeholder="Enter your Text here" 
          rows="8" 
          cols="46" 
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="words" className='my-3 mx-3'>Words:</label>
        <input type="text" id="words" value={wordCount} readOnly />
        <label htmlFor="characters" className='my-3 mx-3'>Characters:</label>
        <input type="text" id="characters" value={charCount} readOnly />
      </div>
      <div>
        <button onClick={changeToUpperCase} className="btn btn-outline-success my-3 mx-2">Uppercase</button>
        <button onClick={changeToLowerCase} className="btn btn-outline-success my-3 mx-2">Lowercase</button>
        <button onClick={capitalizeSentence} className="btn btn-outline-success my-3 mx-2">Capitalize Sentences</button>
        <button onClick={capitalizeWords} className="btn btn-outline-success my-3 mx-2">Capitalize Words</button>
        <button onClick={clearWords} className="btn btn-dark my-3 mx-2">Clear</button>
      </div>
      <div>
        <button onClick={toggleBoldText} className="btn btn-outline-dark  my-3 mx-2">B</button>
        <button onClick={toggleItalicText} className="btn btn-outline-dark  my-3 mx-2">I</button>
        <button onClick={toggleUnderlineText} className="btn btn-outline-dark  my-3 mx-2">U</button>
      </div>
      { showOutput ? <Output 
      outputText={text} 
      styleOfText={textStyle}
      wordCount={wordCount}
      charCount={charCount} /> 
      : <Output/>}
    </div>
  );
};

export default Input;
