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
        return <Text style={styles.text}>Hello Bubble!</Text>;
    }
}

AppRegistry.registerComponent('Bubble', () => Bubble);
