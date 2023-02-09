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
import { View, StyleSheet } from 'react-native';
import { AnimatedView } from '../';
import { colors } from '../config';
import { ScreenHeight, getStatusBarHeight, getBottomSpace, } from '../helpers';
export const ContentBoxBase = (_a) => {
    var { topContent, centerContent, bottomContent, style } = _a, animation = __rest(_a, ["topContent", "centerContent", "bottomContent", "style"]);
    return (<AnimatedView style={[styles.container, style]} {...animation}>
      <View style={styles.content}>{topContent}</View>
      <View style={styles.content}>{centerContent}</View>
      <View style={styles.content}>{bottomContent}</View>
    </AnimatedView>);
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 156,
        maxHeight: ScreenHeight - getStatusBarHeight(true) - 65,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: getBottomSpace() + 10,
        justifyContent: 'flex-end',
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        width: '100%',
        paddingVertical: 8,
    },
});
ContentBoxBase.displayName = 'ContentBox';
