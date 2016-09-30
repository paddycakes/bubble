import React, { PropTypes } from 'react';
import { Image } from 'react-native';

const BubbleLogo = ({ logoStyle }) => {
    return <Image source={require('../../../Resources/bubble.png')}
                  style={logoStyle}/>;
};

BubbleLogo.propTypes = {
    logoStyle: PropTypes.object.isRequired,
};

export default BubbleLogo;
