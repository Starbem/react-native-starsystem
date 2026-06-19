import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import getIconType from '../helpers/getIconType';

export type SocialProvider =
  | 'google'
  | 'apple'
  | 'facebook'
  | 'twitter'
  | 'linkedin';

const PROVIDER_CONFIG: Record<
  SocialProvider,
  {icon: string; brandColor: string; defaultLabel: string}
> = {
  google: {icon: 'google', brandColor: '#4285F4', defaultLabel: 'Google'},
  apple: {icon: 'apple', brandColor: '#000000', defaultLabel: 'Apple'},
  facebook: {icon: 'facebook', brandColor: '#1877F2', defaultLabel: 'Facebook'},
  twitter: {icon: 'twitter', brandColor: '#1DA1F2', defaultLabel: 'Twitter'},
  linkedin: {
    icon: 'linkedin',
    brandColor: '#0A66C2',
    defaultLabel: 'LinkedIn',
  },
};

export type SocialButtonProps = TouchableOpacityProps & {
  /** Social provider to display. */
  provider: SocialProvider;
  /** Button label. Defaults to "Continue with {Provider}". */
  title?: string;
  /** Show loading spinner instead of icon. */
  loading?: boolean;
  /** Style the outer container. */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style the touchable button. */
  buttonStyle?: StyleProp<ViewStyle>;
  /** Style the button label. */
  titleStyle?: StyleProp<TextStyle>;
  /** Override icon color. Defaults to grey. */
  iconColor?: string;
  /** Icon size in dp. */
  iconSize?: number;
  /** Use the provider brand color for the icon. */
  useBrandColor?: boolean;
};

export const SocialButton: StarFunctionComponent<SocialButtonProps> = ({
  provider,
  title,
  loading = false,
  disabled = false,
  containerStyle,
  buttonStyle,
  titleStyle,
  iconColor,
  iconSize = 20,
  useBrandColor = false,
  onPress,
  theme,
  ...rest
}) => {
  const config = PROVIDER_CONFIG[provider];
  const IconComponent = getIconType('font-awesome-5');
  const resolvedIconColor =
    iconColor ?? (useBrandColor ? config.brandColor : theme?.colors?.grey2 ?? '#555555');
  const displayTitle = title ?? `Continue with ${config.defaultLabel}`;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled || loading}
        accessibilityRole="button"
        accessibilityLabel={displayTitle}
        style={[styles.button, disabled && styles.disabled, buttonStyle]}
        {...rest}
      >
        {loading ? (
          <ActivityIndicator size="small" color={resolvedIconColor} />
        ) : (
          <IconComponent name={config.icon} size={iconSize} color={resolvedIconColor} />
        )}
        <Text
          style={[
            styles.title,
            {color: theme?.colors?.grey1 ?? '#333333'},
            titleStyle,
          ]}
          numberOfLines={1}
        >
          {displayTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
});

SocialButton.displayName = 'SocialButton';
