/// <reference types="react" />
import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import { getBottomSpace, getStatusBarHeight, ifIphoneX, isIphoneX } from './iphoneX';
import { ThemeProps } from '../config';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
export declare type StarFunctionComponent<T> = React.FunctionComponent<T & Partial<ThemeProps<T>>>;
export declare const patchWebProps: <T extends Record<any, any>>({ ...rest }: T) => T;
export { renderNode, getIconType, normalizeText, getBottomSpace, getStatusBarHeight, ifIphoneX, isIphoneX, ScreenWidth, ScreenHeight, isIOS, color, };
