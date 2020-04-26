import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import SinglePostPage from './pages/SinglePostPage';
import Navigation from './components/Navigation';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <header className="App-header">
          <img src={logo} className='App-logo' alt='logo'/>
          <p>MERN blog!</p>
        </header>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/post/:id' component={SinglePostPage}/>
            <Route path='/create' component={CreatePostPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
