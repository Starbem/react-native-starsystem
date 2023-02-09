/// <reference types="react" />
import { LinearProgress, LinearProgressProps } from './LinearProgress';
export { LinearProgress };
export type { LinearProgressProps };
declare const _default: (import("react").FunctionComponent<Pick<import("react-native").ViewProps & {
    value?: number;
    variant?: "determinate" | "indeterminate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    animation?: boolean | {
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<LinearProgressProps>>, "animation" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "color" | "value" | "variant" | "trackColor">> & {
    INDETERMINATE: "determinate" | "indeterminate";
    DETERMINATE: "determinate" | "indeterminate";
}) | (import("react").ForwardRefExoticComponent<import("react-native").ViewProps & {
    value?: number;
    variant?: "determinate" | "indeterminate";
    color?: string;
    trackColor?: string;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    animation?: boolean | {
        duration?: number;
    };
} & Partial<import("../config").ThemeProps<LinearProgressProps>>> & {
    INDETERMINATE: "determinate" | "indeterminate";
    DETERMINATE: "determinate" | "indeterminate";
});
export default _default;
