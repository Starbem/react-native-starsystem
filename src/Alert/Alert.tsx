import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Icon from '../Icon';
import TextElement from '../Text';
import {color as toColor, StarFunctionComponent} from '../helpers';
import {radius, spacing} from '../config/tokens';

const ICONS: Record<string, string> = {
  info: 'info',
  success: 'check-circle',
  warning: 'warning',
  error: 'error',
};

export type AlertProps = {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  /** Body text. */
  children?: React.ReactNode;
  /** Overrides the default icon name for the variant (MaterialIcons name). */
  icon?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Alert: StarFunctionComponent<AlertProps> = ({
  variant = 'info',
  title,
  children,
  icon,
  theme,
  containerStyle,
}) => {
  const base = theme?.colors?.[variant] ?? theme?.colors?.primary ?? '#000';
  const backgroundColor = toColor(base).lightness(94).string();
  const textColor = toColor(base).darken(0.3).string();

  return (
    <View
      testID="STAR__Alert"
      accessibilityRole="alert"
      style={StyleSheet.flatten([
        styles.container,
        {backgroundColor, borderColor: base},
        containerStyle,
      ])}
    >
      <Icon
        name={icon || ICONS[variant]}
        type="material"
        color={base}
        size={20}
        containerStyle={styles.icon}
      />
      <View style={styles.body}>
        {title && (
          <TextElement style={[styles.title, {color: textColor}]}>
            {title}
          </TextElement>
        )}
        {children && (
          <TextElement style={[styles.text, {color: textColor}]}>
            {children}
          </TextElement>
        )}
      </View>
    </View>
  );
};

Alert.displayName = 'Alert';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing[4],
  },
  icon: {
    marginRight: spacing[3],
    marginTop: 1,
  },
  body: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    marginBottom: 2,
  },
  text: {
    fontSize: 14,
  },
});
