import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';

export type SpinnerProps = {
  /** Diameter in px. Native `ActivityIndicator` only supports small/large — larger custom
   * sizes are approximated via scale transform. */
  size?: number;
  /** Semantic tone — matches DS. */
  tone?: 'primary' | 'neutral' | 'white';
  /** Style for the wrapping container. */
  style?: StyleProp<ViewStyle>;
};

export const Spinner: StarFunctionComponent<SpinnerProps> = ({
  size = 24,
  tone = 'primary',
  theme,
  style,
}) => {
  const color =
    tone === 'white'
      ? '#fff'
      : tone === 'neutral'
        ? theme?.colors?.grey2
        : theme?.colors?.primary;

  const nativeSize = size >= 36 ? 'large' : 'small';
  const baseSize = nativeSize === 'large' ? 36 : 20;
  const scale = size / baseSize;

  return (
    <View
      style={StyleSheet.flatten([
        {transform: [{scale}]},
        style,
      ]) as StyleProp<ViewStyle>}
      accessibilityRole="progressbar"
      accessibilityLabel="Carregando"
    >
      <ActivityIndicator size={nativeSize} color={color} />
    </View>
  );
};

Spinner.displayName = 'Spinner';

export type DotsProps = {
  /** Semantic tone — matches DS. */
  tone?: 'primary' | 'neutral' | 'white';
  /** Diameter of each dot in px. */
  size?: number;
  style?: StyleProp<ViewStyle>;
};

const DOT_COUNT = 3;

export const Dots: StarFunctionComponent<DotsProps> = ({
  tone = 'primary',
  size = 8,
  theme,
  style,
}) => {
  const color =
    tone === 'white'
      ? '#fff'
      : tone === 'neutral'
        ? theme?.colors?.grey2
        : theme?.colors?.primary;

  const animations = React.useRef(
    Array.from({length: DOT_COUNT}, () => new Animated.Value(0)),
  ).current;

  React.useEffect(() => {
    const loops = animations.map((value, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 120),
          Animated.timing(value, {
            toValue: 1,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: 300,
            easing: Easing.in(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.delay((DOT_COUNT - 1 - index) * 120),
        ]),
      ),
    );
    loops.forEach(loop => loop.start());
    return () => loops.forEach(loop => loop.stop());
  }, [animations]);

  return (
    <View
      style={StyleSheet.flatten([dotsStyles.container, style]) as StyleProp<ViewStyle>}
      accessibilityRole="progressbar"
      accessibilityLabel="Carregando"
    >
      {animations.map((value, index) => (
        <Animated.View
          key={index}
          style={[
            dotsStyles.dot,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: color,
              opacity: value.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
              }),
              transform: [
                {
                  translateY: value.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -size / 2],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  );
};

Dots.displayName = 'Dots';

const dotsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginHorizontal: 2,
  },
});
