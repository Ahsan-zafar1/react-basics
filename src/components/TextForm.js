import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    // Function to convert text to Uppercase
    const handleUpClick = () => {
        if (text.length === 0) return; // Prevent action if text is empty
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase!", "success");
    };

    // Function to convert text to Lowercase
    const handleLoweCase = () => {
        if (text.length === 0) return; // Prevent action if text is empty
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase!", "success");
    };

    // Function to clear text
    const handleClearText = () => {
        if (text.length === 0) return; // Prevent action if text is empty
        setText("");
        props.showAlert("Text cleared", "success");
    };

    // Function to copy text
    const copyToClipboard = () => {
        if (text.length === 0) return; // Prevent action if text is empty
        let textBox = document.getElementById("mybox");
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
        props.showAlert("Text copied", "success");
    };

    // Function to remove extra spaces
    const removeExtraSpace = () => {
        if (text.length === 0) return; // Prevent action if text is empty
        setText(text.trim().replace(/\s+/g, '-'));
        props.showAlert("Extra spaces removed", "success");
    };

    // Handle text input changes
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const wordCount = text.trim().split(" ").filter(Boolean).length;

    return (
        <div className={`container`} data-bs-theme={props.mode}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="mybox"
                    rows="8"
                    placeholder="Enter your text"
                    value={text}
                    onChange={handleOnChange}
                />
            </div>
            <div className='d-flex gap-2'>
                <button
                    className="btn btn-primary"
                    onClick={handleUpClick}
                    disabled={text.length === 0}
                >
                    Convert to UpperCase
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleLoweCase}
                    disabled={text.length === 0}
                >
                    Convert to LowerCase
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleClearText}
                    disabled={text.length === 0}
                >
                    Clear Text
                </button>
                <button
                    className="btn btn-primary"
                    onClick={copyToClipboard}
                    disabled={text.length === 0}
                >
                    Copy Text
                </button>
                <button
                    className="btn btn-primary"
                    onClick={removeExtraSpace}
                    disabled={text.length === 0}
                >
                    Remove Extra Spaces
                </button>
            </div>

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2 className="my-4">Word Counter</h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{0.008 * wordCount} minutes to read</p>
                <p>{text}</p>
            </div>
        </div>
    );
}
