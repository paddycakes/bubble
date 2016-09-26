import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ListView,
    TouchableHighlight,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
    description: {
        marginTop: 80,
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
});

class AnswerPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('In AnswerPage render');
        return (
            <View>
                <Text style={styles.description}>{this.props.question.text}</Text>
            </View>
        );
    }
}

AnswerPage.propTypes = {
    question: React.PropTypes.object.isRequired,
};

export default AnswerPage;
