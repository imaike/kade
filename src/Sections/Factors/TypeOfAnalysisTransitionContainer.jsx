import React from "react";
// import store from "../../store";
import { view } from "react-easy-state";
// import ResetAnalysisButton from "./ResetAnalysisButton";
// import PcaButton from "./factorSelection/ExtractPrinCompButton";
// import NoFacSelectedModal from "./factorSelection/NoFacSelectedModal";
import CentroidDropDownMenu from "./factorSelection/CentroidSelectDropdown";

class TypeOfAnalysisTransitionContainer extends React.Component {
  render() {
    // const showFactorExtractionButtons = store.getState(
    //   "showFactorExtractionButtons"
    // );

    return (
      <div>
        <div className="centroidContainer">
          <div style={{ display: "flex" }}>
            <CentroidDropDownMenu />
            {/* <NoFacSelectedModal /> */}
          </div>
          {/* <PcaButton /> */}
          {/* <ResetAnalysisButton /> */}
        </div>
      </div>
    );
  }
}

export default view(TypeOfAnalysisTransitionContainer);
