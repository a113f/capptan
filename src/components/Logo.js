import React from 'react';
import { LOGO } from '../assets/images';
import { Image } from 'react-native';

const Logo = () => <Image source={LOGO} style={{ width: 100, height: 100, alignSelf: 'center' }}/>

export default Logo;