import { useState } from 'react';
import '../styles/globals.css'

export function MyForm() {
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Question: ${question} Title: ${title}`)
  }

  return (
    <form onSubmit={handleSubmit}>
            <label> Title: 
      <input 
          type="text" 
          value={title}
          placeholder= "Enter Title: "
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label> Question: 
        <input 
          type="text" 
          value={question}
          placeholder= "Enter Question: "
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label>
        <input className="submit mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit" />
      </label>
    </form>
  )
}

export default MyForm;