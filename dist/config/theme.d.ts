import { AvatarProps, AccessoryProps } from '../Avatar';
import { BadgeProps } from '../Badge';
import { BottomSheetProps } from '../BottomSheet';
import { ButtonProps } from '../Button';
import { CardProps } from '../Card';
import { CheckBoxProps } from '../CheckBox';
import { ContentBoxProps } from '../ContentBox';
import { DividerProps } from '../Divider';
import { HeaderProps } from '../Header';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { InputProps } from '../Input';
import { LinearProgressProps } from '../LinearProgress';
import { ListItemProps, ListItemAccordionProps } from '../ListItem';
import { SwitchProps } from '../Switch';
import { TabItemProps, TabProps } from '../Tab';
import { TabViewProps } from '../TabView';
import { TextProps } from '../Text';
import { ViewProps } from 'react-native';
import { Colors } from './colors';
import { Fonts } from './fonts';
declare const _default: {
    colors: Colors;
    fonts: {
        android: {
            regular: {
                fontFamily: string;
                fontWeight: string;
            };
            light: {
                fontFamily: string;
                fontWeight: string;
            };
            condensed: {
                fontFamily: string;
                fontWeight: string;
            };
            condensed_light: {
                fontFamily: string;
                fontWeight: string;
            };
            black: {
                fontFamily: string;
                fontWeight: string;
            };
            thin: {
                fontFamily: string;
                fontWeight: string;
            };
            medium: {
                fontFamily: string;
                fontWeight: string;
            };
            bold: {
                fontFamily: string;
                fontWeight: string;
            };
        };
        default: {
            regular: {
                fontFamily: string;
                fontWeight: string;
            };
            bold: {
                fontFamily: string;
                fontWeight: string;
            };
        };
    };
};
export default _default;
declare type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export interface FullTheme {
    Avatar: Partial<AvatarProps>;
    AvatarAccessory: Partial<AccessoryProps>;
    Badge: Partial<BadgeProps>;
    BottomSheet: Partial<BottomSheetProps>;
    Button: Partial<ButtonProps>;
    Card: Partial<CardProps>;
    CardDivider: Partial<DividerProps>;
    CardFeaturedSubtitle: Partial<TextProps>;
    CardFeaturedTitle: Partial<TextProps>;
    CardImage: Partial<ImageProps>;
    CardTitle: Partial<TextProps>;
    CheckBox: Partial<CheckBoxProps>;
    ContentBox: Partial<ContentBoxProps>;
    Divider: Partial<DividerProps>;
    Header: Partial<HeaderProps>;
    Icon: Partial<IconProps>;
    Image: Partial<ImageProps>;
    Input: Partial<InputProps>;
    LinearProgress: Partial<LinearProgressProps>;
    ListItem: Partial<ListItemProps>;
    ListItemAccordion: Partial<ListItemAccordionProps>;
    ListItemCheckBox: Partial<CheckBoxProps>;
    ListItemChevron: Partial<IconProps>;
    ListItemContent: Partial<ViewProps>;
    ListItemInput: Partial<InputProps>;
    ListItemSubtitle: Partial<TextProps>;
    ListItemTitle: Partial<TextProps>;
    Switch: Partial<SwitchProps>;
    Tab: Partial<TabProps>;
    TabItem: Partial<TabItemProps>;
    TabView: Partial<TabViewProps>;
    TabViewItem: Partial<ViewProps>;
    Text: Partial<TextProps>;
    colors: RecursivePartial<Colors>;
    fonts: RecursivePartial<Fonts>;
}
export declare type Theme<T = {}> = Partial<FullTheme> & T;
export declare type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;
export declare type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void;
