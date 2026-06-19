import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {StarFunctionComponent, renderNode} from '../helpers';
import Icon, {IconNode} from '../Icon';

const SIZES = {
  small: {height: 36, paddingHorizontal: 16, fontSize: 14, iconSize: 16, borderRadius: 18},
  medium: {height: 48, paddingHorizontal: 20, fontSize: 16, iconSize: 20, borderRadius: 24},
  large: {height: 56, paddingHorizontal: 24, fontSize: 18, iconSize: 22, borderRadius: 28},
};

export type ButtonLiquidGlassProps = TouchableOpacityProps & {
  /** Button label. */
  title?: string;
  /** Icon node (same format as Button). Displayed on the left by default. */
  icon?: IconNode;
  /** Place icon to the right of the title. */
  iconRight?: boolean;
  /** Show loading spinner. */
  loading?: boolean;
  /** Style the outer container. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style the touchable button. */
  buttonStyle?: StyleProp<ViewStyle>;
  /** Style the button label. */
  titleStyle?: StyleProp<TextStyle>;
  /** Button size preset. */
  size?: 'small' | 'medium' | 'large';
  /** Tint color for the label and icon. Defaults to theme primary. */
  tintColor?: string;
};

export const ButtonLiquidGlass: StarFunctionComponent<ButtonLiquidGlassProps> = ({
  title,
  icon,
  iconRight = false,
  loading = false,
  disabled = false,
  containerStyle,
  buttonStyle,
  titleStyle,
  size = 'medium',
  tintColor,
  onPress,
  theme,
  ...rest
}) => {
  const sizeConfig = SIZES[size];
  const resolvedTint = tintColor ?? theme?.colors?.primary ?? '#FF6B19';

  return (
    <View
      style={[
        styles.container,
        {borderRadius: sizeConfig.borderRadius},
        containerStyle,
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        accessibilityRole="button"
        style={[
          styles.button,
          {
            height: sizeConfig.height,
            paddingHorizontal: sizeConfig.paddingHorizontal,
            borderRadius: sizeConfig.borderRadius,
          },
          disabled && styles.disabled,
          buttonStyle,
        ]}
        {...rest}
      >
        {/* Simulated top specular highlight — replaces BlurView (not available as dep) */}
        <View
          style={[styles.highlight, {borderRadius: sizeConfig.borderRadius}]}
          pointerEvents="none"
        />

        {loading ? (
          <ActivityIndicator size="small" color={resolvedTint} />
        ) : (
          <>
            {!iconRight &&
              icon &&
              renderNode(Icon, icon, {size: sizeConfig.iconSize, color: resolvedTint})}
            {title && (
              <Text
                style={[
                  styles.title,
                  {fontSize: sizeConfig.fontSize, color: resolvedTint},
                  titleStyle,
                ]}
              >
                {title}
              </Text>
            )}
            {iconRight &&
              icon &&
              renderNode(Icon, icon, {size: sizeConfig.iconSize, color: resolvedTint})}
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.15)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    gap: 8,
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    pointerEvents: 'none',
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
});

ButtonLiquidGlass.displayName = 'ButtonLiquidGlass';
