import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Icon from '../Icon';
import {StarFunctionComponent} from '../helpers';
import {radius} from '../config/tokens';

const SIZES = {sm: 32, md: 40, lg: 48};
const ICON_SIZES = {sm: 16, md: 20, lg: 24};

export type IconButtonProps = TouchableOpacityProps & {
  /** MaterialIcons glyph name. */
  icon: string;
  variant?: 'ghost' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded (pill) instead of the default rounded-square. */
  pill?: boolean;
  /** Uses the filled icon variant when supported by the icon set. */
  fill?: boolean;
  /** Accessibility label / tooltip text. */
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const IconButton: StarFunctionComponent<IconButtonProps> = ({
  icon,
  variant = 'ghost',
  size = 'md',
  pill = false,
  fill = false,
  label,
  theme,
  containerStyle,
  ...rest
}) => {
  const dimension = SIZES[size];
  const iconSize = ICON_SIZES[size];
  const primary = theme?.colors?.primary ?? '#000';

  const variantStyle: StyleProp<ViewStyle> =
    variant === 'solid'
      ? {backgroundColor: primary}
      : variant === 'outline'
        ? {borderWidth: 1, borderColor: primary}
        : {};

  const iconColor = variant === 'solid' ? '#fff' : primary;

  return (
    <TouchableOpacity
      testID="STAR__IconButton"
      accessibilityRole="button"
      accessibilityLabel={label}
      {...rest}
      style={StyleSheet.flatten([
        styles.container,
        {
          width: dimension,
          height: dimension,
          borderRadius: pill ? radius.full : radius.md,
        },
        variantStyle,
        containerStyle,
      ])}
    >
      <Icon
        name={icon}
        type="material"
        size={iconSize}
        color={iconColor}
        solid={fill}
      />
    </TouchableOpacity>
  );
};

IconButton.displayName = 'IconButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
