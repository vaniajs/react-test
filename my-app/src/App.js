import React, { Component } from 'react';
import Header from './component/header';
import LandingPage from './component/landingPage';
import Home from './component/home';
import Footer from './component/footer';
import Register from './component/register';
import Login from './component/login';
import { Route } from 'react-router-dom';
import './support/cssheader.css';
import './support/font.css';
import './support/cssbackground.css';
import './App.css';
import { register } from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>
        </div>
    );
  }
}

export default App;
