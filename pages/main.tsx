import Task from "../components/task"
import Header from "../components/header"
import Question from "../components/question"
import DatabaseHandler from "../util/DatabaseClient";
import { useState } from "react";
export default function main({top_5_issues}: any) {

    const [issues, setIssues] = useState(JSON.parse(top_5_issues));

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
                    <button className="button"> Ask a Question</button> { /* TODO: Make button pop up a modal to fill in a form for adding a question. */ }
                    <div className="question">
                        { issues.map((issue: any) => {
                            return (
                                <Question key={issue.id} title={issue.title} timeAsked={issue.time_posted} studentAsked={issue.author_id}>
                                    {issue.content}
                                </Question>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const top_5_issues = await DatabaseHandler.GetTop5MostRecentIssues();
    console.log("Successfully fetched Data");
    return { props: { top_5_issues }}
  }
