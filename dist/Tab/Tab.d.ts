import { StyleProp, ViewStyle, ViewProps } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type TabBaseProps = ViewProps & {
    /** Child position index value. */
    value?: number;
    /** On Index Change Callback. */
    onChange?: (value: number) => void;
    /** Disable the indicator below. */
    disableIndicator?: boolean;
    /** Additional styling for tab indicator. */
    indicatorStyle?: StyleProp<ViewStyle>;
    /** Define the background Variant. */
    variant?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
};
export declare const TabBase: StarFunctionComponent<TabBaseProps>;
