import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Question from '../../data/Question';
import AnswerList from './AnswerList';

const styles = StyleSheet.create({
    description: {
        marginTop: 80,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
});

// TODO: This component should fetch required answers when displayed - if any.
//       and have a listening websocket for more answers to display as they are pushed.
//       The rendering should be done via props passed into a Presentation component.
//       https://www.reddit.com/r/reactnative/comments/33wmu4/how_to_re_render_listview_items/
//       See other article I read about the difference between smart and dumb components.
// TODO: The Websocket should be in this component and pass new answers down into the presentation AnswerList
class AnswerPage extends Component {
    constructor(props) {
        super(props);
        this.state = { answers: [] };
    }

    componentWillMount() {
        this._loadAnswers();
    }

    _loadAnswers() {
        Question.getAnswers(this.props.question.id)
            .then(response => response.json())
            .then(answers =>
                this.setState({ answers })
            )
            .catch(error =>
                this.setState({ message: 'Something bad happened ' + error })
            );
    }

    render() {
        return (
            <View>
                <Text style={styles.description}>{this.props.question.text}</Text>
                <AnswerList answers={this.state.answers} />
            </View>
        );
    }
}

AnswerPage.propTypes = {
    question: PropTypes.object.isRequired,
};

export default AnswerPage;
