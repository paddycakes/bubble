import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80,
    },
});

class HelloBubble extends Component {
    render() {
        return <Text style={styles.text}>Hello Bubble!</Text>;
    }
}

class Bubble extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title: 'Bubble Client',
                    component: HelloBubble,
                }}
                style={styles.container}
            />
        );
    }
}

AppRegistry.registerComponent('Bubble', () => Bubble);
