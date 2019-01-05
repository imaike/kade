import styled from "styled-components";
import React, { Component } from "react";
import { view, store } from "react-easy-state";
import { ToastContainer, toast, Slide } from "react-toastify";
import state from "../../../store";
import convertJSONToData from "./convertJSONToData";

const {dialog} = require("electron").remote;
const fs = require("fs");

const localStore = store({
    buttonColor: "#d6dbe0"
});

function notifyWarning() {
    toast.warn("Select Participant Id to complete JSON import", {
        autoClose: false
    });
}

const handleClick = () => {
    try {
        dialog.showOpenDialog(
            {
                properties: ["openFile"],
                filters: [
                    {
                        name: "JSON",
                        extensions: ["json", "JSON"]
                    }
                ]
            },
            files => {
                if (files !== undefined) {
                    const fileName = files[0];
                    fs.readFile(fileName, "utf8", (err, data) => {
                        const results = JSON.parse(data);

                        // convert from JSON to array
                        const resultsArray = [];
                        const resultsKeys = Object.keys(results);
                        for (let k = 0; k < resultsKeys.length; k += 1) {
                            resultsArray.push(results[resultsKeys[k]]);
                        }

                        // todo - this is the source of the extra brackets
                        const csvData = convertJSONToData(results);
                        const columnHeaders = csvData[0][0];

                        state.setState({
                            jsonParticipantId: columnHeaders,
                            showJsonParticipantIdDropdown: true,
                            csvData,
                            jsonObj: results,
                            dataOrigin: "json",
                            areQsortsLoaded: true,
                            isInputButtonGreen: state.getState("areStatementsLoaded"),
                            loadJsonQsortsButtonColor: "rgba(144,	238,	144, .6)"
                        });
                        localStore.buttonColor = "rgba(144,	238,	144, .6)";
                    });
                    notifyWarning();
                }
            }
        );
    } catch (error) {
        state.setState({
            csvErrorMessage1: error.message,
            showCsvErrorModal: true
        });
    }
};

class LoadTxtStatementFile extends Component {
    render() {
        const loadJsonQsortsButtonColor = state.getState("loadJsonQsortsButtonColor");
        localStore.buttonColor = loadJsonQsortsButtonColor;
        return (
            <React.Fragment>
              <LoadTxtButton buttonColor={ localStore.buttonColor } onClick={ () => handleClick() }>
                <p>Load JSON File</p>
              </LoadTxtButton>
              <ToastContainer transition={ Slide } />
            </React.Fragment>
            );
    }
}

export default view(LoadTxtStatementFile);

const LoadTxtButton = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${props => props.buttonColor};
  height: 60px;
  width: 240px;
  border: 1px solid black;
  text-align: center;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
  border-radius: 4px;
  margin-right: 3px;
  margin-top: 15px;
  box-shadow: 0 2px 2px 0 black;

  &:hover {
    /* background-color: #abafb3; */
    font-weight: 900;
  }

  &:active {
    box-shadow: 0 0 1px 0 black inset;
    margin-left: 3px;
  }
`;
