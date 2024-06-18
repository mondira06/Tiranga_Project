import React from 'react';
import LoadingPage from './Componenet1/LoadingPage';
import FirstDeposit from './Component2/FirstDeposit';
import RandomPage from './Component2/RandomPage';
import Notification from './Component3/Notification';
import Dashboard from './Component4/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <LoadingPage/> */}
      {/* <FirstDeposit/> */}
      {/* <Notification/> */}
      <Dashboard/>
      {/* <RandomPage/> */}
    </div>
  );
}

export default App;
