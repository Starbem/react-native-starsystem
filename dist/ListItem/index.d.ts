/// <reference types="react" />
import { ListItemBaseProps } from './ListItem';
import { ListItemSwipeableProps } from './ListItem.Swipeable';
import { ListItemAccordionProps } from './ListItem.Accordion';
import { StarFunctionComponent } from '../helpers';
declare const ThemedListItemContent: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    color?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "white" | "black" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "success" | "warning" | "error";
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    caption?: boolean;
    overline?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h5Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h6Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    overlineStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    allowFontScaling?: boolean;
} & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "color" | "right" | "overline" | "h1Style" | "h2Style" | "h3Style" | "h4Style" | "h5Style" | "h6Style" | "captionStyle" | "overlineStyle">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    color?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "white" | "black" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "success" | "warning" | "error";
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    caption?: boolean;
    overline?: boolean;
    h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h5Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    h6Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    overlineStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
    allowFontScaling?: boolean;
} & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
declare const ThemedListItemChevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "reverse" | "style" | "onLayout" | "borderRadius" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "type" | "name" | "size" | "color" | "iconStyle" | "iconProps" | "underlayColor" | "raised" | "containerStyle" | "reverseColor" | "disabled" | "disabledStyle" | "Component" | "background" | "useForeground" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "solid" | "brand" | "backgroundColor">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
declare const ThemedListItemTitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
    right?: boolean;
}>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
    right?: boolean;
}>>>;
declare const ThemedListItemSubtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
    right?: boolean;
} & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
declare const ThemedListItemSwipeable: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "leftStyle" | "rightStyle" | "leftContent" | "rightContent" | "leftWidth" | "rightWidth" | "onLeftSwipe" | "onRightSwipe">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    leftContent?: import("react").ReactNode;
    rightContent?: import("react").ReactNode;
    leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onLeftSwipe?: () => any;
    onRightSwipe?: () => any;
} & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
declare const ThemedListItemAccordion: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("../Icon").IconNode;
    expandIcon?: import("../Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "timing" | "spring";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "animation" | "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "icon" | "content" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "isExpanded" | "expandIcon" | "noRotation" | "noIcon">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: import("../Icon").IconNode;
    expandIcon?: import("../Icon").IconNode;
    content?: import("react").ReactNode;
    noRotation?: boolean;
    noIcon?: boolean;
    animation?: boolean | {
        type?: "timing" | "spring";
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
export declare type ListItemProps = StarFunctionComponent<ListItemBaseProps> & {
    Accordion: typeof ThemedListItemAccordion;
    Chevron: typeof ThemedListItemChevron;
    Content: typeof ThemedListItemContent;
    Title: typeof ThemedListItemTitle;
    Subtitle: typeof ThemedListItemSubtitle;
    Swipeable: typeof ThemedListItemSwipeable;
};
export declare const ListItem: ListItemProps;
export type { ListItemAccordionProps, ListItemSwipeableProps };
declare const ThemedListItem: (import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>, "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider">> & {
    Accordion: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "animation" | "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "icon" | "content" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "isExpanded" | "expandIcon" | "noRotation" | "noIcon">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "reverse" | "style" | "onLayout" | "borderRadius" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "type" | "name" | "size" | "color" | "iconStyle" | "iconProps" | "underlayColor" | "raised" | "containerStyle" | "reverseColor" | "disabled" | "disabledStyle" | "Component" | "background" | "useForeground" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "solid" | "brand" | "backgroundColor">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
    Content: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        color?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "white" | "black" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "success" | "warning" | "error";
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h5?: boolean;
        h6?: boolean;
        caption?: boolean;
        overline?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h5Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h6Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        overlineStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        allowFontScaling?: boolean;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "color" | "right" | "overline" | "h1Style" | "h2Style" | "h3Style" | "h4Style" | "h5Style" | "h6Style" | "captionStyle" | "overlineStyle">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        color?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "white" | "black" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "success" | "warning" | "error";
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h5?: boolean;
        h6?: boolean;
        caption?: boolean;
        overline?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h5Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h6Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        overlineStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        allowFontScaling?: boolean;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
    Title: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
    Swipeable: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "leftStyle" | "rightStyle" | "leftContent" | "rightContent" | "leftWidth" | "rightWidth" | "onLeftSwipe" | "onRightSwipe">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
}) | (import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof import("react").Component;
    ViewComponent?: typeof import("react").Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemBaseProps>>> & {
    Accordion: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, "animation" | "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "icon" | "content" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "isExpanded" | "expandIcon" | "noRotation" | "noIcon">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../Icon").IconNode;
        expandIcon?: import("../Icon").IconNode;
        content?: import("react").ReactNode;
        noRotation?: boolean;
        noIcon?: boolean;
        animation?: boolean | {
            type?: "timing" | "spring";
            duration?: number;
        };
    } & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
    Chevron: import("react").FunctionComponent<Pick<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, "reverse" | "style" | "onLayout" | "borderRadius" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "type" | "name" | "size" | "color" | "iconStyle" | "iconProps" | "underlayColor" | "raised" | "containerStyle" | "reverseColor" | "disabled" | "disabledStyle" | "Component" | "background" | "useForeground" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "solid" | "brand" | "backgroundColor">> | import("react").ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
    Content: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        color?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "white" | "black" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "success" | "warning" | "error";
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h5?: boolean;
        h6?: boolean;
        caption?: boolean;
        overline?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h5Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h6Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        overlineStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        allowFontScaling?: boolean;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "color" | "right" | "overline" | "h1Style" | "h2Style" | "h3Style" | "h4Style" | "h5Style" | "h6Style" | "captionStyle" | "overlineStyle">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        color?: "primary" | "primaryLight" | "secondary" | "secondaryLight" | "white" | "black" | "grey0" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "success" | "warning" | "error";
        style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h5?: boolean;
        h6?: boolean;
        caption?: boolean;
        overline?: boolean;
        h1Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h2Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h3Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h4Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h5Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        h6Style?: import("react-native").StyleProp<import("react-native").TextStyle>;
        captionStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        overlineStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        allowFontScaling?: boolean;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Content").ListItemContentProps>>>;
    Title: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: import("react").FunctionComponent<Pick<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>, "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "android_hyphenationFrequency" | "right">> | import("react").ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("./ListItem.Subtitle").ListItemSubtitleProps>>>;
    Swipeable: import("react").FunctionComponent<Pick<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>, "children" | "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "underlayColor" | "containerStyle" | "disabled" | "disabledStyle" | "Component" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "touchSoundDisabled" | "activeOpacity" | "onHideUnderlay" | "onShowUnderlay" | "linearGradientProps" | "ViewComponent" | "pad" | "bottomDivider" | "topDivider" | "leftStyle" | "rightStyle" | "leftContent" | "rightContent" | "leftWidth" | "rightWidth" | "onLeftSwipe" | "onRightSwipe">> | import("react").ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
        containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof import("react").Component;
        ViewComponent?: typeof import("react").Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        leftContent?: import("react").ReactNode;
        rightContent?: import("react").ReactNode;
        leftStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        rightStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        leftWidth?: number;
        rightWidth?: number;
        onLeftSwipe?: () => any;
        onRightSwipe?: () => any;
    } & Partial<import("../config").ThemeProps<ListItemSwipeableProps>>>;
});
export default ThemedListItem;
