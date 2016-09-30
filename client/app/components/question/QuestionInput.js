import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
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
});

class QuestionInput extends Component {
    constructor(props) {
        super(props);
        this.state = { question: '' };
        // No autobinding in ES6 so binding once in constructor
        this.onQuestionTextChanged = this.onQuestionTextChanged.bind(this);
        this.handleGoPressed = this.handleGoPressed.bind(this);
    }

    onQuestionTextChanged(event) {
        this.setState({ question: event.nativeEvent.text });
    }

    handleGoPressed() {
        this.props.onGoPressed(this.state.question);
    }

    render() {
        return (
            <View style={styles.flowRight}>
                <TextInput
                    style={styles.questionInput}
                    value={this.state.question.text}
                    onChange={this.onQuestionTextChanged}
                    placeholder='Ask your question..'/>
                <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}
                        onPress={this.handleGoPressed}>Go</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

QuestionInput.propTypes = {
    onGoPressed: PropTypes.func.isRequired,
};

export default QuestionInput;
