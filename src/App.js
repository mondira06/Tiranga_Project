
import React from 'react';
import LoadingPage from './Component1/LoadingPage';
import FirstDeposit from './Component2/FirstDeposit';
import RandomPage from './Component2/RandomPage';
import Notification from './Component3/Notification';
import Dashboard from './Component4/Dashboard';
import Safe from './Component5/Safe';
import V1 from './Component 6/V1'
import DailyBonus from "./Component7/DailyBonus";
import VideoContest from "./Component7/VideoContest";
import WinStreak from "./Component7/WinStreak";
import DepositBonus from "./Component7/DepositBonus";
import TCSupportFunds from "./Component7/TCSupportFunds";
import ClubHome from "./Component8/ClubHome";
import BDGame from './Component10/BDGame';
function App() {
  return (
    <div className="App">
      {/* <LoadingPage/> */}
      {/* <FirstDeposit/> */}
      {/* <Notification/> */}
      {/* <Dashboard/> */}
      {/* <RandomPage/> */}
      {/* <Safe/> */}
      {/* <V1/> */}
      {/* <DailyBonus/> */}
      {/* <VideoContest/> */}
      {/* <WinStreak/> */}
      {/* <ClubHome/> */}
      <BDGame/>
     {/* <TCSupportFunds /> */}
      {/* <DepositBonus/> */}
    </div>
  );
}

export default App;
