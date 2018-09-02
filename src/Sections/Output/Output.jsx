import React, { Component } from "react";
import { view, store } from "react-easy-state";
import styled, { keyframes } from "styled-components";
import { Tab } from "semantic-ui-react";
import state from "../../store";
import FactorVizOptions from "./FactorViz/FactorVizOptions";
import FactorVizDispatch from "./FactorVisualizations/FactorVizDispatch";
import DownloadResultsButtons from "./DownloadResultsButtons/DownloadResultsButtons";
import NoLoadingsFlaggedWarningModal from "../Loadings/LoadingsTable/NoLoadingsFlaggedWarningModal";
import DisplayVisualizationsButtons from "./DisplayVisualizationsButtons/DisplayVisualizationsButtons";
import FactorSelectionForOutputButtons from "./FactorSelectionForOutput/FactorSelectionForOutputButtons";
import OutputFactorTablesTransitionContainer from "./OutputFactorTablesTransitionContainer";
import MultipleFactorsFlaggedWarningModal from "./MultipleFactorsFlaggedWarningModal";
import RefreshFactorVizButton from "./FactorVisualizations/RefreshFactorVizButton";

// import styled from "styled-components";


const panes = [
  {
    menuItem: "Options",
    render: () => (
      <Tab.Pane>
        <DataWindow1>
        <FactorSelectionForOutputButtons />
        <DownloadResultsButtons />
        <NoLoadingsFlaggedWarningModal />
        <MultipleFactorsFlaggedWarningModal />
        <DisplayVisualizationsButtons />
        <FactorVizDispatch /> 
        </DataWindow1>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Factor Tables",
    render: () => (
      <Tab.Pane>
        <DataWindow2>
        <OutputFactorTablesTransitionContainer />
        </DataWindow2>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Factor Visualization Options",
    render: () => (
      <Tab.Pane>
        <DataWindow2>
        <FactorVizOptions />
                <RefreshFactorVizButton />
        </DataWindow2>
      </Tab.Pane>
    )
  }
];

const localStore = store({
  activeIndex: 0
});


class Output extends Component {

  handleTabChange(e, {activeIndex}) {
    localStore.activeIndex = activeIndex;
  }

  render() {
    const {activeIndex} = localStore;

    const shouldDisplayFactorViz = state.getState(
      "displayFactorVisualizations"
    );
    const showStandardErrorsDifferences = state.getState(
      "showStandardErrorsDifferences"
    );

    const showOutputFactorSelection = state.getState(
      "showOutputFactorSelection"
    );

    // if (showOutputFactorSelection) {
      return (
        <MainContent>
        <Tab style={ { width: "100%", height: "100%" } } panes={ panes } activeIndex={ activeIndex } onTabChange={ this.handleTabChange } />
        </MainContent>
      );
 //   }
    // return (
    //   <DefaultMessage>
    //     No output. Click "Send Table Data to Output" in the "Loadings" section.
    //   </DefaultMessage>
    // );
  }
}

export default view(Output);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  /* grid-template-areas:
    "row1 row1 row1 row1"
    "titleRow titleRow titleRow titleRow"
    "weblinkRow weblinkRow weblinkRow weblinkRow"
    "linkboxRow1 linkboxRow1 linkboxRow1 linkboxRow1"
    "linkboxRow2 linkboxRow2 linkboxRow2 linkboxRow2"; */
  overflow: scroll;
  padding: 5px;
  padding-top: 15px;
  padding-left: 15px;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;

  font-family: Helvetica, sans-serif;
  font-size: 18px;
  background-color: white;

  width: calc(100vw - 153px);
  box-sizing: border-box;
  max-height: calc(100vh - 22px);
  overflow: auto;
`;

const DefaultMessage = styled.div`
  margin-top: 50px;
  font-size: 22px;
  margin-left: 20px;
`;



const DataWindow1 = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 1fr;
  min-height: 600px;
  background-color: white;
  max-width: 1197;
`;


const DataWindow2 = styled.div`
  min-height: 600px;
  background-color: white;
  overflow: scroll;
  padding: 5px;
  padding-top: 5px;
  padding-left: 5px;
  width: calc(100vw - 208px);
  box-sizing: border-box;
  max-height: calc(100vh - 22px);
  overflow: auto;
`;

