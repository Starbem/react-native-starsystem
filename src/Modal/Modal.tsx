import React from 'react';
import {
  Modal as RNModal,
  ModalProps as RNModalProps,
  View,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from '../Icon';
import IconButton from '../IconButton';
import TextElement from '../Text';
import {StarFunctionComponent} from '../helpers';
import {radius, semanticColors, shadows, spacing} from '../config/tokens';

const TONE_ICON: Record<string, string> = {
  success: 'check-circle',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

const SIZES = {sm: 320, md: 420, lg: 560};

export type ModalProps = {
  /** Render the dialog when true. */
  visible?: boolean;
  title?: string;
  children?: React.ReactNode;
  /** Footer node — usually action Buttons. */
  footer?: React.ReactNode;
  /** Called on scrim tap or close button tap. */
  onClose?: () => void;
  /** Leading icon name (MaterialIcons). Shown as a badge in the header. */
  icon?: string;
  /** Status variation — shows a colored icon badge. Defaults `align` to `'center'`. */
  tone?: 'default' | 'success' | 'error' | 'warning' | 'info';
  /** Header alignment. Status modals (`tone` set) default to `'center'`. */
  align?: 'start' | 'center';
  /** `'sheet'` (default) slides up from the bottom. `'center'` is a centered dialog. */
  present?: 'sheet' | 'center';
  /** Centered dialog width. Ignored when `present='sheet'`. */
  size?: 'sm' | 'md' | 'lg';
  containerStyle?: StyleProp<ViewStyle>;
  /** Additional props handed to the underlying RN `Modal`. */
  modalProps?: Partial<RNModalProps>;
};

export const Modal: StarFunctionComponent<ModalProps> = ({
  visible = false,
  title,
  children,
  footer,
  onClose,
  icon,
  tone = 'default',
  align,
  present = 'sheet',
  size = 'md',
  containerStyle,
  modalProps = {},
  theme,
}) => {
  const hasStatus = tone !== 'default';
  const badgeIcon = icon || (hasStatus ? TONE_ICON[tone] : undefined);
  const centered = (align || (hasStatus ? 'center' : 'start')) === 'center';
  const toneColor =
    tone !== 'default' ? theme?.colors?.[tone] : theme?.colors?.primary;
  const isSheet = present === 'sheet';

  return (
    <RNModal
      visible={visible}
      transparent
      animationType={isSheet ? 'slide' : 'fade'}
      onRequestClose={onClose}
      {...modalProps}
    >
      <View style={[styles.overlay, !isSheet && styles.overlayCentered]}>
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={onClose}
        />
        <View
          testID="STAR__Modal"
          style={StyleSheet.flatten([
            styles.card,
            isSheet ? styles.cardSheet : {width: SIZES[size], maxWidth: '92%'},
            containerStyle,
          ])}
        >
          {isSheet && <View style={styles.handle} />}
          {onClose && (
            <IconButton
              icon="close"
              variant="ghost"
              size="sm"
              label="Fechar"
              containerStyle={styles.closeButton}
              onPress={onClose}
            />
          )}
          {(badgeIcon || title) && (
            <View style={[styles.head, centered && styles.headCentered]}>
              {badgeIcon && (
                <View
                  style={[
                    styles.badge,
                    hasStatus && {backgroundColor: `${toneColor}1A`},
                  ]}
                >
                  <Icon name={badgeIcon} type="material" size={22} color={toneColor} />
                </View>
              )}
              {title && (
                <TextElement
                  style={[styles.title, centered && styles.titleCentered]}
                >
                  {title}
                </TextElement>
              )}
            </View>
          )}
          {children && <View style={styles.body}>{children}</View>}
          {footer && <View style={styles.footer}>{footer}</View>}
        </View>
      </View>
    </RNModal>
  );
};

Modal.displayName = 'Modal';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(16,24,40,0.4)',
  },
  overlayCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: semanticColors.surfaceCard,
    padding: spacing[5],
    ...shadows.lg,
  },
  cardSheet: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
  },
  handle: {
    alignSelf: 'center',
    width: 36,
    height: 4,
    borderRadius: radius.full,
    backgroundColor: semanticColors.borderDefault,
    marginBottom: spacing[3],
  },
  closeButton: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    zIndex: 1,
  },
  head: {
    marginBottom: spacing[3],
  },
  headCentered: {
    alignItems: 'center',
  },
  badge: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: semanticColors.textPrimary,
  },
  titleCentered: {
    textAlign: 'center',
  },
  body: {
    marginBottom: spacing[2],
  },
  footer: {
    marginTop: spacing[3],
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing[3],
  },
});
