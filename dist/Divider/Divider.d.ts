import { ViewProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type DividerProps = ViewProps & {
    /**  The color of the component. */
    color?: string;
    /**  Applies inset to the divider. */
    inset?: boolean;
    /**  Applies inset to a specific direction to the divider. */
    insetType?: 'left' | 'right' | 'middle';
    /**  Applies style to the divider. */
    style?: StyleProp<ViewStyle>;
    /**  Adds subHeader text to the divider. */
    subHeader?: string;
    /**  Adds style to the subHeader text of the divider */
    subHeaderStyle?: StyleProp<TextStyle>;
    /**  Apply orientation to the divider. */
    orientation?: 'horizontal' | 'vertical';
    /**  Apply width to the divider. */
    width?: number;
};
export declare const Divider: StarFunctionComponent<DividerProps>;
