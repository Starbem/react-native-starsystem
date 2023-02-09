import { TextProps } from 'react-native';
import { StarFunctionComponent } from '../helpers';
declare type TitleProps = TextProps & {
    /**Add right title. */
    right?: boolean;
};
export declare const ListItemTitle: StarFunctionComponent<TitleProps>;
export {};
