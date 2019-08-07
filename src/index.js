// import React from 'react';
// import {ReactDOM} from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React from 'react';
import {render} from 'react-dom';

import './style.css';

import {Navbar} from "./components/Navbar";
import {Banner} from "./components/Banner";
import {About} from "./components/About";
import {Services} from "./components/Services";
import {Portfolio} from "./components/Portfolio";
import {Contact} from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="bodyContainer">
        <Navbar/>
        <Banner/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
}

render(<App/>,window.document.getElementById("app"));
