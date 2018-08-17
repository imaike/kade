import React from "react";
import styled from "styled-components";
// import "./UserSelectionSwitch.css";
import store from "../../../store";

class UserSelectionSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: this.props.toggle
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.stopPropagation();
    this.setState({
      toggle: !this.state.toggle
    });
    const stateFrag = {};
    const key = this.props.value;
    const stateValue = !this.state.toggle;
    stateFrag[key] = stateValue;
    store.setState(stateFrag);
  }

  render() {
    return (
      <div style={{ marginTop: 5 }}>
        <switchLabel htmlFor="switchCheckbox">
          <input
            id="switchCheckbox"
            type="checkbox"
            name={this.props.name}
            defaultChecked={this.state.toggle}
            onChange={e => this.toggle(e)}
          />
          <span key={this.props.name} style={{ width: 100, marginTop: 6 }}>
            <span>No</span>
            <span>YES</span>
            <a>.</a>
          </span>
        </switchLabel>
      </div>
    );
  }
}

export default UserSelectionSwitch;

const switchLabel = styled.label`
  .switch-toggle a,
.switch-light span span {
  display: none;
}

.switchText {
  margin: 10px;
  font-size: 20px;
  height: 30px;
}

.switchDiv {
  display: flex;
  margin-top: 1px;
}

/* We can't test for a specific feature,
 * so we only target browsers with support for media queries.
 */
@media only screen {
  /* Checkbox
 */
  .switch-light {
    position: relative;
    display: block;
    /* simulate default browser focus outlines on the switch,
   * when the inputs are focused.
   */
  }
  .switch-light::after {
    clear: both;
    content: "";
    display: table;
  }
  .switch-light *,
  .switch-light *:before,
  .switch-light *:after {
    box-sizing: border-box;
  }
  .switch-light a {
    display: block;
    transition: all 0.2s ease-out;
  }
  .switch-light label,
  .switch-light > span {
    /* breathing room for bootstrap/foundation classes.
     */
    line-height: 2em;
  }
  .switch-light input:focus ~ span a,
  .switch-light input:focus + label {
    outline-width: 2px;
    outline-style: solid;
    outline-color: Highlight;
    /* Chrome/Opera gets its native focus styles.
     */
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 0) {
  .switch-light input:focus ~ span a,
  .switch-light input:focus + label {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
}

@media only screen {
  /* don't hide the input from screen-readers and keyboard access
 */
  .switch-light input {
    position: absolute;
    opacity: 0;
    z-index: 3;
  }
  .switch-light input:checked ~ span a {
    right: 0%;
  }
  /* inherit from label
 */
  .switch-light strong {
    font-weight: inherit;
  }
  .switch-light > span {
    position: relative;
    overflow: hidden;
    display: block;
    min-height: 1em;
    /* overwrite 3rd party classes padding
   * eg. bootstrap .alert
   */
    padding: 5px;
    text-align: left;
  }
  .switch-light span span {
    position: relative;
    z-index: 2;
    display: block;
    float: left;
    width: 50%;
    text-align: center;
    user-select: none;
  }
  .switch-light a {
    position: absolute;
    right: 50%;
    top: 0;
    z-index: 1;
    display: block;
    width: 50%;
    height: 100%;
    padding: 0;
  }
  /* bootstrap 4 tweaks
*/
  .switch-light.row {
    display: flex;
  }
  .switch-light .alert-light {
    color: #333;
  }
  /* Radio Switch
 */
  .switch-toggle {
    position: relative;
    display: block;
    /* simulate default browser focus outlines on the switch,
   * when the inputs are focused.
   */
    /* For callout panels in foundation
  */
    padding: 0 !important;
    /* 2 items
   */
    /* 3 items
   */
    /* 4 items
   */
    /* 5 items
   */
    /* 6 items
   */
  }
  .switch-toggle::after {
    clear: both;
    content: "";
    display: table;
  }
  .switch-toggle *,
  .switch-toggle *:before,
  .switch-toggle *:after {
    box-sizing: border-box;
  }
  .switch-toggle a {
    display: block;
    transition: all 0.2s ease-out;
  }
  .switch-toggle label,
  .switch-toggle > span {
    /* breathing room for bootstrap/foundation classes.
     */
    line-height: 2em;
  }
  .switch-toggle input:focus ~ span a,
  .switch-toggle input:focus + label {
    outline-width: 2px;
    outline-style: solid;
    outline-color: Highlight;
    /* Chrome/Opera gets its native focus styles.
     */
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 0) {
  .switch-toggle input:focus ~ span a,
  .switch-toggle input:focus + label {
    outline-color: -webkit-focus-ring-color;
    outline-style: auto;
  }
}

@media only screen {
  .switch-toggle input {
    position: absolute;
    left: 0;
    opacity: 0;
  }
  .switch-toggle input + label {
    position: relative;
    z-index: 2;
    display: block;
    float: left;
    padding: 0 0.5em;
    margin: 0;
    text-align: center;
  }
  .switch-toggle a {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    z-index: 1;
    width: 10px;
    height: 100%;
  }
  .switch-toggle label:nth-child(2):nth-last-child(4),
  .switch-toggle label:nth-child(2):nth-last-child(4) ~ label,
  .switch-toggle label:nth-child(2):nth-last-child(4) ~ a {
    width: 50%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(4)
    ~ input:checked:nth-child(3)
    + label
    ~ a {
    left: 50%;
  }
  .switch-toggle label:nth-child(2):nth-last-child(6),
  .switch-toggle label:nth-child(2):nth-last-child(6) ~ label,
  .switch-toggle label:nth-child(2):nth-last-child(6) ~ a {
    width: 33.33%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(6)
    ~ input:checked:nth-child(3)
    + label
    ~ a {
    left: 33.33%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(6)
    ~ input:checked:nth-child(5)
    + label
    ~ a {
    left: 66.66%;
  }
  .switch-toggle label:nth-child(2):nth-last-child(8),
  .switch-toggle label:nth-child(2):nth-last-child(8) ~ label,
  .switch-toggle label:nth-child(2):nth-last-child(8) ~ a {
    width: 25%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(8)
    ~ input:checked:nth-child(3)
    + label
    ~ a {
    left: 25%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(8)
    ~ input:checked:nth-child(5)
    + label
    ~ a {
    left: 50%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(8)
    ~ input:checked:nth-child(7)
    + label
    ~ a {
    left: 75%;
  }
  .switch-toggle label:nth-child(2):nth-last-child(10),
  .switch-toggle label:nth-child(2):nth-last-child(10) ~ label,
  .switch-toggle label:nth-child(2):nth-last-child(10) ~ a {
    width: 20%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(10)
    ~ input:checked:nth-child(3)
    + label
    ~ a {
    left: 20%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(10)
    ~ input:checked:nth-child(5)
    + label
    ~ a {
    left: 40%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(10)
    ~ input:checked:nth-child(7)
    + label
    ~ a {
    left: 60%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(10)
    ~ input:checked:nth-child(9)
    + label
    ~ a {
    left: 80%;
  }
  .switch-toggle label:nth-child(2):nth-last-child(12),
  .switch-toggle label:nth-child(2):nth-last-child(12) ~ label,
  .switch-toggle label:nth-child(2):nth-last-child(12) ~ a {
    width: 16.6%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(12)
    ~ input:checked:nth-child(3)
    + label
    ~ a {
    left: 16.6%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(12)
    ~ input:checked:nth-child(5)
    + label
    ~ a {
    left: 33.2%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(12)
    ~ input:checked:nth-child(7)
    + label
    ~ a {
    left: 49.8%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(12)
    ~ input:checked:nth-child(9)
    + label
    ~ a {
    left: 66.4%;
  }
  .switch-toggle
    label:nth-child(2):nth-last-child(12)
    ~ input:checked:nth-child(11)
    + label
    ~ a {
    left: 83%;
  }
  /* Candy Theme
 * Based on the "Sort Switches / Toggles (PSD)" by Ormal Clarck
 * http://www.premiumpixels.com/freebies/sort-switches-toggles-psd/
 */
  .switch-toggle.switch-candy,
  .switch-light.switch-candy > span {
    background-color: #2d3035;
    border-radius: 3px;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3),
      0 1px 0 rgba(255, 255, 255, 0.2);
  }
  .switch-light.switch-candy span span,
  .switch-light.switch-candy input:checked ~ span span:first-child,
  .switch-toggle.switch-candy label {
    color: #fff;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 1px #191b1e;
  }
  .switch-light.switch-candy input ~ span span:first-child,
  .switch-light.switch-candy input:checked ~ span span:nth-child(2),
  .switch-candy input:checked + label {
    color: #333;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  .switch-candy a {
    border: 1px solid #333;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px rgba(255, 255, 255, 0.45);
    background-color: #70c66b;
    background-image: linear-gradient(rgba(255, 255, 255, 0.2), transparent);
  }
  .switch-candy-blue a {
    background-color: #38a3d4;
  }
  .switch-candy-yellow a {
    background-color: #f5e560;
  }
  /* iOS Theme
*/

  /* Holo Theme
 */
  .switch-toggle.switch-holo,
  .switch-light.switch-holo > span {
    background-color: #464747;
    border-radius: 1px;
    box-shadow: inset rgba(0, 0, 0, 0.1) 0 1px 0;
    color: #fff;
    text-transform: uppercase;
  }
  .switch-holo label {
    color: #fff;
  }
  .switch-holo > span span {
    opacity: 0;
    transition: all 0.1s;
  }
  .switch-holo > span span:first-of-type {
    opacity: 1;
  }
  .switch-holo > span span,
  .switch-holo label {
    font-size: 85%;
    line-height: 1.2em;
  }
  .switch-holo a {
    background-color: #666;
    color: #666;
    font-size: 1px;
    border-radius: 1px;
    box-shadow: inset rgba(255, 255, 255, 0.2) 0 1px 0,
      inset rgba(0, 0, 0, 0.3) 0 -1px 0;
  }
  /* Selected ON switch-light
*/
  .switch-holo.switch-light input:checked ~ span a {
    background-color: #49769c;
  }
  .switch-holo.switch-light input:checked ~ span span:first-of-type {
    opacity: 0;
  }
  .switch-holo.switch-light input:checked ~ span span:last-of-type {
    opacity: 1;
  }
  /* Material Theme
 */
  /* switch-light
 */

  /* ripple
 */

  /* trick to prevent the default checked ripple animation from showing
 * when the page loads.
 * the ripples are hidden by default, and shown only when the input is focused.
 */
  .switch-light.switch-material.switch-light input ~ span:before,
  .switch-light.switch-material.switch-light input ~ span:after,
  .switch-material.switch-toggle input + label:after {
    visibility: hidden;
  }
  .switch-light.switch-material.switch-light input:focus:checked ~ span:before,
  .switch-light.switch-material.switch-light
    input:focus:not(:checked)
    ~ span:after,
  .switch-material.switch-toggle input:focus:checked + label:after {
    visibility: visible;
  }
}

/* Bugfix for older Webkit, including mobile Webkit. Adapted from
 * http://css-tricks.com/webkit-sibling-bug/
 */
@media only screen and (-webkit-max-device-pixel-ratio: 2) and (max-device-width: 80em) {
  .switch-light,
  .switch-toggle {
    animation: webkitSiblingBugfix infinite 1s;
    -webkit-animation: webkitSiblingBugfix infinite 1s;
  }
}

@-webkit-keyframes webkitSiblingBugfix {
  from {
    -webkit-transform: translate3d(0, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}

@keyframes webkitSiblingBugfix {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

`;

/*


 <div className='example'>
          <label>
            <Toggle
              defaultChecked={this.state.baconIsReady}
              onChange={this.handleBaconChange} />
            <span className='label-text'>Wrapper label tag</span>
          </label>

          <pre>
            {`<label>
          <Toggle
            defaultChecked={this.state.baconIsReady}
            onChange={this.handleBaconChange} />
          <span>Wrapper label tag</span>
        </label>`}
          </pre>
          <pre>
            this.state.baconIsReady: {JSON.stringify(this.state.baconIsReady)}
          </pre>
        </div>
*/