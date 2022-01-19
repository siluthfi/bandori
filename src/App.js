import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './templates/Navbar'
import Bands from './components/Bands'
import Home from './components/Home';
import Chara from './components/Chara';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/bands" component={Bands} />
          <Route exact path="/bands/:band/:member" component={Chara} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
