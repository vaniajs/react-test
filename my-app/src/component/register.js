import React from "react";
import '../support/cssform.css';

class Register extends React.Component {

    btnReg = () => {

    }

    render() {
        var stylingP = { marginTop: "20px", color: "rgb(0,0,0,0.7)", marginLeft: "-30px", fontFamily: "Source Sans Pro", fontWeight: "bold" }
        var stylingB = { marginRight: "20px", fontFamily: "Source Sans Pro", marginTop: "-10px", fontSize: "16px" }

        return (

            <div className="container fluid">
                <div className="row" style={{ height: "80px" }} />
                <div className="row justify-content-center">
                    <p className="col-md-6 text-left" style={stylingP}>N A M E</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" className="col-md-3 tbox" style={stylingB} placeholder="First Name" />
                    <input type="text" className="col-md-3 tbox" style={stylingB} placeholder="Last Name" />
                </div>

                <div className="row justify-content-center">
                    <p className="col-md-6 text-left" style={stylingP}>U S E R N A M E</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" className="col-md-6 tbox" style={stylingB} placeholder="@example123" />
                </div>

                <div className="row justify-content-center">
                    <p className="col-md-6 text-left" style={stylingP}>E M A I L</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" className="col-md-6 tbox" style={stylingB} placeholder="example123@gmail.com" />
                </div>

                <div className="row justify-content-center">
                    <p className="col-md-6 text-left" style={stylingP}>M O B I L E</p>
                </div>
                <div className="row justify-content-center">
                    <input type="text" className="col-md-6 tbox" style={stylingB} placeholder="+628787878787" />
                </div>

                <div className="row justify-content-center">
                    <p className="col-md-6 text-left" style={stylingP}>P A S S W O R D</p>
                </div>
                <div className="row justify-content-center">
                    <input type="password" className="col-md-3 tbox" style={stylingB} placeholder="Set Password" />
                    <input type="password" className="col-md-3 tbox" style={stylingB} placeholder="Confirm Password" />
                </div>


                <div className="row justify-content-center">
                    <input type="button" className="col-md-2 text-center" style={{ border: "none", backgroundColor: "#00308F", borderRadius: "50px", marginTop: "35px", color: "white", height: "40px" }} value="REGISTER" onClick={this.btnReg} />
                </div>


            </div>
        )
    }
}

export default Register;