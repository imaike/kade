import styled from "styled-components";
import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import store from "../../store";

export default class ResetAnalysisButton extends Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    let numFactors = store.getState("numCentroidFactors");
    if (isNaN(numFactors)) {
      console.log("try again");
      this.setState({
        modalOpen: true
      });
    } else {
      this.setState({
        modalOpen: true
      });
    }
  };

  handleClose = () =>
    this.setState({
      modalOpen: false
    });

  resetAnalysis = () => {
    let projectHistoryArray = store.getState("projectHistoryArray");
    let newProjectHistoryArray = [projectHistoryArray.shift()];
    let userSelectedRotFactors = [];
    let abFactors = [];

    store.setState({
      projectHistoryArray: newProjectHistoryArray,
      // reset num factors kept for rotation - so warning modal triggers on no selected
      numFactorsKeptForRot: undefined,
      // hide section 3
      showUnrotatedFactorTable: false,
      showEigenvaluesTable: false,
      showScreePlot: false,
      disabledPcaButton: false,
      activePcaButton: false,
      activeCentroidFactorsButton: false,
      disabledCentroidFactorButton: false,
      // pcaButtonText: "Principal Components",
      // calculatingPca: false

      // factor select re-enable
      isFacSelectDisabled: false,

      // hide section 4
      shouldDisplayFacKept: false,
      showKeepFacForRotButton: false,
      varimaxButtonDisabled: false,
      varimaxButtonText: "Varimax Rotation",
      varimaxButtonActive: false,

      // reset manual rotation
      shouldShowJudgeRotDiv: false,
      judgeButtonActive: false,
      showScatterPlotTableDiv: false,
      abFactors: abFactors,
      highlightRotfactor1: false,
      highlightRotfactor2: false,
      highlightRotfactor3: false,
      highlightRotfactor4: false,
      highlightRotfactor5: false,
      highlightRotfactor6: false,
      highlightRotfactor7: false,
      highlightRotfactor8: false,
      userSelectedRotFactors: userSelectedRotFactors,

      // bipolar
      bipolarDisabled: false,
      bipolarSplitCount: 0,

      // hide section 5
      showLoadingsTable: false,

      // hide section 6
      showOutputFactorSelection: false,
      shouldDisplayFactorVizOptions: false,
      showFactorCorrelationsTable: false,
      showStandardErrorsDifferences: false,
      showFactorCharacteristicsTable: false,
      showDownloadOutputButtons: false,
      userSelectedFactors: [],
      displayFactorVisualizations: false,

      isLoadingsButtonGreen: false,
      isRotationButtonGreen: false,
      isFactorsButtonGreen: false,
      sendDataToOutputButtonColor: "#d6dbe0"
    });
    this.handleClose();
  };

  render() {
    const style = {
      alignSelf: "flexEnd"
    };

    return (
      <Modal
        trigger={
          <StyledWrapper>
            <Button
              id="resetAnalysisButton"
              size={"small"}
              className="wrapper1"
              style={style}
              onClick={this.handleOpen}
            >
              Reset Analysis
            </Button>
          </StyledWrapper>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header content="Reset Analysis" />
        <Modal.Content>
          <h2>This will remove the current analysis and cannot be reversed.</h2>
          <h2> Are you sure you want to reset?</h2>
        </Modal.Content>
        <Modal.Actions>
          <div style={{ display: "flex" }}>
            <Button
              size={"big"}
              style={{ alignSelf: "flexStart" }}
              color="green"
              onClick={this.handleClose}
              inverted
            >
              No, Go back.
            </Button>
            <Button
              id="resetAnalysisModalGotItButton"
              size={"big"}
              style={{ alignSelf: "flexEnd", marginLeft: 220 }}
              color="red"
              onClick={this.resetAnalysis}
              inverted
            >
              Yes, reset the analysis.
            </Button>
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

const StyledWrapper = styled.div`
  .wrapper1 {
    border: 1px solid black;
    box-shadow: 0 2px 2px 0 black;
    margin-left: 103px;

    &:hover {
      border: 1px solid black;
      box-shadow: 0 2px 2px 0 black;
    }

    &:active {
      box-shadow: 0 0 1px 0 black inset;
      margin-left: 103px;
      margin-top: 3px;
    }
  }
`;
