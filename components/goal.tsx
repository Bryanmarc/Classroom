import Task from "../components/task"
function Goal(props: any) {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

           

            <div className="mdl-cell mdl-cell--4-col">
                <div className="goalBox mdl-card mdl-shadow--2dp">
                    <div className="goalBox mdl-card__title mdl-card--expand">
                        <div className="goalContainer demo-card-square mdl-card mdl-shadow--2dp">
                            <h1 className="goalName"> {props.goalName} </h1>
                            <details>
                                <summary>
                                    Tasks required for this goal
                                </summary>
                                <div className="taskDropdown">
                                    <Task assignedTo={props.taskAssignTo} taskname={props.taskAssignName}> </Task>
                                </div>
                            </details>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                Add task
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Goal;