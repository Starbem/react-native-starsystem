import React from 'react';
import {
  Animated,
  DimensionValue,
  Easing,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import {semanticColors} from '../config/tokens';

export type SkeletonProps = {
  /** `block` (default, sized box) | `text` (single line) | `circle`. */
  variant?: 'block' | 'text' | 'circle';
  width?: DimensionValue;
  height?: DimensionValue;
  /** Renders a stack of text lines when `variant="text"` — last line is shorter (65%). */
  lines?: number;
  radius?: number;
  style?: StyleProp<ViewStyle>;
};

const useShimmer = () => {
  const value = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(value, {
          toValue: 0,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [value]);

  return value.interpolate({inputRange: [0, 1], outputRange: [0.4, 1]});
};

export const Skeleton: StarFunctionComponent<SkeletonProps> = ({
  variant = 'block',
  width,
  height,
  lines,
  radius,
  style,
}) => {
  const opacity = useShimmer();

  if (variant === 'text' && lines && lines > 1) {
    return (
      <Animated.View
        style={StyleSheet.flatten([{opacity}, style]) as StyleProp<ViewStyle>}
        accessibilityElementsHidden
        importantForAccessibility="no"
      >
        {Array.from({length: lines}).map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.base,
              styles.text,
              {
                width: index === lines - 1 ? '65%' : '100%',
                marginBottom: index === lines - 1 ? 0 : 8,
              },
            ]}
          />
        ))}
      </Animated.View>
    );
  }

  const resolvedWidth = width ?? (variant === 'circle' ? 40 : '100%');
  const resolvedHeight =
    height ?? (variant === 'circle' ? 40 : variant === 'text' ? 16 : 16);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        styles.base,
        {
          width: resolvedWidth,
          height: resolvedHeight,
          borderRadius:
            radius ?? (variant === 'circle' ? (resolvedHeight as number) / 2 : 4),
          opacity,
        },
        style,
      ]) as StyleProp<ViewStyle>}
      accessibilityElementsHidden
      importantForAccessibility="no"
    />
  );
};

Skeleton.displayName = 'Skeleton';

const styles = StyleSheet.create({
  base: {
    backgroundColor: semanticColors.borderSubtle,
  },
  text: {
    height: 12,
    borderRadius: 4,
  },
});
