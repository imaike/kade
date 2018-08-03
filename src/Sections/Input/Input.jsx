import React, { Component } from "react";
import { view } from "react-easy-state";
import styled, { keyframes } from "styled-components";
import Tabs from "react-simpletabs";
import CsvStatementCard from "./CSV/CsvStatementCard";

class Input extends Component {
  render() {
    return (
      <MainContent>
        <Tabs>
          <Tabs.Panel title="CSV">
            <DataWindow>
              <h2 style={{ fontFamily: "Helvetica" }}>
                Upload both a statements text file and Q sorts csv file.
              </h2>
              <CsvStatementCard />
            </DataWindow>
          </Tabs.Panel>
          <Tabs.Panel title="Excel">
            <h2>Content #2 here</h2>
          </Tabs.Panel>
          <Tabs.Panel title="JSON">
            <h2>Content #3 here</h2>
          </Tabs.Panel>
          <Tabs.Panel title="PQMethod">
            <h2>Content #4 here</h2>
          </Tabs.Panel>
          <Tabs.Panel title="Demo Data">
            <h2>Content #5 here</h2>
          </Tabs.Panel>
        </Tabs>
      </MainContent>
    );
  }
}

export default view(Input);

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
  /* display: grid;
  grid-template-columns: 190px 190px 190px 190px;
  grid-template-rows: 50px 125px 125px 200px 200px 50px;
  grid-template-areas:
    "row1 row1 row1 row1"
    "titleRow titleRow titleRow titleRow"
    "weblinkRow weblinkRow weblinkRow weblinkRow"
    "linkboxRow1 linkboxRow1 linkboxRow1 linkboxRow1"
    "linkboxRow2 linkboxRow2 linkboxRow2 linkboxRow2";
  justify-items: center;
  align-items: center; */
  background-color: #d3d3d3;
  height: 100%;
  width: 100%;
  visibility: ${props => (props.view ? "hidden" : "visible")};
  animation: ${props => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;

  .tabs-menu {
    display: grid;
    grid-template-columns: 120px 120px 150px 150px 180px 170px;
    background-color: #d3d3d3;
    padding-left: 20px !important;
    height: 45px;
    align-items: end;
    list-style: none;
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    font-size: 25px;
  }

  .tabs-menu-item {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-right: 20px;
    background-color: #d3d3d3;
    height: 80%;
  }

  .tabs-menu-item a {
    cursor: pointer;
    color: black;
  }

  .tabs-menu-item:not(.is-active):hover,
  .tabs-menu-item.is-active {
    color: #3498db;
    background-color: white;
  }

  .tab-panel {
    padding: 10px 50px;
    background-color: white;
  }
`;

const DataWindow = styled.div`
  height: 100%;
  background-color: white;
`;

// const TopSection = styled.div`
//   background-color: #d3d3d3;
// `;
