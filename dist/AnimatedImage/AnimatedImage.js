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
import * as Animatable from 'react-native-animatable';
export const AnimatedImage = (_a) => {
    var { animation, duration, delay, direction, easing, useNativeDriver } = _a, props = __rest(_a, ["animation", "duration", "delay", "direction", "easing", "useNativeDriver"]);
    return (<Animatable.Image {...props} style={[styles.container, props.style]} animation={animation} duration={duration} delay={delay} direction={direction} easing={easing} useNativeDriver={useNativeDriver}/>);
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});
AnimatedImage.displayName = 'AnimatedImage';
