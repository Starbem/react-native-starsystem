import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  ModalProps,
  ScrollViewProps,
} from 'react-native';
import {RneFunctionComponent, ifIphoneX, getBottomSpace} from '../helpers';

export type BottomSheetProps = {
  /** Style of the bottom sheet's container. Use this to change the color of the underlay. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Additional props handed to the `Modal`. */
  modalProps?: ModalProps;
  /** Is the modal component shown. */
  isVisible?: boolean;
  /** Used to add props to Scroll view. */
  scrollViewProps?: ScrollViewProps;
};

export const BottomSheet: RneFunctionComponent<BottomSheetProps> = ({
  containerStyle,
  isVisible = false,
  modalProps = {},
  children,
  scrollViewProps = {},
  ...props
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      {...modalProps}>
      <View
        style={StyleSheet.flatten([
          styles.safeAreaView,
          containerStyle && containerStyle,
        ])}
        {...props}>
        <View style={styles.container}>
          <ScrollView
            {...scrollViewProps}
            contentContainerStyle={styles.content}>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column-reverse',
  },
  container: {
    backgroundColor: 'white',
    borderTopColor: 'white',
    borderTopWidth: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: ifIphoneX(getBottomSpace() + 10, getBottomSpace()),
    backgroundColor: 'white',
  },
  listContainer: {backgroundColor: 'white'},
});

BottomSheet.displayName = 'BottomSheet';
