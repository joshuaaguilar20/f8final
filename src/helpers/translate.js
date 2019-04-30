import React from 'react'

export default class Translate extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            greeting: 'Hello my name is josh ',
            greeting_in_user_language: null

        }

        this.userLanguage = 'lt'
        this.API_KEY = 'AIzaSyA9qpgDj54lUuryRJ0pYZtzGPDcIlQDqu0'
        this.URL = `https://translation.googleapis.com/language/translate/v2?key=${this.API_KEY}&source=en`
        this.URL += `&target=${this.userLanguage}`

    }
    componentWillMount() {

        this.translate('greeting_in_user_language', '&q=' + encodeURI(this.state.greeting))

    }

    translate = (key, string_to_translate) => {


        fetch(this.URL + string_to_translate)
            .then(res => res.json())
            .then(
                (res) => {
                    let text = res.data.translations[0].translatedText.replace(/(&quot\;)/g, "\"")
                    this.setState({ [key]: text })
                }
            ).catch(
                (error) => {
                    console.log("There was an error: ", error);
                }
            )
    }

    render() {
        return (
            <>
                <section className="page">
                    <p>{
                        this.state.greeting_in_user_language ?
                            this.state.greeting_in_user_language :
                            this.state.greeting
                    }</p>
                </section>
            </>
        )
    }
}