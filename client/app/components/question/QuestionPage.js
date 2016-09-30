import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import AnswerPage from '../answer/AnswerPage';
import BubbleLogo from '../common/BubbleLogo';
import LocationButton from '../location/LocationButton';
import QuestionInput from './QuestionInput';
import TagLine from './TagLine';
import Question from '../../data/Question';
import Styles from '../../utils/Styles';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center',
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
        this.onGoPressed = this.onGoPressed.bind(this);
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

    onGoPressed(question) {
        this._executeSave(question);
    }

    render() {
        const logoStyle = Styles.convertIdToObject(styles.logoImage);
        return (
            <View style={styles.container}>
                <TagLine/>
                <QuestionInput onGoPressed={this.onGoPressed.bind(this)}/>
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
