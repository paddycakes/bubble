import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';
import QuestionPage from './components/pages/QuestionPage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Bubble extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    title: 'Bubble Client',
                    component: QuestionPage,
                }}
                style={styles.container}
            />
        );
    }
}

AppRegistry.registerComponent('Bubble', () => Bubble);
