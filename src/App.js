import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader';
import MyHeaderBare from './components/MyHeaderBare';
// import ESPPTable from './components/ESPPTable';
import ESPPTable2 from './features/espp/ESPPTable2flux';
import {useSelector} from 'react-redux'
import MyJumbo from './components/MyJumbo';

/* The following line can be included in your src/index.js or App.js file */

import './App.scss';



function App() {
  // const esppRowData = useSelector((state) => state.esppRowData)

  return (
    <React.Fragment>
      {/* <MyHeader /> */}
      <MyHeaderBare/>
      {/* <br></br> */}
      {/* <br></br> */}
      <MyJumbo/>
      {/* <ESPPTable2 esppData = {esppRowData}/> */}
      {/* <ESPPTable/> */}
      <ESPPTable2 />
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
