import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';
import AnswerPage from '../answer/AnswerPage';
import BubbleLogo from '../common/BubbleLogo';
import LocationButton from '../location/LocationButton';
import Question from '../../data/Question';
import Styles from '../../utils/Styles';

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center',
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    questionInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    logoImage: {
        width: 215,
        height: 211,
        marginTop: 40,
    },
});

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = { question: '' };
        // No autobinding in ES6 so binding once in constructor
        this.onQuestionTextChanged = this.onQuestionTextChanged.bind(this);
        this.onGoPressed = this.onGoPressed.bind(this);
    }

    onQuestionTextChanged(event) {
        this.setState({ question: event.nativeEvent.text });
    }

    _executeSave(question) {
        Question.create(question)
            .then(response => response.json())
            .then(storedQuestion => this._handleResponse(storedQuestion))
            .catch(error =>
                this.setState({
                    message: 'Something bad happened ' + error,
                })
            );
    }

    _handleResponse(question) {
        if (question) {
            this.props.navigator.push({
                title: 'Your Answers',
                component: AnswerPage,
                passProps: { question },
            });
        } else {
            // TODO: Log error / show message
        }
    }

    onGoPressed() {
        this._executeSave(this.state.question);
    }

    render() {
        const logoStyle = Styles.convertIdToObject(styles.logoImage);
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Need some local knowledge?
                </Text>
                <Text style={styles.description}>
                    Get connected with others in your local Bubble.
                </Text>
                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.questionInput}
                        value={this.state.question.text}
                        onChange={this.onQuestionTextChanged}
                        placeholder='Ask your question..'/>
                    <TouchableHighlight style={styles.button}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}
                            onPress={this.onGoPressed}>Go</Text>
                    </TouchableHighlight>
                </View>
                <LocationButton/>
                <BubbleLogo logoStyle={logoStyle}/>
            </View>
        );
    }
}

QuestionPage.propTypes = {
    navigator: PropTypes.object.isRequired,
};

export default QuestionPage;
