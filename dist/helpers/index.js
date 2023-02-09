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
import { Platform, Dimensions } from 'react-native';
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import { getBottomSpace, getStatusBarHeight, ifIphoneX, isIphoneX, } from './iphoneX';
const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
export const patchWebProps = (_a) => {
    var rest = __rest(_a, []);
    return rest;
};
export { renderNode, getIconType, normalizeText, getBottomSpace, getStatusBarHeight, ifIphoneX, isIphoneX, ScreenWidth, ScreenHeight, isIOS, color, };
