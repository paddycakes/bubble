import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';
import BubblePage from './components/BubblePage';

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
                    component: BubblePage,
                }}
                style={styles.container}
            />
        );
    }
}

AppRegistry.registerComponent('Bubble', () => Bubble);
