import { SwitchProps as NativeSwitchProps } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type SwitchProps = NativeSwitchProps & {
    /**  The color of the Switch component. */
    color?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
};
export declare const Switch: StarFunctionComponent<SwitchProps>;
