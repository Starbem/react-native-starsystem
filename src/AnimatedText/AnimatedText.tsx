import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AnimatedProps} from '../config/animations';

export const AnimatedText: React.FC<AnimatedProps & TextProps> = ({
  children,
  animation,
  duration,
  delay,
  direction,
  easing,
  useNativeDriver,
  allowFontScaling = false,
  ...props
}) => {
  return (
    <Animatable.Text
      {...props}
      style={[styles.container, props.style]}
      animation={animation}
      duration={duration}
      delay={delay}
      direction={direction}
      easing={easing}
      useNativeDriver={useNativeDriver}>
      {children}
    </Animatable.Text>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

AnimatedText.displayName = 'AnimatedText';
