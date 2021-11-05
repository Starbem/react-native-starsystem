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
import { StyleSheet } from 'react-native';
import Button from '../Button';
import { ScreenWidth } from '../helpers';
import { colors } from '../config';
import Color from 'color';
export const TabItem = (_a) => {
    var { childs = 0, active, activeColor, titleStyle, containerStyle, buttonStyle, iconPosition = 'top', title, titleColor = 'white' } = _a, props = __rest(_a, ["childs", "active", "activeColor", "titleStyle", "containerStyle", "buttonStyle", "iconPosition", "title", "titleColor"]);
    return (<Button accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityValue={typeof title === 'string' ? { text: title } : undefined} buttonStyle={[styles.buttonStyle, buttonStyle]} titleStyle={[
        styles.titleStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
            color: titleColor ? colors[titleColor] : 'white',
            paddingVertical: !props.icon ? 8 : 2,
        },
        titleStyle,
    ]} containerStyle={[
        styles.containerStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
            width: childs < 3 ? ScreenWidth / childs : ScreenWidth / 3,
            backgroundColor: active && activeColor
                ? Color(colors[activeColor]).alpha(0.2).rgb().toString()
                : 'transparent',
        },
        containerStyle,
    ]} iconPosition={iconPosition} title={title} {...props}/>);
};
const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    containerStyle: {
        flex: 1,
        height: 48,
        borderRadius: 0,
    },
    viewStyle: {
        flexDirection: 'row',
        position: 'relative',
    },
    indicator: {
        display: 'flex',
        position: 'absolute',
        height: 4,
        bottom: 0,
    },
});
TabItem.displayName = 'Tab.Item';
