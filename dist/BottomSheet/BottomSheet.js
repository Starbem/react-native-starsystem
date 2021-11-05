var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Modal, View, StyleSheet, ScrollView, } from 'react-native';
import { ifIphoneX, getBottomSpace } from '../helpers';
export const BottomSheet = (_a) => {
    var { containerStyle, isVisible = false, modalProps = {}, children, scrollViewProps = {} } = _a, props = __rest(_a, ["containerStyle", "isVisible", "modalProps", "children", "scrollViewProps"]);
    return (<Modal animationType="slide" transparent={true} visible={isVisible} {...modalProps}>
      <View style={StyleSheet.flatten([
        styles.safeAreaView,
        containerStyle && containerStyle,
    ])} {...props}>
        <View style={styles.container}>
          <ScrollView {...scrollViewProps} contentContainerStyle={styles.content}>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>);
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
    listContainer: { backgroundColor: 'white' },
});
BottomSheet.displayName = 'BottomSheet';
