import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import Icon from '../Icon';
import TextElement from '../Text';
import {color as toColor, StarFunctionComponent} from '../helpers';
import {radius, semanticColors, spacing} from '../config/tokens';

const SIZES = {sm: 16, md: 20, lg: 24};

export type RadioProps = TouchableOpacityProps & {
  checked?: boolean;
  label?: string;
  sublabel?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Semantic color when checked — matches DS tones. */
  tone?: 'primary' | 'success' | 'accent';
  /** `default` (inline) or `card` (whole-row selectable tile). */
  variant?: 'default' | 'card';
  /** MaterialIcons glyph name, only used with `variant="card"`. */
  icon?: string;
  error?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Radio: StarFunctionComponent<RadioProps> = ({
  checked = false,
  label,
  sublabel,
  size = 'md',
  tone = 'primary',
  variant = 'default',
  icon,
  error = false,
  theme,
  containerStyle,
  ...rest
}) => {
  const dimension = SIZES[size];
  const toneColor =
    tone === 'accent'
      ? theme?.colors?.secondary
      : tone === 'success'
        ? theme?.colors?.success
        : theme?.colors?.primary;
  const errorColor = theme?.colors?.error;
  const borderColor = error
    ? errorColor
    : checked
      ? toneColor
      : semanticColors.borderDefault;

  return (
    <TouchableOpacity
      testID="STAR__Radio"
      accessibilityRole="radio"
      accessibilityState={{checked}}
      {...rest}
      style={StyleSheet.flatten([
        styles.container,
        variant === 'card' && [
          styles.card,
          {borderColor},
          checked &&
            !error && {backgroundColor: toColor(toneColor).lightness(96).string()},
        ],
        containerStyle,
      ])}
    >
      {variant === 'card' && icon && (
        <Icon
          name={icon}
          type="material"
          size={20}
          color={theme?.colors?.grey1}
          containerStyle={styles.media}
        />
      )}
      <View
        style={[
          styles.box,
          {
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            borderColor,
          },
        ]}
      >
        {checked && (
          <View
            style={[
              styles.dot,
              {
                width: dimension / 2,
                height: dimension / 2,
                borderRadius: dimension / 4,
                backgroundColor: error ? errorColor : toneColor,
              },
            ]}
          />
        )}
      </View>
      {label && (
        <View style={styles.textWrap}>
          <TextElement style={styles.label}>{label}</TextElement>
          {sublabel && <TextElement style={styles.sublabel}>{sublabel}</TextElement>}
        </View>
      )}
    </TouchableOpacity>
  );
};

Radio.displayName = 'Radio';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing[4],
  },
  media: {
    marginRight: spacing[3],
  },
  box: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {},
  textWrap: {
    marginLeft: spacing[3],
    flexShrink: 1,
  },
  label: {
    fontSize: 14,
  },
  sublabel: {
    fontSize: 12,
    color: semanticColors.textSecondary,
  },
});
