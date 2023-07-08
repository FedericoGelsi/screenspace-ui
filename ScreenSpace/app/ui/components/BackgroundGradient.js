import React from 'react'
import { StyleSheet } from 'react-native';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';

const BackgroundGradient = ({fromColor, toColor, radius}) => {
  return (
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="50%" x2="0%" y2="100%">
              <Stop offset="0" stopColor={fromColor} stopOpacity={0} />
              <Stop offset="1" stopColor={toColor} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" rx={radius} ry={radius} />
        </Svg>
  )
}

export default BackgroundGradient