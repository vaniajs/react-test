import React from 'react';


class Footer extends React.Component {

  render() {
      const styling = {fontFamily:"Source Sans Pro", color:"white", fontWeight:"bold", letterSpacing:"3px", marginTop:"10px"}
    return (
      // <div className="container" style={{backgroundColor:"#00308F",height:"1000px"}}>

      // </div>
      <div className="fluid-container" style={{backgroundColor:"#00308F",position:"fixed", width:"100%", height:"40px", bottom:"0px", left:"0px"}}>
        <p style={styling} className="text-center">@vaniajs</p>
              
      </div>
    );
  }
}

export default Footer;
