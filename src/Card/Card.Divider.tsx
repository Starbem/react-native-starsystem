import React from 'react';
import {StyleSheet} from 'react-native';
import Divider, {DividerProps} from '../Divider';
import {StarFunctionComponent} from '../helpers';

export type CardDividerProps = DividerProps;

export const CardDivider: StarFunctionComponent<CardDividerProps> = ({
  style,
  ...props
}) => (
  <Divider style={StyleSheet.flatten([styles.divider, style])} {...props} />
);

const styles = StyleSheet.create({
  divider: {
    marginBottom: 15,
  },
});

CardDivider.displayName = 'Card.Divider';
