
function Question(props: any) {

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

            <div className="container">
                <a style={{ color: "black" }}> {props.studentAsked } </a>
                <span className="timeRight">{props.timeAsked}</span>
                <br />
                {props.children}
                <br />
                <a className=" reply mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                   reply
                </a>
            </div>

        </>
    )
}

export default Question;