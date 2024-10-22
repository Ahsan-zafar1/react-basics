import React, {useState} from 'react'

export default function TextForm(props) {
   const [text, setText] = useState("");
    // Function to convert text to Uppercase
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase!", "success");
    };

    // Function to convert text to Lowercase
    const handleLoweCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase!", "success");
    };
    const handleClearText = () => {
        setText("");
        props.showAlert("Text are cleared", "success");
        
    };


    // Function to count words
    const wordCount = text.trim().split(" ").filter(Boolean).length;


    // Function to copy text
    const copyToClipboard = () => {
        let text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied", "success");
    };



    // Function to remove extra spaces
    const removeExtraSpace = () => {
        setText(text.trim().replace(/\s+/g, '-'));
    };
    
    // Handling changes in the input
    const handleOnChange = (event) => {
        setText(event.target.value);
    };


  return (
    <div className={` container` } data-bs-theme={props.mode}>
        <h1>{props.heading}</h1>
        <div className="mb-3">  
            <textarea 
                className="form-control" 
                id="mybox" 
                rows="8" 
                placeholder='Enter your text'
                value={text} 
                onChange={handleOnChange}
            >
            </textarea> 
        </div>
        <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLoweCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={copyToClipboard}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={removeExtraSpace}>Remove extra spaces</button>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h2 className='my-4'>Word Counter</h2>
            <p>{wordCount} words and {text.length} Character</p>
            <p>{0.008 * wordCount } time to read </p>
            <p>{text}</p>
        </div>
    </div>
  )
}

