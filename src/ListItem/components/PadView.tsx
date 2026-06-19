import React, {useRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export type PadViewProps = {
  Component: React.ComponentClass;
  pad: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const PadView: React.FC<PadViewProps> = ({
  children,
  pad,
  Component,
  ...props
}) => {
  const _root = useRef(null);

  const length = React.Children.count(children);
  const Container = Component || View;

  return (
    <Container {...props} ref={_root}>
      {React.Children.map(
        children,
        (child, index) =>
          child && [
            child,
            index !== length - 1 && <View style={{paddingLeft: pad}} />,
          ],
      )}
    </Container>
  );
};
