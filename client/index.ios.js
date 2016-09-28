import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';
import QuestionPage from './app/components/pages/QuestionPage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

class Bubble extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Ask',
                    component: QuestionPage,
                }}
            />
        );
    }
}

AppRegistry.registerComponent('Bubble', () => Bubble);
