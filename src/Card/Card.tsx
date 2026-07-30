import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import {radius, spacing, shadows, semanticColors} from '../config/tokens';

export type CardBaseProps = {
  /** Outer container style. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Inner container style. */
  wrapperStyle?: StyleProp<ViewStyle>;
  /** `border` (default, 1px hairline) or `shadow` (elevated, no border) — matches DS Card. */
  elevation?: 'border' | 'shadow';
};

export const CardBase: StarFunctionComponent<CardBaseProps> = ({
  children,
  containerStyle,
  wrapperStyle,
  elevation = 'border',
  theme,
  ...attributes
}) => {
  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        {
          backgroundColor: theme?.colors?.white,
          borderRadius: radius.lg,
          padding: spacing[6],
          margin: spacing[4],
          marginBottom: 0,
        },
        elevation === 'border'
          ? {borderWidth: 1, borderColor: semanticColors.borderSubtle}
          : shadows.lg,
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },
});

CardBase.displayName = 'Card';
