import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Animated,
  Platform,
  ViewProps,
} from 'react-native';
import Color from 'color';
import TextElement from '../Text';
import {StarFunctionComponent} from '../helpers';
import {semanticColors, spacing} from '../config/tokens';

const clamp = (value: number): number => Math.max(0, Math.min(value, 1));

const SIZES = {sm: 4, md: 8, lg: 12};

export type LinearProgressProps = ViewProps & {
  /** The value of the progress indicator for the determinate variant. Value between 0 and 1. */
  value?: number;
  /** Type of button. */
  variant?: 'determinate' | 'indeterminate';
  /** Color for linear progress. Ignored if `tone` is set. */
  color?: 'primary' | 'secondary' | string;
  /** Semantic tone — matches DS. Takes priority over `color` when set. */
  tone?: 'primary' | 'success' | 'warning' | 'error';
  /** Track color for linear progress. */
  trackColor?: string;
  /** Bar height — `sm` 4px (default, prior behavior) · `md` 8px · `lg` 12px. */
  size?: 'sm' | 'md' | 'lg';
  /** Caption row under the bar. */
  label?: string;
  /** Shows the rounded percentage in the caption row (ignored while indeterminate). */
  showValue?: boolean;
  /** Add additional styling for linear progress component. */
  style?: StyleProp<ViewStyle>;
  /** Animation duration */
  animation?:
    | {
        duration?: number;
      }
    | boolean;
};

export const LinearProgress: StarFunctionComponent<LinearProgressProps> = ({
  value,
  variant = value === undefined ? 'indeterminate' : 'determinate',
  color = 'secondary',
  tone,
  size = 'sm',
  label,
  showValue = false,
  style,
  theme,
  trackColor,
  animation = {duration: 2000},
  ...props
}) => {
  const [width, setWidth] = React.useState<number>(0);

  const {current: transition} = React.useRef<Animated.Value>(
    new Animated.Value(0),
  );

  const intermediate = React.useRef<Animated.CompositeAnimation | undefined>(
    undefined,
  );

  const startAnimation = React.useCallback(() => {
    if (variant === 'indeterminate') {
      intermediate.current = Animated.timing(transition, {
        duration: typeof animation !== 'boolean' ? animation.duration : 2000,
        toValue: 1,
        useNativeDriver: true,
        isInteraction: false,
      });
      transition.setValue(0);
      Animated.loop(intermediate.current).start();
    } else {
      Animated.timing(transition, {
        duration: typeof animation !== 'boolean' ? animation.duration : 1000,
        toValue: value || 0,
        useNativeDriver: Platform.OS !== 'web',
        isInteraction: false,
      }).start();
    }
  }, [variant, transition, animation, value]);

  const tintColor = tone
    ? theme?.colors?.[tone]
    : color === 'secondary' || color === 'primary'
      ? theme?.colors?.[color]
      : Color(color).rgb().string() || theme?.colors?.secondary;

  const trackTintColor =
    trackColor || Color(tintColor).alpha(0.4).rgb().string();

  React.useEffect(() => {
    if (animation) {
      startAnimation();
    }
  }, [animation, startAnimation]);

  const barHeight = SIZES[size];

  return (
    <View testID="STAR__LinearProgress_Container">
      <View
        testID="STAR__LinearProgress_Bar"
        accessible
        accessibilityRole="progressbar"
        accessibilityValue={{
          now: clamp(value || 0),
          min: 0,
          max: 1,
        }}
        {...props}
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
        }}
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            height: barHeight,
            borderRadius: barHeight / 2,
            overflow: 'hidden',
            width: '100%',
            backgroundColor: trackTintColor,
            position: 'relative',
          },
          style,
        ]}
      >
        {animation ? (
          <Animated.View
            testID="STAR__LinearProgress_Progress"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              transform: [
                {
                  translateX: transition.interpolate(
                    variant === 'indeterminate'
                      ? {
                          inputRange: [0, 1],
                          outputRange: [-width, 0.5 * width],
                        }
                      : {
                          inputRange: [0, 1],
                          outputRange: [-0.5 * width, 0],
                        },
                  ),
                },
                {
                  scaleX: transition.interpolate(
                    variant === 'indeterminate'
                      ? {
                          inputRange: [0, 0.5, 1],
                          outputRange: [0.0001, 1, 0.001],
                        }
                      : {
                          inputRange: [0, 1],
                          outputRange: [0.0001, 1],
                        },
                  ),
                },
              ],
              backgroundColor: tintColor as string,
              flex: 1,
            }}
          />
        ) : (
          <View
            testID="STAR__LinearProgress_Progress"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              width: width * clamp(value || 0),
              backgroundColor: tintColor as string,
            }}
          />
        )}
      </View>
      {(label || showValue) && (
        <View style={captionStyles.row}>
          {label && <TextElement style={captionStyles.text}>{label}</TextElement>}
          {showValue && variant !== 'indeterminate' && (
            <TextElement style={captionStyles.text}>
              {Math.round(clamp(value || 0) * 100)}%
            </TextElement>
          )}
        </View>
      )}
    </View>
  );
};

const captionStyles = {
  row: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    marginTop: spacing[1],
  },
  text: {
    fontSize: 12,
    color: semanticColors.textSecondary,
  },
};

LinearProgress.displayName = 'LinearProgress';
