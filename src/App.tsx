import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const now = new Date();

  const day = now.getDay();
  const isWeekend = day == 0 || day == 6;

  const hour = now.getHours();

  const noiseStart = isWeekend ? 9 : 7; // 7 weekdays, 9 weekends
  const noiseEnd = 22; // 10 PM (WTF Seattle)

  const impactStart = isWeekend ? 9 : 8; // 8 weekdays, 9 weekends
  const impactEnd = 17;

  const noiseAllowed = hour > noiseStart && hour < noiseEnd;
  const impactAllowed = hour > impactStart && hour < impactEnd;

  const state = impactAllowed ? "Yes" : noiseAllowed ? "Some" : "No";

  return (
    <div
      className="App"
      style={{
        backgroundColor: COLOR.get(state),
      }}
    >
      <header className="question">Is noise allowed?</header>
      <div className="answer">
        {noiseAllowed && impactAllowed ? "Yes" : noiseAllowed ? "Some" : "No"}
      </div>
      <div className="action">{ACTION.get(state)}</div>
    </div>
  );
}

const COLOR = new Map([
  ["Yes", "#690"],
  ["Some", "#DA0"],
  ["No", "#C40"],
]);

const ACTION = new Map([
  [
    "Yes",
    <>
      Even if{" "}
      <a href="https://www.thestranger.com/features/2015/04/29/22129642/what-living-next-to-a-condo-construction-site-taught-me-about-seattles-noise-ordinances">
        it
      </a>{" "}
      <a href="https://crosscut.com/2016/12/seattle-construction-noise-code-outdated-development-boom">
        shouldn't
      </a>{" "}
      <a href="https://mynorthwest.com/487420/seattle-construction-hours/">
        be
      </a>
    </>,
  ],
  [
    "Some",
    <>
      If you hear jack-hammering or loud impact noise{" "}
      <a href="https://cosaccela.seattle.gov/portal/cap/CapEdit.aspx?Module=DPDEnforcement&stepNumber=2&pageNumber=1&isFeeEstimator=&TabName=DPDEnforcement&agencyCode=SEATTLE">
        file a complaint
      </a>
    </>,
  ],
  [
    "No",
    <>
      If you hear construction noise{" "}
      <a href="https://cosaccela.seattle.gov/portal/cap/CapEdit.aspx?Module=DPDEnforcement&stepNumber=2&pageNumber=1&isFeeEstimator=&TabName=DPDEnforcement&agencyCode=SEATTLE">
        file a complaint
      </a>
    </>,
  ],
]);

export default App;
