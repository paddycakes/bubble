import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
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

class AnswerList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
        this.state = {
            ds,
            dataSource: ds.cloneWithRows(this.props.answers),
        };
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.ds.cloneWithRows(nextProps.answers),
        });
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
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}/>
        );
    }
}

AnswerList.propTypes = {
    answers: PropTypes.array.isRequired,
};

export default AnswerList;
