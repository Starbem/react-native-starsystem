import React from 'react';
import { ImageProps as RNImageProps, StyleProp, ViewStyle } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type ImageProps = RNImageProps & {
    /** Define the component passed to image. */
    Component?: typeof React.Component;
    /** Callback function when pressing component. */
    onPress?(): void;
    /** Callback function when long pressing component. */
    onLongPress?(): void;
    /** Specify a different component as the Image component. */
    ImageComponent?: typeof React.Component;
    /** Content to load when Image is rendering. */
    PlaceholderContent?: React.ReactElement<any>;
    /** Additional styling for the container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Additional styling for the children container. */
    childrenContainerStyle?: StyleProp<ViewStyle>;
    /** Additional styling for the placeholder container. */
    placeholderStyle?: StyleProp<ViewStyle>;
    /** Perform fade transition on image load. */
    transition?: boolean;
    /** Perform fade transition on image load. */
    transitionDuration?: number;
};
export declare const Image: StarFunctionComponent<ImageProps>;
