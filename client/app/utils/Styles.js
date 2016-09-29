import { StyleSheet } from 'react-native';

export default {
    convertIdToObject: (id) => {
        return StyleSheet.flatten(id);
    },
};
