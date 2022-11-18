import Task from "../components/task"
import Header from "../components/header"
import Question from "../components/question"
export default function main() {
    return (
        <>
            <Header pageType="Dashboard">
            </Header>


            <div style={{ display: "flex", flex: '1'}}>
                <div className="taskTitle">
                <h4 className="h4"> Your assigned tasks: </h4>
  
                <Task assignedTo="Cam, William" taskname="Create interface for class">
                fix .tsx file to include the class interface
                </Task>

                <Task assignedTo="William" taskname="Create the webpage">
                Add compabatibilty to this feature
                </Task>
 
            </div>

                <div style={{ flex: '1' }}></div>

                <div className="questionTitle" >
                    <h4 className=""> Class Question Board </h4>
                    <button className="button"> Ask a Question</button>
                <div className="question">
                    <Question timeAsked= "11:46am" studentAsked= "Tanner">
                        When is assignment 14 due? 
                    </Question>

                    <Question timeAsked="3:32pm" studentAsked = "Bryanmarc">
                        What do I need to bring to class today?
                    </Question>
                </div>
                </div>
            </div>
        </>
    )
}
