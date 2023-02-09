import { StyleProp, ViewStyle, ModalProps, ScrollViewProps } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type BottomSheetProps = {
    /** Style of the bottom sheet's container. Use this to change the color of the underlay. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Additional props handed to the `Modal`. */
    modalProps?: ModalProps;
    /** Is the modal component shown. */
    isVisible?: boolean;
    /** Used to add props to Scroll view. */
    scrollViewProps?: ScrollViewProps;
};
export declare const BottomSheet: StarFunctionComponent<BottomSheetProps>;
