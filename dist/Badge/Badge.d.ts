import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type BadgeProps = {
    /** Style for the container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Additional styling for badge (background) view component. */
    badgeStyle?: StyleProp<ViewStyle>;
    /** Extra props for text component. */
    textProps?: TextProps;
    /** Extra styling for icon component. */
    textStyle?: StyleProp<TextStyle>;
    /** Text value to be displayed by badge, defaults to empty. */
    value?: React.ReactNode;
    /** Function called when pressed on the badge. */
    onPress?: (...args: any[]) => any;
    /** Custom component to replace the badge outer component. */
    Component?: typeof React.Component;
    /** Determines color of the indicator. */
    status?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
};
export declare const Badge: StarFunctionComponent<BadgeProps>;
