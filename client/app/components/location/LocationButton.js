import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
});

// TODO: How to share styles in child components (eg. button, buttonText)?
//     : Can I make this a stateless functional component by passing in the Location event click handler?
class LocationButton extends Component {
    render() {
        return (
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Location</Text>
            </TouchableHighlight>
        );
    }
}

export default LocationButton;
