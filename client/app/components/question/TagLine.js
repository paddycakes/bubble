import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
});

// TODO: Should this have a componentShouldUpdate() method
//       to return false as this will never need updating?
const TagLine = () => {
    return (
        <View>
            <Text style={styles.description}>
                Need some local knowledge?
            </Text>
            <Text style={styles.description}>
                Get connected with others in your local Bubble.
            </Text>
        </View>
    );
};

export default TagLine;
