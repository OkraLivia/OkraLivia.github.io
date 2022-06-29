import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';

import OsqledARen from './components/projects/Osqledaren';
import huntTheThimble from './components/projects/huntTheThimble';
import sonifiedMap from './components/projects/sonifiedMap';
import lightForest from './components/projects/lightForest';
import studyPlaces from './components/projects/studyPlaces';
import Clue from './components/projects/Clue';
import Bedtime from './components/projects/Bedtime';
import PerceptionProject from './components/projects/PerceptionProject';
import DailyUi from './components/projects/DailyUi';
import Electrolux from './components/projects/Electrolux';

function App() { 
return (
<>

	<Router>
  		<Navbar />
  		<Switch>
  			<Route path='/' exact component={Home}/>
  			<Route path='/about' component={About}/>

  			<Route path='/osqledaren' component={OsqledARen}/>
  			<Route path='/huntthethimble' component={huntTheThimble}/>
  			<Route path='/sonifiedmap' component={sonifiedMap}/>
  			<Route path='/lightforest' component={lightForest}/>
  			<Route path='/studyplaces' component={studyPlaces}/>
        <Route path='/clue' component={Clue}/>
        <Route path='/bedtime' component={Bedtime}/>
        <Route path='/perceptionproject' component={PerceptionProject}/>
        <Route path='/dailyui' component={DailyUi}/>
        <Route path='/electrolux' component={Electrolux}/>

        <Route path='/:section' component={Home}/>
  		</Switch>
  	</Router>
</>
);
}

export default App
