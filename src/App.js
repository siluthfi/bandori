import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './templates/Navbar'
import Footer from './templates/Footer';
import Charas from './components/Charas'
import Bands from './components/Bands'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/bands" component={Bands} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
