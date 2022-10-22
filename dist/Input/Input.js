var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Text, View, TextInput, Animated, Platform, StyleSheet, } from 'react-native';
import { renderNode, patchWebProps } from '../helpers';
import { fonts } from '../config';
import Icon from '../Icon';
import { colors } from '../config';
const renderText = (content, defaultProps, style) => renderNode(Text, content, Object.assign(Object.assign({}, defaultProps), { allowFontScaling: false, style: StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
export const Input = (_a) => {
    var _b, _c, _d, _e;
    var { containerStyle, disabled, disabledInputStyle, inputContainerStyle, leftIcon, leftIconContainerStyle, rightIcon, rightIconContainerStyle = {}, InputComponent = TextInput, inputStyle = {}, errorProps = {}, errorStyle = {}, errorMessage, label, labelColor, labelStyle, labelProps, theme, renderErrorMessage = true, style, value } = _a, props = __rest(_a, ["containerStyle", "disabled", "disabledInputStyle", "inputContainerStyle", "leftIcon", "leftIconContainerStyle", "rightIcon", "rightIconContainerStyle", "InputComponent", "inputStyle", "errorProps", "errorStyle", "errorMessage", "label", "labelColor", "labelStyle", "labelProps", "theme", "renderErrorMessage", "style", "value"]);
    const input = React.useRef(null);
    const shakeAnimationValue = new Animated.Value(0);
    const translateX = shakeAnimationValue.interpolate({
        inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
        outputRange: [0, -15, 0, 15, 0, -15, 0],
    });
    const hideErrorMessage = !renderErrorMessage && !errorMessage;
    return (<View testID="STAR__Input__view-wrapper" style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Animated.View style={StyleSheet.flatten([
        {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.grey3,
            borderRadius: 8,
            paddingHorizontal: 16,
        },
        inputContainerStyle,
        { transform: [{ translateX }] },
    ])}>
        {leftIcon && (<View style={StyleSheet.flatten([
        styles.iconContainer,
        leftIconContainerStyle,
    ])}>
            {renderNode(Icon, leftIcon)}
          </View>)}

        <View>
          {label &&
        renderText(label, Object.assign({ style: labelStyle }, labelProps), Object.assign({ fontSize: 12, marginTop: 10, marginBottom: -13, color: labelColor ? colors[labelColor] : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey3 }, Platform.select({
            android: Object.assign({}, fonts.android.bold),
            default: {
                fontWeight: 'bold',
            },
        })))}
          <InputComponent testID="STAR__Input__text-input" underlineColorAndroid="transparent" editable={!disabled} ref={input} value={value} allowFontScaling={false} style={StyleSheet.flatten([
        {
            color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.black,
            fontSize: 14,
            minHeight: 48,
        },
        inputStyle,
        disabled && styles.disabledInput,
        disabled && disabledInputStyle,
        style,
    ])} placeholderTextColor={(_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey3} {...patchWebProps(props)}/>
        </View>

        {rightIcon && (<View style={StyleSheet.flatten([
        styles.iconContainer,
        rightIconContainerStyle,
    ])}>
            {renderNode(Icon, rightIcon)}
          </View>)}
      </Animated.View>

      <Text {...errorProps} allowFontScaling={false} style={StyleSheet.flatten([
        {
            margin: 5,
            fontSize: 12,
            color: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.error,
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
    </View>);
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
