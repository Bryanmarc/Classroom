import Header from "../components/header"
import Goal from "../components/goal"
import React, { Component, FunctionComponent, useState } from 'react';
import { Modal } from  '../components/modal';
import { MyForm2 } from '../components/form2';
import { useModal } from '../components/useModal';

export default function main() {

    const [issues, setIssues] = useState();
    const { isShown, toggle } = useModal();

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
                        <React.Fragment>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={toggle}>Create a Goal</button>
                    <Modal
                        isShown={isShown}
                        hide={toggle}
                        headerText="Create Goal: "
                        modalContent={
                            <>
                                <MyForm2></MyForm2>
                            </>
                        }
                    />
                    </React.Fragment>
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

                    


