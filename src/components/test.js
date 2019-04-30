import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

const { useEffect, useRef, useState } = React;


const useSpeechSynthesis = () => {
    const [voices, setVoices] = useState([]);
    const [lang, setLang] = useState([]);
    const synth = useRef();

    const updateVoices = () => {
        setVoices(synth.current.getVoices());
    };

    const speak = (text, voice, pitch = 1, rate = 1) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        synth.current.speak(utterance);
        

      
    }

    useEffect(() => {
        if (typeof window !== 'object' || !window.speechSynthesis) return;
        synth.current = window.speechSynthesis;
        synth.current.onvoiceschanged = updateVoices;
        updateVoices();

        return () => {
            synth.current.onvoiceschanged = null
        }
    }, []);

    return ([
        voices,
        speak,
        lang
    ]);
}

const Brother = () => {
    const [voices, speak] = useSpeechSynthesis();
    const [currentVoice, setCurrentVoice] = useState();
    const [text, setText] = useState("Shout and gently tap the child on the shoulder. If there is no response and not breathing or not breathing normally, position the infant on his or her back and begin CPR.");

    useEffect(() => {
        if (!currentVoice) {
            setCurrentVoice(voices.filter(v => v.default)[0] || voices[0]);
        }
    }, [voices])

  
    const handleVoiceChange = e => {
        setCurrentVoice(voices.filter(v => v.name === e.target.value)[0]);
    }

    const handleTextChange = e => {
        setText(e.target.value);
    }

    const handleSpeak = e => {
        e.preventDefault();
        speak(text, currentVoice);
    }

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <Form className="contain" onSubmit={handleSpeak}  >
                <CardHeader>
                  <h5 className="title">Natural language processing</h5>
                </CardHeader>
                <CardBody>
                    <Row>
                      <Col className="pr-md-1" md="5">
                       
                          <label>Select Voice </label>
                         
                      </Col>
                     
                  
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                                            <select value={currentVoice ? currentVoice.name : ''} onChange={handleVoiceChange}>
                                 {voices.map(v => (
                                        <option value={v.name}>{`${v.name}`}</option>
                                    ))}
                               </select>
                      </Col>
                    </Row>
                    <Row>
                <Col className="pr-md-1" md="6" id="google_translate_element"></Col>
    
                    </Row>
                    <Row>
                      <Col md="8">
                        
                          <label>About Me</label>
                          <Input
                            cols="80"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                            onChange={handleTextChange}
                            value={text}                        
                          />
                      </Col>
                    </Row>
                  
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Speak
                  </Button>
                    <Button className="btn-fill" color="primary" type="submit">
                      Stop
                  </Button>
                  
                                </CardFooter>
                        </Form>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }


export default Brother;


  