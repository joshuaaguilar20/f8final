import React from 'react'
import { Card, CardHeader, CardBody, Button } from 'reactstrap'

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  speechSynthesis.cancel()
  var u = new SpeechSynthesisUtterance();
}
catch (e) {
  console.error(e);

}

class VoiceCard extends React.Component {
  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.child = React.createRef();
    this.toggleListen = this.toggleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  render(){
    return (
    <Card>
    <CardHeader>
      <h5 className="title">Infant CPR Flow </h5>
    </CardHeader>
    <CardBody>
      <Button onClick={() => speechSynthesis.speak(u)}>Start infant CPR WorkFlow</Button>
      <Button onClick={this.toggleListen}>
        <span>
          <i className="fa fa-microphone fa-6" aria-hidden="true"></i>
        </span>
      </Button>
      <div id='interim' ></div>
      <div id='final'></div>
    </CardBody>
  </Card>
  )
    }
}

export default VoiceCard