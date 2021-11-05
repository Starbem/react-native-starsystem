import { ButtonProps } from '../Button';
import { StarFunctionComponent } from '../helpers';
export declare type TabItemProps = ButtonProps & {
    childs?: number;
    /** Allows to define if TabItem is active. */
    active?: boolean;
    /** Define the background for active tab */
    activeColor?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
    /** Define the background Variant. */
    titleColor?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
};
export declare const TabItem: StarFunctionComponent<TabItemProps>;
