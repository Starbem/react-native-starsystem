import React from 'react';
import {StyleSheet} from 'react-native';
import Button, {ButtonProps} from '../Button';
import {StarFunctionComponent, ScreenWidth} from '../helpers';
import {colors} from '../config';
import Color from 'color';

export type TabItemProps = ButtonProps & {
  /** Allows to define if TabItem is active. */
  active?: boolean;
  /** Define the background for active tab */
  activeColor?:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'secondaryLight'
    | 'white'
    | 'black'
    | 'grey0'
    | 'grey1'
    | 'grey2'
    | 'grey3'
    | 'grey4'
    | 'grey5'
    | 'success'
    | 'warning'
    | 'error';
  /** Define the background Variant. */
  titleColor?:
    | 'primary'
    | 'primaryLight'
    | 'secondary'
    | 'secondaryLight'
    | 'white'
    | 'black'
    | 'grey0'
    | 'grey1'
    | 'grey2'
    | 'grey3'
    | 'grey4'
    | 'grey5'
    | 'success'
    | 'warning'
    | 'error';
};

export const TabItem: StarFunctionComponent<TabItemProps> = ({
  active,
  activeColor,
  titleStyle,
  containerStyle,
  buttonStyle,
  iconPosition = 'top',
  title,
  titleColor = 'white',
  ...props
}) => {
  return (
    <Button
      accessibilityRole="tab"
      accessibilityState={{selected: active}}
      accessibilityValue={typeof title === 'string' ? {text: title} : undefined}
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      titleStyle={[
        styles.titleStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: titleColor ? colors[titleColor] : 'white',
          paddingVertical: !props.icon ? 8 : 2,
        },
        titleStyle,
      ]}
      containerStyle={[
        styles.containerStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor:
            active && activeColor
              ? Color(colors[activeColor]).alpha(0.2).rgb().toString()
              : 'transparent',
        },
        containerStyle,
      ]}
      iconPosition={iconPosition}
      title={title}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  containerStyle: {
    flex: 1,
    width: ScreenWidth / 3,
    height: 48,
    borderRadius: 0,
  },
  viewStyle: {
    flexDirection: 'row',
    position: 'relative',
  },
  indicator: {
    display: 'flex',
    position: 'absolute',
    height: 4,
    bottom: 0,
  },
});

TabItem.displayName = 'Tab.Item';
