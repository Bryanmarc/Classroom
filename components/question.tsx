
function Question(props: any) {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

            <div className="container">
                <a  className="sName"> <strong> {props.studentAsked } </strong> </a>
                <span className="timeRight">{props.timeAsked}</span>
                <br />
                {props.children}
                <form>
                    <input className="replyBar" type="text" placeholder="send a reply?"/> 
                    <a className=" reply mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                   <button>reply</button>
                </a>
                </form>
                <br />
            </div>

        </>
    )
}

export default Question;