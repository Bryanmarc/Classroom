
function Task(props: any) {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

            <div className=" taskPage goalBox demo-card-square mdl-card mdl-shadow--2dp">
                <a className="note"> Urgent </a>
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">{props.taskname}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {props.children}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        {props.assignedTo}
                    </a>
                    <a className="mdl-card__supporting-text"> Due date: </a>
                </div>
             </div>
               
        </>
    )
}

export default Task;