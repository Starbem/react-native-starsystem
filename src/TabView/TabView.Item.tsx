import React from 'react';
import {View, ViewProps} from 'react-native';

import {StarFunctionComponent} from '../helpers';

export type TabViewItemProps = ViewProps;

export const TabViewItem: StarFunctionComponent<TabViewItemProps> = ({
  children,
  ...props
}) => {
  return <View {...props}>{React.isValidElement(children) && children}</View>;
};

TabViewItem.displayName = 'TabView.Item';
