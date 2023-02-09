import React from 'react';
import { StyleProp, TouchableHighlightProps, ViewStyle } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type ListItemBaseProps = TouchableHighlightProps & {
    /** Additional main container styling. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Specific styling to be used when list item is disabled. */
    disabledStyle?: StyleProp<ViewStyle>;
    /** Add divider at the top of the list item. */
    topDivider?: boolean;
    /** Add divider at the bottom of the list item. */
    bottomDivider?: boolean;
    /** Adds spacing between the leftComponent, the title component & right component. */
    pad?: number;
    /** Replace element with custom element. */
    Component?: typeof React.Component;
    /** Container for linear gradien. */
    ViewComponent?: typeof React.Component;
    /** Props for linear gradient component. */
    linearGradientProps?: any;
    /** Add enclosed childrens. */
    children?: any;
};
export declare const ListItemBase: StarFunctionComponent<ListItemBaseProps>;
