import Header from "../components/header"
import Goal from "../components/goal"
export default function main() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
            <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            
            <Header pageType="Taskboard">
            </Header>
                      
            <div className="taskBoard">
                <div className="taskPage">
                    
                    <h4 className="headerText"> Tasks Posted for Group 
                        <br/>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        create Goal
                        </button>
                    </h4>


                    <div /* put items next to each other in a row */ className="mdl-grid">
                        <Goal goalName="Add compatibility for IOS devices" taskAssignTo="William" taskAssignName="Create Iphone"> </Goal>
                        <Goal goalName="Connect front-end to back-end" taskAssignTo="Tanner and Cammie" taskAssignName="Create back-emd for loops"> </Goal>    

                    </div>
                </div>
            </div>
        </>
    )
}

                    


