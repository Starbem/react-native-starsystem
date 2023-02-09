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
import { Text as NativeText, StyleSheet, } from 'react-native';
import { colors } from '../config';
import { patchWebProps } from '../helpers';
import normalize from '../helpers/normalizeText';
export const Text = (_a) => {
    var _b;
    var { color = 'black', style = {}, h1 = false, h2 = false, h3 = false, h4 = false, h5 = false, h6 = false, caption = false, overline = false, h1Style = {}, h2Style = {}, h3Style = {}, h4Style = {}, h5Style = {}, h6Style = {}, captionStyle = {}, overlineStyle = {}, children = '', allowFontScaling = false, theme } = _a, rest = __rest(_a, ["color", "style", "h1", "h2", "h3", "h4", "h5", "h6", "caption", "overline", "h1Style", "h2Style", "h3Style", "h4Style", "h5Style", "h6Style", "captionStyle", "overlineStyle", "children", "allowFontScaling", "theme"]);
    return (<NativeText accessibilityRole="text" allowFontScaling={allowFontScaling} style={StyleSheet.flatten([
        {
            color: color ? colors[color] : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black,
        },
        style,
        (h1 || h2 || h3 || h4 || h5 || h6 || caption || overline) &&
            h1 &&
            StyleSheet.flatten([{ fontSize: normalize(36) }, h1Style]),
        h2 && StyleSheet.flatten([{ fontSize: normalize(30) }, h2Style]),
        h3 && StyleSheet.flatten([{ fontSize: normalize(24) }, h3Style]),
        h4 && StyleSheet.flatten([{ fontSize: normalize(18) }, h4Style]),
        h5 && StyleSheet.flatten([{ fontSize: normalize(16) }, h5Style]),
        h6 && StyleSheet.flatten([{ fontSize: normalize(14) }, h6Style]),
        caption &&
            StyleSheet.flatten([{ fontSize: normalize(12) }, captionStyle]),
        overline &&
            StyleSheet.flatten([{ fontSize: normalize(10) }, overlineStyle]),
    ])} {...patchWebProps(rest)}>
      {children}
    </NativeText>);
};
Text.displayName = 'Text';
