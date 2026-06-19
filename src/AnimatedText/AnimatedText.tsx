import React from 'react';
import {StyleSheet, TextProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AnimatedProps} from '../config/animations';

export const AnimatedText: React.FunctionComponent<
  AnimatedProps & TextProps
> = ({
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
      {...(props as any)}
      style={StyleSheet.flatten([styles.container, props.style]) as any}
      animation={animation}
      duration={duration}
      delay={delay}
      direction={direction}
      easing={easing}
      useNativeDriver={useNativeDriver}
    >
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
