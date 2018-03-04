import React from 'react';
import Box from './Box';

export default function SceneBox(props) {
  return (<Box
  testID='scene'
  label='Scene'
  value={props.value}
  onPress={() => props.edit('scene')}
  onUpdate={(value) => props.updateValue('scene', value)} />);
}
