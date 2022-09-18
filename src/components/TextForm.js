import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Upper case clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
      }
      const handleLowClick = ()=>{
        // console.log("Upper case clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
      }
      const handleClearClick = ()=>{
        // console.log("Upper case clicked" + text)
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleard", "success")
      }
      
      const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
      }
      
      const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
      }
      
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }

    const [text, setText] = useState("");
    // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read this</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text to preview here"}</p>
  </div>
</>
  )
}
