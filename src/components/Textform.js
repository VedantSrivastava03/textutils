import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUPClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase(); 
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
      // console.log("Lowercase was clicked" + text);
      let newtext = text.toLowerCase(); 
      setText(newtext);
      props.showAlert("Converted to lowercase",'success');
  }

  
  const ClearText = ()=>{
    // console.log("Clear content" + text);
    let newtext = ""; 
    setText(newtext);
    props.showAlert("Text has been cleared",'success');
}

    const handleonchange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const copyText = ()=>{

       let text = document.getElementById("myBox");
       text.select();
       document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard",'success');

    }

    const removeExSpaces = ()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showAlert("Removed extra spaces",'success');
    }

    
    const [text, setText] = useState("Enter text here");


  return (
    <>    <div className="container"style={{color:props.mode === 'dark'?'white':'black'}}>  

      <h1>{props.heading}</h1>   
<div className="mb-3" >
<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark'?'#517fd2':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary "onClick={handleUPClick}>Convert to upper case</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-2 "onClick={handleLoClick}>Convert to lower case</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-2 " onClick={ClearText}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-2 " onClick={copyText}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-2 " onClick={removeExSpaces}>Remove extra spaces</button>
<div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.split(" ").join("").length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"NOTHING TO PREVIEW"}</p>
    </div>  
</div>
</>

  )
}
