import React, { PropTypes } from 'react';
import { Image } from 'react-native';

const BubbleLogo = (props) => {
    console.log('logoStyle>> ' + props.logoStyle);
    return <Image source={require('../../Resources/bubble.png')}
                  style={props.logoStyle}/>;
};

BubbleLogo.propTypes = {
    logoStyle: PropTypes.object.isRequired,
};

export default BubbleLogo;
