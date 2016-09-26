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

class AnswerPage extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            answers: [],
            dataSource: ds.cloneWithRows([{ id: 1, qId: 1, user: 'paddy', answer: 'At the corner of South and West Streets' },
                                          { id: 2, qId: 1, user: 'piotr', answer: 'Up the road at Petticoat Lane' },
                                          { id: 3, qId: 1, user: 'lloyd', answer: 'On Blueberry Parade' }]),
        };
        this.renderRow = this.renderRow.bind(this);
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
