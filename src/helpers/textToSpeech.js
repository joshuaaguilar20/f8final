

export const textToSpeech = (text) => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.onend = function (event) {
        // console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };

    speechSynthesis.speak(msg);
}
