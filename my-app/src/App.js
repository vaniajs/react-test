import React, { Component } from 'react';
import Header from './component/header';
import LandingPage from './component/landingPage';
import Home from './component/home';
import Footer from './component/footer';
import Register from './component/register';
import Login from './component/login';
import ManageProduct from './component/manageProduct';
import ProductDetail from './component/productDetail';
import { keepLogin } from './1.actions'
import { connect } from 'react-redux'
import { Route , withRouter , Switch } from 'react-router-dom';
import Cookie from 'universal-cookie';
import './support/cssheader.css';
import './support/font.css';
import './support/cssbackground.css';

import './App.css';
import { register } from './serviceWorker';
import productDetail from './component/productDetail';


const objCookie = new Cookie()
class App extends Component {

  componentDidMount(){
    var ck = objCookie.get('userData')
    if(ck!==undefined){
      this.props.keepLogin(ck)
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>
        <Route path="/manage-product" component={ManageProduct}/>
        <Route path="/product/:id" component={ProductDetail}/>


        </div>
    );
  }
}

export default withRouter(connect(null,{keepLogin})(App));
