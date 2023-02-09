import React from 'react';
import { StyleProp, TextProps, ViewProps, StatusBarProps, StatusBarStyle, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
import { StarFunctionComponent } from '../helpers';
import { HeaderIcon } from './components/HeaderIcon';
declare type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;
export declare type HeaderProps = ViewProps & {
    /** Component for container. */
    ViewComponent?: typeof React.Component;
    /** Displays a linear gradient. See [usage](#lineargradient-usage). */
    linearGradientProps?: Object;
    /** Accepts all props for StatusBar. */
    statusBarProps?: StatusBarProps;
    /** Sets the color of the status bar text. */
    barStyle?: StatusBarStyle;
    /** Define your left component here. */
    leftComponent?: HeaderSubComponent;
    /** Define your center component here. */
    centerComponent?: HeaderSubComponent;
    /** Define your right component here. */
    rightComponent?: HeaderSubComponent;
    /** Sets backgroundColor of the parent component. */
    backgroundColor?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
    /** Sets backgroundImage for parent component. */
    backgroundImage?: ImageSourcePropType;
    /** Styling for backgroundImage in the main container. */
    backgroundImageStyle?: ImageStyle;
    /** Alignment for title. */
    placement?: 'left' | 'center' | 'right';
    /** Styling around the main container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Styling for container around the centerComponent. */
    centerContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for container around the leftComponent. */
    leftContainerStyle?: StyleProp<ViewStyle>;
    /** Styling for container around the rightComponent. */
    rightContainerStyle?: StyleProp<ViewStyle>;
    /** Add children component to the header. */
    children?: JSX.Element | JSX.Element[];
    /** Elevation for header */
    elevated?: boolean;
};
export declare const Header: StarFunctionComponent<HeaderProps>;
export {};
