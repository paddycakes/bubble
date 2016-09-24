import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';

class AnswerPage extends Component {
    // static propTypes = {
    //     question: PropTypes.object.isRequired,
    //     navigator: PropTypes.object.isRequired,
    // }

    constructor(props) {
        super(props);
    }

    render() {
        // const otherText = 'can we see this?';
        return (
            <TouchableHighlight>
                <Text>Go</Text>
            </TouchableHighlight>
        );
    }
}

// AnswerPage.propTypes = {
//     question: React.PropTypes.object.isRequired,
// };

export default AnswerPage;
