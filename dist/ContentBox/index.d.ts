/// <reference types="react" />
import { StarFunctionComponent } from '../helpers';
import { ContentBoxBaseProps } from './ContentBox';
import { AnimatedProps } from '..';
export declare type ContentBoxProps = StarFunctionComponent<ContentBoxBaseProps & AnimatedProps>;
export declare const ContentBox: ContentBoxProps;
export type { ContentBoxBaseProps };
export declare const ThemedContentBox: import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
    topContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    centerContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    bottomContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    style?: Object;
} & AnimatedProps & Partial<import("..").ThemeProps<import("react-native").ViewProps & {
    topContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    centerContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    bottomContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    style?: Object;
} & AnimatedProps>>, "animation" | "duration" | "delay" | "direction" | "easing" | "useNativeDriver" | "children" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "centerContent" | "topContent" | "bottomContent">> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    topContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    centerContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    bottomContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    style?: Object;
} & AnimatedProps & Partial<import("..").ThemeProps<import("react-native").ViewProps & {
    topContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    centerContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    bottomContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    style?: Object;
} & AnimatedProps>>>;
export default ThemedContentBox;
