import { StyleProp, ViewStyle } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type CardBaseProps = {
    /** Outer container style. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Inner container style. */
    wrapperStyle?: StyleProp<ViewStyle>;
};
export declare const CardBase: StarFunctionComponent<CardBaseProps>;
