import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        console.log("Uppercase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        console.log("Lowerercase was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleclearClick=()=>{
        console.log("Clear text was Clicked"+text);
        let newText='';
        setText(newText)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }

    const handleReversed = () => {
        let splitWord = text.split("");

        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords

        setText(newText);
    };

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
        console.log("I am Copy ");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText]=useState('');

    // WRONG WAY TO CHANGE THE STATE 
    // text="new text";

    // CORRECT WAY TO CHANGE THE STATE 
    // setText("new text");

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div name="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>

            <button className="btn btn-primary mx-2 my-2" onClick={speak}> Speak</button>

            <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}> Capitalize first letter</button>

            <button className="btn btn-primary mx-2 my-2" onClick={handleReversed}> Reverse text</button>

            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy text</button>

            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>

             
    </div>
    <div className="container my-3" >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read and {0.48 * text.split(" ").length} Seconds read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
        </>
  )
}
/* WARNING-yellow */ 
             /* GREEN-success
                BLUE-primary
                DANGER-red */
0