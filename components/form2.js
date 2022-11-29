import { useState } from 'react';

export function MyForm2() {
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Question: ${question} Title: ${title}`)
  }

  return (
    <form onSubmit={handleSubmit}>
            <label> Goal Title: 
      <input 
          type="text" 
          value={title}
          placeholder= "Enter Goal: "
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label for="assignee">Assignee: </label>
        <select id="assignee" name="assignee">
          <option value="All">All</option>
          <option value="Cammie">Cammie</option>
          <option value="William">William</option>
          <option value="Tanner">Tanner</option>
          <option value="Austin">Austin</option>
          <option value="Bryanmarc">Bryanmarc</option>
        </select>
       
       <label for="due date">Due date: 
        <input type="date" id="due date" name="trip-due"
            value="2022-11-28"
            min="2022-08-01" max="2022-12-31"/>
       </label>


        <label> 
          <input type="checkbox" name="urgent" value="yes"/> Mark if Urgent
        </label>

      <label>
        <input className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit" />
      </label>
    </form>
  )
}

export default MyForm2;