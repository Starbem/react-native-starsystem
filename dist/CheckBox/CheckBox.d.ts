import React from 'react';
import { TextProps, TextStyle, ViewStyle, StyleProp, TouchableOpacityProps } from 'react-native';
import { CheckBoxIconProps } from './components/CheckBoxIcon';
import { StarFunctionComponent } from '../helpers';
export declare type CheckBoxProps = TouchableOpacityProps & CheckBoxIconProps & {
    /** Specify React Native component for main button. */
    Component?: typeof React.Component;
    /** Moves icon to right of text. */
    iconRight?: boolean;
    /** Title of checkbox. */
    title?: string | React.ReactElement<{}>;
    /** Additional props for the title Text component. */
    titleProps?: TextProps;
    /** Aligns checkbox to center. */
    center?: boolean;
    /** Aligns checkbox to right. */
    right?: boolean;
    /** Style of main container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Style for the wrapper of checkbox. */
    wrapperStyle?: StyleProp<ViewStyle>;
    /** Style of text. */
    textStyle?: StyleProp<TextStyle>;
    /** Specify a custom checked message. */
    checkedTitle?: string;
    /** Specify different font family. */
    fontFamily?: string;
};
export declare const CheckBox: StarFunctionComponent<CheckBoxProps>;
