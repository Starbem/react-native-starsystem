import React from 'react';
import {
  View,
  ScrollView,
  Animated,
  StyleProp,
  ViewStyle,
  ViewProps,
  StyleSheet,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import {colors} from '../config';
import {TabItemProps} from './Tab.Item';

export type TabBaseProps = ViewProps & {
  /** Child position index value. */
  value?: number;
  /** On Index Change Callback. */
  onChange?: (value: number) => void;
  /** Disable the indicator below. */
  disableIndicator?: boolean;
  /** Additional styling for tab indicator. */
  indicatorStyle?: StyleProp<ViewStyle>;
  /** Define the background Variant. */
  variant?:
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

export const TabBase: StarFunctionComponent<TabBaseProps> = ({
  theme,
  children,
  value,
  onChange = () => {},
  indicatorStyle,
  disableIndicator,
  variant,
  ...props
}) => {
  const [dim, setDim] = React.useState({width: 0});
  const {current: animation} = React.useRef(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: value as number,
      useNativeDriver: true,
      duration: 170,
    }).start();
  }, [animation, value]);

  const WIDTH = dim.width / 3;

  return (
    <View>
      <ScrollView
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={React.Children.count(children) > 3}
        {...props}
        accessibilityRole="tablist"
        style={[
          styles.viewStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderBottomWidth: 1,
            borderBottomColor: variant ? colors[variant] : colors.grey3,
            backgroundColor: variant ? colors[variant] : 'transparent',
          },
        ]}
        onLayout={({nativeEvent: {layout}}) => setDim(Object(layout))}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement<TabItemProps>, {
            onPress: () => onChange(index),
            active: index === value,
            variant,
          });
        })}
        {!disableIndicator && (
          <Animated.View
            style={[
              styles.indicator,
              {
                backgroundColor: theme?.colors?.secondary,
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, WIDTH],
                    }),
                  },
                ],
              },
              indicatorStyle,
            ]}>
            <View style={{width: WIDTH}} />
          </Animated.View>
        )}
      </ScrollView>
    </View>
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
    textTransform: 'uppercase',
  },
  containerStyle: {
    flex: 1,
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

TabBase.displayName = 'Tab';
