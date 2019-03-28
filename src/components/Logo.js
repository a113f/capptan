import React from 'react';
import { LOGO_CAPPTAN } from '../assets/images';
import { Image } from 'react-native';
import { systemStyle } from '../assets/styles' 

const Logo = () => 
  <Image source={LOGO_CAPPTAN} style={systemStyle.logo}/>

export default Logo;