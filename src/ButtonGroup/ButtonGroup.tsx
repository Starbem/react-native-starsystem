import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';

export type ButtonGroupProps = {
  /** Array of button labels or custom elements. */
  buttons: (string | React.ReactElement)[];
  /** Callback with the pressed button index. */
  onPress: (index: number) => void;
  /** Currently selected index (single select). */
  selectedIndex?: number | null;
  /** Currently selected indexes (multi select). */
  selectedIndexes?: number[];
  /** Allow selecting multiple buttons simultaneously. */
  selectMultiple?: boolean;
  /** Style the outer container. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style each button. */
  buttonStyle?: StyleProp<ViewStyle>;
  /** Style each button label. */
  textStyle?: StyleProp<TextStyle>;
  /** Style the selected button. */
  selectedButtonStyle?: StyleProp<ViewStyle>;
  /** Style the selected button label. */
  selectedTextStyle?: StyleProp<TextStyle>;
  /** Disable all buttons (boolean) or specific indexes (number[]). */
  disabled?: boolean | number[];
  /** Style disabled buttons. */
  disabledStyle?: StyleProp<ViewStyle>;
  /** Style disabled button labels. */
  disabledTextStyle?: StyleProp<TextStyle>;
  /** Customize the divider between buttons. */
  innerBorderStyle?: {color?: string; width?: number};
  /** Stack buttons vertically. */
  vertical?: boolean;
  testID?: string;
};

export const ButtonGroup: StarFunctionComponent<ButtonGroupProps> = ({
  buttons,
  onPress,
  selectedIndex,
  selectedIndexes = [],
  selectMultiple = false,
  containerStyle,
  buttonStyle,
  textStyle,
  selectedButtonStyle,
  selectedTextStyle,
  disabled = false,
  disabledStyle,
  disabledTextStyle,
  innerBorderStyle,
  vertical = false,
  theme,
  testID,
}) => {
  const primaryColor = theme?.colors?.primary ?? '#FF6B19';
  const borderColor = innerBorderStyle?.color ?? primaryColor;
  const borderWidth = innerBorderStyle?.width ?? 1;

  const isSelected = useCallback(
    (index: number) => {
      if (selectMultiple) return selectedIndexes.includes(index);
      return selectedIndex === index;
    },
    [selectedIndex, selectedIndexes, selectMultiple],
  );

  const isDisabled = useCallback(
    (index: number) => {
      if (typeof disabled === 'boolean') return disabled;
      return disabled.includes(index);
    },
    [disabled],
  );

  return (
    <View
      testID={testID}
      style={[
        styles.container,
        vertical && styles.vertical,
        {borderColor, borderWidth},
        containerStyle,
      ]}
    >
      {buttons.map((button, index) => {
        const selected = isSelected(index);
        const btnDisabled = isDisabled(index);
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;

        const separatorStyle = !isFirst
          ? vertical
            ? {borderTopWidth: borderWidth, borderTopColor: borderColor}
            : {borderLeftWidth: borderWidth, borderLeftColor: borderColor}
          : undefined;

        const roundingStyle = vertical
          ? {
              ...(isFirst && {borderTopLeftRadius: 7, borderTopRightRadius: 7}),
              ...(isLast && {borderBottomLeftRadius: 7, borderBottomRightRadius: 7}),
            }
          : {
              ...(isFirst && {borderTopLeftRadius: 7, borderBottomLeftRadius: 7}),
              ...(isLast && {borderTopRightRadius: 7, borderBottomRightRadius: 7}),
            };

        return (
          <TouchableOpacity
            key={index}
            onPress={() => !btnDisabled && onPress(index)}
            disabled={btnDisabled}
            activeOpacity={0.7}
            accessibilityRole="button"
            style={[
              styles.button,
              roundingStyle,
              separatorStyle,
              selected && {backgroundColor: primaryColor},
              btnDisabled && styles.buttonDisabled,
              buttonStyle,
              selected && selectedButtonStyle,
              btnDisabled && disabledStyle,
            ]}
          >
            {typeof button === 'string' ? (
              <Text
                style={[
                  styles.text,
                  {color: selected ? '#FFFFFF' : primaryColor},
                  textStyle,
                  selected && selectedTextStyle,
                  btnDisabled && {color: theme?.colors?.disabled ?? '#AAAAAA'},
                  btnDisabled && disabledTextStyle,
                ]}
              >
                {button}
              </Text>
            ) : (
              button
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  vertical: {
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});

ButtonGroup.displayName = 'ButtonGroup';
