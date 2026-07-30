import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {color as toColor, renderNode, StarFunctionComponent} from '../helpers';

export type BadgeProps = {
  /** Style for the container. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Additional styling for badge (background) view component. */
  badgeStyle?: StyleProp<ViewStyle>;
  /** Extra props for text component. */
  textProps?: TextProps;
  /** Extra styling for icon component. */
  textStyle?: StyleProp<TextStyle>;
  /** Text value to be displayed by badge, defaults to empty. */
  value?: React.ReactNode;
  /** Function called when pressed on the badge. */
  onPress?: (...args: any[]) => any;
  /** Custom component to replace the badge outer component. */
  Component?: typeof React.Component;
  /** Determines color of the indicator. */
  status?:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'secondaryLight'
    | 'white'
    | 'black'
    | 'grey0'
    | 'grey1'
    | 'grey2'
    | 'grey3'
    | 'grey4'
    | 'grey5'
    | 'success'
    | 'warning'
    | 'error';
  /** `solid` (default, existing look) or `subtle` — tinted background, matches DS's subtle badge. */
  variant?: 'solid' | 'subtle';
};

export const Badge: StarFunctionComponent<BadgeProps> = ({
  containerStyle,
  textStyle,
  textProps,
  badgeStyle,
  onPress,
  Component = onPress ? TouchableOpacity : View,
  value,
  theme,
  status = 'primary',
  variant = 'solid',
  ...props
}) => {
  const base = theme?.colors?.[status] ?? '#000';
  const isSubtle = variant === 'subtle';
  const backgroundColor = isSubtle ? toColor(base).lightness(92).string() : base;
  const textColor = isSubtle ? toColor(base).darken(0.3).string() : 'white';

  const element = renderNode(Text, value, {
    style: StyleSheet.flatten([
      styles.text,
      isSubtle && {color: textColor},
      textStyle && textStyle,
    ]),
    ...textProps,
  });
  return (
    <View
      testID="STAR__Badge__Container"
      style={StyleSheet.flatten([containerStyle && containerStyle])}
    >
      <Component
        {...props}
        testID="STAR__Badge"
        style={StyleSheet.flatten([
          {
            alignSelf: 'center',
            minWidth: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor,
            borderWidth: isSubtle ? 0 : StyleSheet.hairlineWidth,
            borderColor: '#fff',
          },
          !element && styles.miniBadge,
          badgeStyle && badgeStyle,
        ])}
        onPress={onPress}
      >
        {element}
      </Component>
    </View>
  );
};

const size = 18;
const miniSize = 8;

const styles = StyleSheet.create({
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: miniSize,
    height: miniSize,
    borderRadius: miniSize / 2,
  },
  text: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4,
  },
});

Badge.displayName = 'Badge';
