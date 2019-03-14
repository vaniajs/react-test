import React from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Loader } from 'react-loader-spinner';
import { onLogin } from './../1.actions/userActions';
import '../support/cssform.css';

class Login extends React.Component {


    btnLogin = () => {
        var username = this.refs.username.value
        var pass = this.refs.password.value
        this.props.onLogin(username,pass)
    }

    renderLoaderOrButton = () => {
        if(this.props.loading===true){
            return <Loader 
            type="Puff"
            color="#00BFFF"
            height="100"	
            width="100"
         />  
        }
        return <input type="button" className="col-md-2 text-center" style={{ border: "none", backgroundColor: "#00308F", borderRadius: "50px", marginTop: "35px", color: "white", height: "40px" }} value="LOGIN" onClick={this.btnLogin}/>    
        
    }

    render() {
        if(this.props.username!==''){
            return <Redirect to='/'/>
        }
        
        var stylingP = { marginTop: "20px", color: "rgb(0,0,0,0.7)", marginLeft: "-30px", fontFamily: "Source Sans Pro", fontWeight: "bold" }
        var stylingB = {marginRight: "20px", fontFamily: "Source Sans Pro", marginTop: "-10px", fontSize: "16px" }

        return (
            <div className="container fluid">
                <div className="row" style={{ height: "80px" }} />

                <div className="row justify-content-center">
                    <p className="col-md-4 text-left" style={stylingP}>U S E R N A M E</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" className="col-md-4 tbox" style={stylingB} placeholder="@example123" ref='username' />
                </div>


                <div className="row justify-content-center">
                    <p className="col-md-4 text-left" style={stylingP}>P A S S W O R D</p>
                </div>
                <div className="row justify-content-center">
                    <input type="password" className="col-md-4 tbox" style={stylingB} placeholder="Confirm Password" ref='password' />
                </div>


                <div className="row justify-content-center">
                    {this.renderLoaderOrButton()}
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        username: state.user.sername,
        loading: state.user.loading,

    }
}

export default connect(mapStateToProps,{onLogin})(Login);