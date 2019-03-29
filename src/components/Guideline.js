import React from 'react';
import { guidelineStyle } from '../assets/styles';
import { ListItem } from 'react-native-elements';

const Guideline = ({ guideline }) => (
  <ListItem
    containerStyle={guidelineStyle.container}
    key={guideline.id}
    title={guideline.title}
    titleStyle={guidelineStyle.title}
    subtitle={guideline.description}
  />
)

export default Guideline;
