import { useState } from 'react';
import ReactDOM from 'react-dom/client';

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
          placeholder= "enter title:"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label> Question:
        <input 
          type="text" 
          value={question}
          placeholder= "enter question:"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default MyForm;