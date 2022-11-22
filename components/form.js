import { useState } from 'react';
import ReactDOM from 'react-dom/client';

export function MyForm() {
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Question: ${question} Title: ${title}`)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "title": title,
      "content": question,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("./api/1.0/issues/Add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // TODO: Add in a response to the user when the form is submitted successfully
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