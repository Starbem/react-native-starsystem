import React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AnimatedProps} from '../config/animations';

export const AnimatedView: React.FC<AnimatedProps & ViewProps> = ({
  children,
  animation,
  duration,
  delay,
  direction,
  easing,
  useNativeDriver,
  ...props
}) => {
  return (
    <Animatable.View
      {...props}
      style={[styles.container, props.style]}
      animation={animation}
      duration={duration}
      delay={delay}
      direction={direction}
      easing={easing}
      useNativeDriver={useNativeDriver}>
      {children}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

AnimatedView.displayName = 'AnimatedView';
