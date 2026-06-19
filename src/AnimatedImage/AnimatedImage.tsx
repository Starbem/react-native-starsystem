import React from 'react';
import {StyleSheet, ImageProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AnimatedProps} from '../config/animations';

export const AnimatedImage: React.FunctionComponent<
  AnimatedProps & ImageProps
> = ({
  animation,
  duration,
  delay,
  direction,
  easing,
  useNativeDriver,
  ...props
}) => {
  return (
    <Animatable.Image
      {...(props as any)}
      style={StyleSheet.flatten([styles.container, props.style]) as any}
      animation={animation}
      duration={duration}
      delay={delay}
      direction={direction}
      easing={easing}
      useNativeDriver={useNativeDriver}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

AnimatedImage.displayName = 'AnimatedImage';
