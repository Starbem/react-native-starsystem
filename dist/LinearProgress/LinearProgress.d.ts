import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type LinearProgressProps = ViewProps & {
    /** The value of the progress indicator for the determinate variant. Value between 0 and 1. */
    value?: number;
    /** Type of button. */
    variant?: 'determinate' | 'indeterminate';
    /** Color for linear progress. */
    color?: 'primary' | 'secondary' | string;
    /** Track color for linear progress. */
    trackColor?: string;
    /** Add additional styling for linear progress component. */
    style?: StyleProp<ViewStyle>;
    /** Animation duration */
    animation?: {
        duration?: number;
    } | boolean;
};
export declare const LinearProgress: StarFunctionComponent<LinearProgressProps>;
