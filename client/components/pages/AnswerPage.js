import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
    description: {
        marginTop: 80,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
    textContainer: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
    },
    answer: {
        fontSize: 15,
        color: '#656565',
    },
    user: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#48BBEC',
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
    },
});

// TODO: This component should fetch required answers when displayed - if any.
//       and have a listening websocket for more answers to display as they are pushed.
//       The rendering should be done via props passed into a Presentation component.
//       https://www.reddit.com/r/reactnative/comments/33wmu4/how_to_re_render_listview_items/
//       See other article I read about the difference between smart and dumb components.
class AnswerPage extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        const answers = [];
        this.state = {
            answers,
            ds,
            dataSource: ds.cloneWithRows(answers),
        };
        this.renderRow = this.renderRow.bind(this);
    }

    // TODO: Is there a render before componentDidMount?
    componentDidMount() {
        this._loadAnswers();
    }

    _loadAnswers() {
        fetch('http://localhost:3000/api/questions/1/answers')
        .then(response => response.json())
        .then(answers =>
            this.setState({
                answers,
                dataSource: this.state.ds.cloneWithRows(answers),
            }))
        .catch(error =>
            this.setState({
                message: 'Something bad happened ' + error,
            })
        );
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData.id)}
                underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.answer}>{rowData.answer}</Text>
                            <Text style={styles.user}>{rowData.user}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
          );
    }

    render() {
        console.log('In AnswerPage render');
        return (
            <View>
                <Text style={styles.description}>{this.props.question.text}</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
            </View>
        );
    }
}

AnswerPage.propTypes = {
    question: PropTypes.object.isRequired,
};

export default AnswerPage;
