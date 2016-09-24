import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';

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
    image: {
        width: 215,
        height: 211,
        marginTop: 40,
    },
});

class BubblePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
        };
    }

    onQuestionTextChanged(event) {
        this.setState({ question: event.nativeEvent.text });
    }

    render() {
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
                        value={this.state.question}
                        onChange={this.onQuestionTextChanged.bind(this)}
                        placeholder='Ask your question..'/>
                    <TouchableHighlight style={styles.button}
                        underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight>
                <Image
                    source={require('../Resources/bubble.png')}
                    style={styles.image}/>
            </View>
        );
    }
}

export default BubblePage;
