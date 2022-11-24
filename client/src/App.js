import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './component/Landing Page/LandingPage';
import Home from './component/Home/Home';
import Detail from './component/Detail/Detail';
import ActivityCreate from './component/Activity Create/ActivityCreate';

function App() {
  return (
    <Router>
        <div className="App">  
          <Route exact path='/' render={() => <LandingPage/>}/>
          <Route exact path='/home' render={() => <Home/>}/>
          <Route exact path='/home/:id' render={({match}) => <Detail country={match.params.id}/>}/>
          <Route exact path='/activities' render={() => <ActivityCreate />}/>
        </div>
    </Router>
  );
}

export default App;
