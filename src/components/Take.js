import React from 'react';
import Box from './Box';

export default function Scene(props) {
  return (<Box
  testID='take'
  label='Take'
  value={props.value}
  onPress={() => props.edit('take')}
  onUpdate={(value) => props.updateValue('take', value)} />);
}
