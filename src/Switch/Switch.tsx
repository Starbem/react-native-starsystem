import React from 'react';
import {
  Switch as NativeSwitch,
  SwitchProps as NativeSwitchProps,
  Platform,
  ColorValue,
} from 'react-native';
import {colors} from '../config';
import {StarFunctionComponent} from '../helpers';

export type SwitchProps = NativeSwitchProps & {
  /**  The color of the Switch component. */
  color?:
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
};

export const Switch: StarFunctionComponent<SwitchProps> = ({
  value = false,
  disabled = false,
  onValueChange,
  color = 'primary',
  style,
  theme,
  ...rest
}) => {
  const switchedOnColor: ColorValue =
    color === 'primary'
      ? theme?.colors?.primary
        ? theme.colors.primary
        : ''
      : colors[color];

  const onTintColor: ColorValue =
    Platform.OS === 'ios' || !disabled
      ? switchedOnColor
      : theme?.colors?.disabled
      ? theme.colors.disabled
      : '';

  const thumbTintColor =
    Platform.OS === 'ios'
      ? undefined
      : disabled || !value
      ? theme?.colors?.disabled
      : switchedOnColor;

  const props =
    Platform.OS === 'web'
      ? {
          activeTrackColor: onTintColor,
          thumbColor: thumbTintColor,
          activeThumbColor: switchedOnColor,
        }
      : {
          thumbColor: thumbTintColor,
          trackColor: {
            true: onTintColor,
            false: '',
          },
        };

  return (
    <NativeSwitch
      testID="STAR__SWITCH"
      value={value}
      accessibilityState={{
        checked: value,
        disabled,
      }}
      disabled={disabled}
      onValueChange={disabled ? undefined : onValueChange}
      style={style}
      {...props}
      {...rest}
    />
  );
};

Switch.displayName = 'Switch';
