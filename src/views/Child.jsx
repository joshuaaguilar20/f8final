import { textToSpeech } from '../helpers/textToSpeech'
import React from "react";
import { childText } from '../apis/childText';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import Slider1 from '../components/Sliders1'
import FacebookProvider, { Comments } from 'react-facebook';
speechSynthesis.cancel();



const prompt = 'Welcome to Child CPR simulation. Are you ready to begin?'
const question = '...Yes or No?'



class ChildCPR extends React.Component {
    constructor() {
        super()
        this.state = {
            listening: false,
            count: 1,
            on: true,
            finalTranscript: ''
        }
        this.child = React.createRef();
    }





    componentDidMount() {
        textToSpeech(prompt)
        textToSpeech(question)
        if (window.FB.XFBML) {
            window.FB.XFBML.parse();
        }
    }



    changPic = () => {
        this.child.current.goToNextSlide()
    };

    toggleListen = () => {
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }
    speakText = (text = false) => {
        speechSynthesis.cancel();
        console.log('Worked')
        if (!text) {
            const utterance = new SpeechSynthesisUtterance(childText[this.state.count])
            var voices = speechSynthesis.getVoices()
            utterance.rate = .80
            speechSynthesis.speak(utterance)
        } else {
            const utterance = new SpeechSynthesisUtterance(`great baby is responsive await EMS and monitor closely`)
            var voices = speechSynthesis.getVoices()
            utterance.rate = .80
            speechSynthesis.speak(utterance)
        }
    }

    checkResponse = async () => {
        if (this.state.count === 1) {
            if (this.state.finalTranscript.includes('yes')) {
                this.state.count++
                this.setState({
                    count: this.state.count,
                    finalTranscript: ""
                })
                this.changPic();
                console.log(this.state.count)
                await this.speakText()
            } else if (this.state.finalTranscript.includes('yes')) {
                await this.speakText()
            }
        } else if (this.state.count === 2) {
            console.log(this.state.finalTranscript);
            if (this.state.finalTranscript.includes('yes')) {
                this.state.count++
                this.setState({ count: this.state.count })
                console.log(this.state.count)
                this.changPic();
                await this.speakText()
            }
        } else if (this.state.count === 3) {
            console.log(this.state.finalTranscript);
            if (this.state.finalTranscript.includes('no')) {
                this.state.count++
                this.setState({ count: this.state.count })
                console.log(this.state.count)
                this.changPic();
                await this.speakText()
            }
        } else if (this.state.count === 4) {
            console.log(this.state.finalTranscript);
            if (this.state.finalTranscript.includes('yes')) {
                this.state.count++
                this.setState({ count: this.state.count })
                console.log(this.state.count)
                this.changPic();
                await this.speakText()
            }
        }
        else if (this.state.count === 5) {
            console.log(this.state.finalTranscript);
            if (this.state.finalTranscript.includes('yes')) {
                this.state.count++
                this.setState({ count: this.state.count })
                console.log(this.state.count)
                this.changPic();
                await this.speakText()
            }

        } else if (this.state.count === 6) {
            console.log(this.state.finalTranscript);
            if (this.state.finalTranscript.includes('yes')) {
                this.state.count++
                this.setState({ count: this.state.count })
                console.log(this.state.count)
                this.changPic();
                await this.speakText()
            }

        }
    }



    handleListen = () => {
        let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = new SpeechRecognition();
        recognition.continous = false
        recognition.interimResults = false
        recognition.lang = 'en-US'
        console.log('I am Listening ')
        recognition.start()
        var finalTranscript = '';
        var interimTranscript = '';
        var x = 0;
        recognition.onresult = event => {
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][x].transcript;
                console.log(`final ${finalTranscript}`);
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += transcript;
            }
        }

        recognition.onend = async () => {
            console.log('Speech recognition service disconnected');
            console.log(finalTranscript)
            if (finalTranscript.length > 1) {
                await this.setState({ finalTranscript })

                interimTranscript = '';
                finalTranscript = '';
                x++
                await recognition.stop()
                await this.checkResponse()
            }
        }
    }

    render() {
        return (

            <div className="content">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Child CPR Flow </h5>
                            </CardHeader>
                            <CardBody>
                                <Button onClick={() => this.speakText()}>Start infant CPR WorkFlow</Button>
                                <Button disabled={false} onClick={this.toggleListen}>
                                    <span>
                                        <i className="fa fa-microphone fa-6" aria-hidden="true"></i>
                                    </span>
                                </Button>
                                <div id='interim'>{this.state.finalTranscript}</div>
                                <div id='final'></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Natural language learning</h5>
                                <h5 className="title">{childText[this.state.count]}</h5>
                            </CardHeader>
                            <Slider1 ref={this.child} />
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card>

                            <CardHeader>
                                <h5 className="title">Share</h5>
                                <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="500" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                            </CardHeader>
                            <CardBody>
                                <div class="fb-comments" style={{ color: "white" }} data-href="http://savealifef8.s3-website-us-west-1.amazonaws.com" data-width="500" data-numposts="5" data-colorscheme="dark"></div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div >
        );
    }
}


export default ChildCPR;
