import React, {useState} from 'react';

export default function TextForm(props){

    const [text,setText] = useState("");
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        const upperText = text.toUpperCase();
        setText(upperText)
    }
    const handleLoClick = ()=>{
        const lowerText = text.toLowerCase();
        setText(lowerText)
    }
    const handleCopy = ()=>{
        const cpyText = document.getElementById("floatingTextarea");
        cpyText.select();
        navigator.clipboard.writeText(cpyText.value);
    }
    const handleClear = ()=>{
        setText("");
    }
    return (
        <>
        <div className={`textForm container text-${props.style === "light"?"dark":"light"}`}>
            <h1 className="my-3">Analysis the Text</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.style} text-${props.style === "light"?"dark":"light"}`} value={text} id="floatingTextarea" onChange={handleOnChange} rows="8"></textarea>
                <button className='btn btn-primary m-3' onClick={handleUpClick}>Convert to Upper Case</button>
                <button className='btn btn-primary m-3' onClick={handleLoClick}>Convert to Lower Case</button>
                <button className='btn btn-primary m-3' onClick={handleCopy}>Copy to Clipboard</button>
                <button className='btn btn-primary m-3' onClick={handleClear}>Clear text</button>
            </div>
            <h2>Preview of text</h2>
            <p>{text}</p>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length-1} number of words and {text.length} number of letters</p>
        </div>
        </>
    )
}