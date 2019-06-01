import React from "react";
// import includes from "lodash/includes";
import styled from "styled-components";
import { view, store } from "react-easy-state";
import { Button, Transition } from "semantic-ui-react";
import state from "../../../store";
import loadingsTableDataPrep from "../../Loadings/LoadingsTable/loadingsTableDataPrep";
// import FactorSelectButtonModal from "./FactorSelectButtonModal";

const localStore = store({
  rotationDegreeInput: "",
  factor1Active: false,
  factor2Active: false,
  factor3Active: false,
  factor4Active: false,
  factor5Active: false,
  factor6Active: false,
  factor7Active: false,
  factor8Active: false,
  submitButtonColor: "#d6dbe0"
});

const clearAllButtons = () => {
  localStore.factor1Active = false;
  localStore.factor2Active = false;
  localStore.factor3Active = false;
  localStore.factor4Active = false;
  localStore.factor5Active = false;
  localStore.factor6Active = false;
  localStore.factor7Active = false;
  localStore.factor8Active = false;
};

class FactorSelectionForOutputButtons extends React.Component {
  //   clearButtonHighlighting() {
  //     const btnId = state.getState("outputButtonsArray");
  //     const tempObj2 = {};
  //     for (let i = 0; i < btnId.length; i += 1) {
  //       tempObj2[`highlightfactor${btnId[i]}`] = false;
  //     }
  //     state.setState(tempObj2);
  //   }

  handleSubmit() {
    console.log("submitted");

    const numFactorsKept = state.getState("numFactorsKeptForRot");
    localStore.isActive = true;
    const projectHistoryText = `Selected ${numFactorsKept} factors for rotation`;
    const projectHistoryArray = state.getState("projectHistoryArray");
    // a shortcut to remove history when selecting a second time
    projectHistoryArray.length = 2;
    projectHistoryArray.push(projectHistoryText);
    const numFactors = state.getState("numFactorsKeptForRot");
    state.setState({
      isLoadingFactorsKept: true
    });
    setTimeout(() => {
      loadingsTableDataPrep(numFactors);
    }, 10);
    state.setState({
      // isLoadingFactorsKept: false,
      isFacSelectDisabled: true,
      shouldDisplayFacKept: true,
      showLoadingsTable: true,
      projectHistoryArray
    });

    // localStore.isActive = true;

    // archive values for undo function (ProjectHistory component)
    let archiveCounter = state.getState("archiveCounter");
    const factorMatrix = state.getState("factorMatrix");
    archiveCounter += 1;
    const archiveName = `facMatrixArc${archiveCounter}`;
    state.setState({
      archiveCounter
    });
    sessionStorage.setItem(archiveName, JSON.stringify(factorMatrix));
  }

  //   initializeButtonActiveState(btnId) {
  //     // set all highlighting to false (not active)
  //     const tempObj = {};
  //     for (let i = 0; i < btnId.length; i += 1) {
  //       tempObj[`highlightfactor${btnId[i]}`] = false;
  //     }
  //     state.setState(tempObj);
  //   }

  handleOnclick(event) {
    const value = event.target.value;
    const factor = event.target.id;
    clearAllButtons();
    console.log(value);
    localStore[`${factor}Active`] = true;

    const userSelectedRotFactors = [];
    const abFactors = [];

    state.setState({
      numFactorsKeptForRot: value,
      shouldDisplayFacKept: false,
      // hide section 5
      showLoadingsTable: false,
      // hide section 6
      showOutputFactorSelection: false,
      shouldDisplayFactorVizOptions: false,
      showFactorCorrelationsTable: false,
      showStandardErrorsDifferences: false,
      showFactorCharacteristicsTable: false,
      showDownloadOutputButtons: false,
      displayFactorVisualizations: false,
      userSelectedFactors: [],
      // reset bipolar
      bipolarDisabled: false,
      bipolarSplitCount: 0,
      // reset manual rotation
      shouldShowJudgeRotDiv: false,
      judgeButtonActive: false,
      showScatterPlotTableDiv: false,
      abFactors,
      highlightRotfactor1: false,
      highlightRotfactor2: false,
      highlightRotfactor3: false,
      highlightRotfactor4: false,
      highlightRotfactor5: false,
      highlightRotfactor6: false,
      highlightRotfactor7: false,
      highlightRotfactor8: false,
      userSelectedRotFactors,
      // reset varimax
      varimaxButtonDisabled: false,
      varimaxButtonText: "Varimax Rotation",
      varimaxButtonActive: false,
      isRotationButtonGreen: true
    });
  }

  render() {
    const btnId = [1, 2, 3, 4, 5, 6, 7, 8];
    const isCentroid = state.getState("activeCentroidFactorsButton");
    const isFacSelectDisabled = state.getState("isFacSelectDisabled");

    if (isCentroid) {
      const numCentroidFactors = state.getState("numCentroidFactors");
      btnId.length = +numCentroidFactors;
    }

    // const showOutputFactorSelection = state.getState(
    //   "showOutputFactorSelection"
    // );

    const showKeepFacForRotButton = state.getState("showKeepFacForRotButton");
    if (showKeepFacForRotButton) {
      return (
        <React.Fragment>
          <StyledWrapper>
            {btnId.map(item => (
              <Button
                key={`f${item}`}
                toggle
                className="wrapper1"
                value={item}
                active={localStore[`factor${item}Active`]}
                disabled={isFacSelectDisabled}
                onClick={this.handleOnclick.bind(this)}
                id={`factor${item}`}
              >
                {item}
              </Button>
            ))}
          </StyledWrapper>
        </React.Fragment>
      );
    } 
      return null;
    
  }
}
export default view(FactorSelectionForOutputButtons);

const StyledWrapper = styled.div`
  .wrapper1 {
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 black;

    &:hover {
      border: 1px solid black;
      box-shadow: 0 2px 2px 0 black;
    }

    &:active {
      box-shadow: 0 0 1px 0 black inset;
    }
  }
`;

const DropdownText = styled.div`
  margin-right: 20px;
  margin-top: 10px;
  font-size: 22px;
  display: inline-block;
`;

/*
<Transition visible animation="fade" duration={1000}>
</Transition>
*/
