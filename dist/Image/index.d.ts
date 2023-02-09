/// <reference types="react" />
import { Image as ImageNative } from 'react-native';
import { Image, ImageProps } from './Image';
export { Image };
export type { ImageProps };
declare const ThemedImage: (import("react").FunctionComponent<Pick<import("react-native").ImageProps & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof import("react").Component;
    PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & Partial<import("../config").ThemeProps<ImageProps>>, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "nativeID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "transition" | "onPress" | "onLongPress" | "containerStyle" | "Component" | "placeholderStyle" | "ImageComponent" | "PlaceholderContent" | "childrenContainerStyle" | "transitionDuration">> & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
}) | (import("react").ForwardRefExoticComponent<import("react-native").ImageProps & {
    Component?: typeof import("react").Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof import("react").Component;
    PlaceholderContent?: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any>) | (new (props: any) => import("react").Component<any, any, any>)>;
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    childrenContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    placeholderStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
} & Partial<import("../config").ThemeProps<ImageProps>>> & {
    getSize: typeof ImageNative.getSize;
    getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    prefetch: typeof ImageNative.prefetch;
    abortPrefetch: typeof ImageNative.abortPrefetch;
    queryCache: typeof ImageNative.queryCache;
    resolveAssetSource: typeof ImageNative.resolveAssetSource;
});
export default ThemedImage;
