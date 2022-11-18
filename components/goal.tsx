import Task from "../components/task"
function Goal(props: any) {

    return (
        <>
            <div className="goalContainer demo-card-square mdl-card mdl-shadow--2dp">
                <h1 className="taskText"> {props.goalName} </h1>
                <details>  
                <summary> 
                    Tasks required for this goal
                </summary>
                    <Task assignedTo={props.taskAssignTo} taskname={props.taskAssignName}> </Task>
                </details>
            </div>



        </>
    )
}

export default Goal;