// import React from 'react'
// import { connect } from 'react-redux';
// import { Card, CardHeader, CardBody, CardImg, CardText, Row, Col, Alert, Button } from "reactstrap";
// import cpr from '../images/childgif.gif'
// import cpr2 from '../images/child3.2019-04-29 15_47_54.gif'
// import Welcome from '../components/childCPR/Welcome'
// import SceneSafety from '../components/childCPR/SceneSafety'
// import Responsiveness from '../components/childCPR/Responsiveness'
// import Collapse from '../components/childCPR/Collapse'
// import ChildCPR from '../components/childCPR/ChildCPR'
// import UseAED from '../components/childCPR/UseAED'
// import ContinueCPR from '../components/childCPR/ContinueCPR'
// import ThankYou from '../components/childCPR/ThankYou'

// class SaveALife extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       step:1
//     }
//     this.onClick = this.onClick.bind(this)
//   }

//   onClick = (step)=> {
//     this.setState({
//       step: step
//     })
//   }
//   render(){
//     switch(this.state.step){
//       case 0:
//       return(
//         <ThankYou/>
//       )
//       case 1:
//       return(
//         <Welcome onChange={this.onClick}/>
//       )
//       case 2:
//         return(
//           <SceneSafety onChange={this.onClick}/>
//         )
//         case 3:
//         return(
//           <Responsiveness onChange={this.onClick}/>
//         )
//         case 6:
//         return(
//           <Collapse onChange={this.onClick}/>
//         )
//         case 7:
//         return(
//           <ChildCPR onChange={this.onClick}/>
//         )
//         case 8:
//         return(
//           <ChildCPR onChange={this.onClick}/>
//         )
//         case 9:
//         return(
//           <UseAED onChange={this.onClick}/>
//         )
//         case 10:
//         return(
//           <ContinueCPR onChange={this.onClick}/>
//         )

//       default:  return(
//         <Welcome onChange={this.onClick}/>
//       )
//     }
//   }
// }

// export default SaveALife