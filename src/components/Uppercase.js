import React, {useState} from 'react'

function Uppercase() {
    let [text, setText] = useState('Enter Something')
    let [isSubmitted, isSubmittedT] = useState(false)

    let clickUp = () => {
        setText(text.toUpperCase())
    }
    
    let handleChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
    <div className="container">
        <textarea name="mytextares" value={text} onChange={handleChange} id="justbox" cols="30" rows="10"></textarea>
        <button className="mybutton" onClick={clickUp}>Click Me!</button>
    </div>
    </>
  )
}

export default Uppercase;


