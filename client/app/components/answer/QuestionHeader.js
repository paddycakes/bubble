import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    description: {
        marginTop: 80,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
    },
});

const QuestionHeader = ({ question }) => {
    return <Text style={styles.description}>{question.text}</Text>;
};

QuestionHeader.propTypes = {
    question: PropTypes.object.isRequired,
};

export default QuestionHeader;
