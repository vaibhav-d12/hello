import React, {useState} from "react";

export default function TextForm(props){
    const handleUpClick=() =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let oldText = text.toLowerCase();
        setText(oldText);
    }

    const handleCopy = () =>{
        var CText = document.getElementById("myBox");
        CText.select();
        alert("Text Copied : " + CText.value);
        navigator.clipboard.writeText(CText.value);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const[text,setText] = useState('');
    return(
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
            </div>
            <button disabled={text.length===0} className ="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-success mx-" value={text} onClick={handleCopy} >CopyText</button>
        </div>
        <div className="container my-2">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} char</p>
            <p>{0.008 * text.split(" ").filter((words) =>{return words.length!==0}).length} Minutes read </p>
            <h2><strong>Preview</strong></h2>
            <p>{text}</p>
        </div>
        </>
    ) 
}
//onchange is essential because of this we can able to write
// for 1 min system can read 125 words(for slow system) so for 1 word it takes 0.008 minutes per word.