import React from 'react';
import {
  Text,
  View,
  TextInput,
  Animated,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import {renderNode, patchWebProps} from '../helpers';
import {fonts} from '../config';
import Icon, {IconNode} from '../Icon';
import {ThemeProps, colors} from '../config';

const renderText = (content: any, defaultProps: any, style: StyleProp<any>) =>
  renderNode(Text, content, {
    ...defaultProps,
    allowFontScaling: false,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledInputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: IconNode;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: IconNode;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  InputComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
  errorProps?: object;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  label?: string | React.ReactNode;
  labelColor?:
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
  labelStyle?: StyleProp<TextStyle>;
  labelProps?: object;
  renderErrorMessage?: boolean;
  value?: string;
};

export const Input: StarFunctionComponent<
  InputProps & Partial<ThemeProps<InputProps>>
> = ({
  containerStyle,
  disabled,
  disabledInputStyle,
  inputContainerStyle,
  leftIcon,
  leftIconContainerStyle,
  rightIcon,
  rightIconContainerStyle = {},
  InputComponent = TextInput,
  inputStyle = {},
  errorProps = {},
  errorStyle = {},
  errorMessage,
  label,
  labelColor,
  labelStyle,
  labelProps,
  theme,
  renderErrorMessage = true,
  style,
  value,
  ...props
}) => {
  const input = React.useRef<any>(null);
  const shakeAnimationValue = new Animated.Value(0);

  const translateX = shakeAnimationValue.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [0, -15, 0, 15, 0, -15, 0],
  });

  const hideErrorMessage = !renderErrorMessage && !errorMessage;

  return (
    <View
      testID="STAR__Input__view-wrapper"
      style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Animated.View
        style={StyleSheet.flatten([
          {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.grey3,
            borderRadius: 8,
            paddingHorizontal: 16,
          },
          inputContainerStyle,
          {transform: [{translateX}]},
        ])}>
        {leftIcon && (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              leftIconContainerStyle,
            ])}>
            {renderNode(Icon, leftIcon)}
          </View>
        )}

        <View>
          {label &&
            renderText(
              label,
              {style: labelStyle, ...labelProps},
              {
                fontSize: 12,
                marginTop: 10,
                marginBottom: -13,
                color: labelColor ? colors[labelColor] : theme?.colors?.grey3,
                ...Platform.select({
                  android: {
                    ...fonts.android.bold,
                  },
                  default: {
                    fontWeight: 'bold',
                  },
                }),
              },
            )}
          <InputComponent
            testID="STAR__Input__text-input"
            underlineColorAndroid="transparent"
            editable={!disabled}
            ref={input}
            value={value}
            allowFontScaling={false}
            style={StyleSheet.flatten([
              {
                color: theme?.colors?.black,
                fontSize: 14,
                minHeight: 48,
              },
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
              style,
            ])}
            placeholderTextColor={theme?.colors?.grey3}
            {...patchWebProps(props)}
          />
        </View>

        {rightIcon && (
          <View
            style={StyleSheet.flatten([
              styles.iconContainer,
              rightIconContainerStyle,
            ])}>
            {renderNode(Icon, rightIcon)}
          </View>
        )}
      </Animated.View>

      <Text
        {...errorProps}
        allowFontScaling={false}
        style={StyleSheet.flatten([
          {
            margin: 5,
            fontSize: 12,
            color: theme?.colors?.error,
          },
          errorStyle && errorStyle,
          hideErrorMessage && {
            height: 0,
            margin: 0,
            padding: 0,
          },
        ])}>
        {errorMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
  },
  disabledInput: {
    opacity: 0.5,
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
    marginVertical: 4,
  },
});

Input.displayName = 'Input';
