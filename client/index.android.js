import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
} from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80,
    },
});

class Bubble extends Component {
    render() {
        return React.createElement(Text, { style: styles.text }, 'Hello World! (Again)');
    }
}

AppRegistry.registerComponent('Bubble', () => Bubble);
