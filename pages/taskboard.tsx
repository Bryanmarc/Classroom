import Header from "../components/header"
import Goal from "../components/goal"
export default function main() {
    return (
        <>
            <Header pageType="Taskboard">
            </Header>

            <div style={{ display: "flex", flex: '1' }}>
                <div style={{ backgroundColor: "gray", width: '350px', marginLeft: '10px', marginBottom: '5px', gridArea: "auto", alignSelf: "flex-start" }}>
                    <h4 style={{ textAlign: "center" }}> Your assigned tasks: </h4>

                    <Goal goalName="Add compatibility for IOS devices" taskAssignTo="William" taskAssignName="Create Iphone"> </Goal>
                    <Goal goalName="Add compatibilty for Floridian devices"> </Goal>

                </div>
            </div>



        </>
    )
}