import React from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Avatar from '../Avatar';
import Icon from '../Icon';
import TextElement from '../Text';
import {StarFunctionComponent} from '../helpers';
import {inkScale, primaryScale, radius, secondaryScale, semanticColors, spacing} from '../config/tokens';

export type Reaction = {
  emoji: string;
  count?: number;
};

export type MessageProps = {
  /** `in` (received) or `out` (sent, primary-tint fill). */
  side?: 'in' | 'out';
  children?: React.ReactNode;
  /** Timestamp label, e.g. "14:30". */
  time?: string;
  /** Delivery state (`side='out'` only): tick marks. */
  status?: 'sent' | 'delivered' | 'read';
  /** Author name (group chats). */
  author?: string;
  avatarSource?: ImageSourcePropType;
  avatarName?: string;
  /** Reaction chips below the bubble. */
  reactions?: Reaction[];
  /** Attachment type rendered inside the bubble. */
  attachment?: 'image' | 'file' | 'voice';
  fileName?: string;
  fileSize?: string;
  imageSource?: ImageSourcePropType;
  /** Called when the file attachment's download icon is pressed. */
  onDownloadPress?: () => void;
  /** Called when the voice attachment is pressed (play/pause). */
  onVoicePress?: () => void;
  /** Duration label for the voice attachment, e.g. "0:14". */
  voiceDuration?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const WAVE_BARS = [8, 14, 20, 11, 17, 9, 22, 13, 7, 16, 10, 19, 8, 14];

const Ticks: React.FC<{status?: MessageProps['status']}> = ({status}) => {
  if (!status) return null;
  const color = status === 'read' ? primaryScale.dark : semanticColors.textSecondary;
  return (
    <Icon
      name={status === 'sent' ? 'check' : 'done-all'}
      type="material"
      size={15}
      color={color}
    />
  );
};

export const Message: StarFunctionComponent<MessageProps> = ({
  side = 'in',
  children,
  time,
  status,
  author,
  avatarSource,
  avatarName,
  reactions,
  attachment,
  fileName,
  fileSize,
  imageSource,
  onDownloadPress,
  onVoicePress,
  voiceDuration = '0:14',
  containerStyle,
}) => {
  const isOut = side === 'out';
  const showAvatar = !!(avatarSource || avatarName);

  return (
    <View
      testID="STAR__Message"
      style={StyleSheet.flatten([
        styles.row,
        isOut && styles.rowOut,
        containerStyle,
      ])}
    >
      {showAvatar && (
        <Avatar
          source={avatarSource}
          title={avatarName}
          size="sm"
          containerStyle={styles.avatar}
        />
      )}
      <View style={[styles.col, isOut && styles.colOut]}>
        {author && <TextElement style={styles.author}>{author}</TextElement>}
        <View style={[styles.bubble, isOut ? styles.bubbleOut : styles.bubbleIn]}>
          {attachment === 'image' && imageSource && (
            <Image source={imageSource} style={styles.image} resizeMode="cover" />
          )}
          {attachment === 'file' && (
            <TouchableFile
              fileName={fileName}
              fileSize={fileSize}
              isOut={isOut}
              onPress={onDownloadPress}
            />
          )}
          {attachment === 'voice' && (
            <VoiceAttachment duration={voiceDuration} onPress={onVoicePress} />
          )}
          {children && (
            <TextElement style={styles.text}>{children}</TextElement>
          )}
          {(time || status) && (
            <View style={styles.meta}>
              {time && (
                <TextElement
                  style={[styles.metaText, isOut ? styles.metaOut : styles.metaIn]}
                >
                  {time}
                </TextElement>
              )}
              {isOut && <Ticks status={status} />}
            </View>
          )}
        </View>
        {!!reactions?.length && (
          <View style={styles.reactions}>
            {reactions.map((r, i) => (
              <View key={i} style={styles.reaction}>
                <TextElement style={styles.reactionEmoji}>{r.emoji}</TextElement>
                {!!r.count && r.count > 1 && (
                  <TextElement style={styles.reactionCount}>{r.count}</TextElement>
                )}
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

Message.displayName = 'Message';

const TouchableFile: React.FC<{
  fileName?: string;
  fileSize?: string;
  isOut: boolean;
  onPress?: () => void;
}> = ({fileName, fileSize, isOut, onPress}) => (
  <View style={[styles.file, isOut && styles.fileOut]}>
    <View style={[styles.fileIcon, isOut && styles.fileIconOut]}>
      <Icon
        name="description"
        type="material"
        size={20}
        color={isOut ? semanticColors.textPrimary : primaryScale.dark}
      />
    </View>
    <View style={styles.fileInfo}>
      <TextElement style={styles.fileName} numberOfLines={1}>
        {fileName || 'documento.pdf'}
      </TextElement>
      <TextElement style={styles.fileSize}>{fileSize || 'PDF'}</TextElement>
    </View>
    <Icon
      name="download"
      type="material"
      size={18}
      onPress={onPress}
      color={semanticColors.textSecondary}
    />
  </View>
);

const VoiceAttachment: React.FC<{duration: string; onPress?: () => void}> = ({
  duration,
  onPress,
}) => (
  <View style={styles.voice}>
    <Icon name="play-arrow" type="material" size={24} solid onPress={onPress} />
    <View style={styles.wave}>
      {WAVE_BARS.map((h, i) => (
        <View key={i} style={[styles.waveBar, {height: h}]} />
      ))}
    </View>
    <TextElement style={styles.voiceDuration}>{duration}</TextElement>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing[2],
    maxWidth: '82%',
    alignSelf: 'flex-start',
  },
  rowOut: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
  avatar: {
    marginBottom: 2,
  },
  col: {
    flexShrink: 1,
  },
  colOut: {
    alignItems: 'flex-end',
  },
  author: {
    fontSize: 12,
    fontWeight: '600',
    color: semanticColors.textSecondary,
    marginBottom: 3,
    marginLeft: 4,
  },
  bubble: {
    paddingVertical: 9,
    paddingHorizontal: spacing[3],
    borderRadius: 18,
  },
  bubbleIn: {
    backgroundColor: semanticColors.surfaceCard,
    borderWidth: 1,
    borderColor: semanticColors.borderSubtle,
    borderBottomLeftRadius: 6,
  },
  bubbleOut: {
    backgroundColor: primaryScale.lightest,
    borderBottomRightRadius: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: semanticColors.textPrimary,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  metaText: {
    fontSize: 11,
  },
  metaIn: {
    color: semanticColors.textTertiary,
  },
  metaOut: {
    color: semanticColors.textSecondary,
  },
  reactions: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -6,
  },
  reaction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: semanticColors.surfaceCard,
    borderWidth: 1,
    borderColor: semanticColors.borderSubtle,
    borderRadius: radius.full,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  reactionEmoji: {
    fontSize: 12,
  },
  reactionCount: {
    fontSize: 11,
    fontWeight: '700',
  },
  image: {
    width: 200,
    height: 140,
    borderRadius: radius.md,
    marginBottom: 2,
  },
  file: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    padding: spacing[2],
    borderRadius: radius.sm,
    backgroundColor: inkScale[50],
    minWidth: 180,
  },
  fileOut: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  fileIcon: {
    width: 34,
    height: 34,
    borderRadius: radius.xs,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryScale.lightest,
  },
  fileIconOut: {
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  fileInfo: {
    flex: 1,
    minWidth: 0,
  },
  fileName: {
    fontSize: 13,
    fontWeight: '600',
    color: semanticColors.textPrimary,
  },
  fileSize: {
    fontSize: 11,
    color: semanticColors.textSecondary,
    marginTop: 1,
  },
  voice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    minWidth: 160,
  },
  wave: {
    flex: 1,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  waveBar: {
    flex: 1,
    backgroundColor: semanticColors.textSecondary,
    opacity: 0.55,
    borderRadius: 2,
  },
  voiceDuration: {
    fontSize: 11,
    opacity: 0.8,
  },
});

// ---------------------------------------------------------------------------

export type TypingMessageProps = {
  avatarSource?: ImageSourcePropType;
  avatarName?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const TypingMessage: StarFunctionComponent<TypingMessageProps> = ({
  avatarSource,
  avatarName,
  containerStyle,
}) => {
  const dots = React.useRef([
    new Animated.Value(0.3),
    new Animated.Value(0.3),
    new Animated.Value(0.3),
  ]).current;

  React.useEffect(() => {
    const loops = dots.map((value, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 150),
          Animated.timing(value, {toValue: 1, duration: 350, useNativeDriver: true}),
          Animated.timing(value, {toValue: 0.3, duration: 350, useNativeDriver: true}),
        ]),
      ),
    );
    loops.forEach(l => l.start());
    return () => loops.forEach(l => l.stop());
  }, [dots]);

  return (
    <View
      testID="STAR__TypingMessage"
      style={StyleSheet.flatten([typingStyles.row, containerStyle])}
    >
      {!!(avatarSource || avatarName) && (
        <Avatar source={avatarSource} title={avatarName} size="sm" containerStyle={styles.avatar} />
      )}
      <View style={[styles.bubble, styles.bubbleIn, typingStyles.bubble]}>
        {dots.map((value, i) => (
          <Animated.View key={i} style={[typingStyles.dot, {opacity: value}]} />
        ))}
      </View>
    </View>
  );
};

TypingMessage.displayName = 'TypingMessage';

const typingStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing[2],
    alignSelf: 'flex-start',
  },
  bubble: {
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: semanticColors.textTertiary,
  },
});

// ---------------------------------------------------------------------------

export type MessageDayProps = {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const MessageDay: StarFunctionComponent<MessageDayProps> = ({
  children,
  containerStyle,
}) => (
  <TextElement
    testID="STAR__MessageDay"
    style={StyleSheet.flatten([dayStyles.pill, containerStyle])}
  >
    {children}
  </TextElement>
);

MessageDay.displayName = 'MessageDay';

const dayStyles = StyleSheet.create({
  pill: {
    alignSelf: 'center',
    fontSize: 11,
    fontWeight: '600',
    color: semanticColors.textTertiary,
    backgroundColor: inkScale[100],
    paddingHorizontal: spacing[3],
    paddingVertical: 4,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
});

// ---------------------------------------------------------------------------

export type SystemMessageProps = {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const SystemMessage: StarFunctionComponent<SystemMessageProps> = ({
  children,
  containerStyle,
}) => (
  <TextElement
    testID="STAR__SystemMessage"
    style={StyleSheet.flatten([systemStyles.pill, containerStyle])}
  >
    {children}
  </TextElement>
);

SystemMessage.displayName = 'SystemMessage';

const systemStyles = StyleSheet.create({
  pill: {
    alignSelf: 'center',
    fontSize: 12,
    textAlign: 'center',
    color: secondaryScale.darker,
    backgroundColor: secondaryScale.lightest,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: radius.md,
    maxWidth: '90%',
    overflow: 'hidden',
  },
});

// ---------------------------------------------------------------------------

export type MessageListProps = {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const MessageList: StarFunctionComponent<MessageListProps> = ({
  children,
  containerStyle,
}) => (
  <View
    testID="STAR__MessageList"
    style={StyleSheet.flatten([listStyles.container, containerStyle])}
  >
    {children}
  </View>
);

MessageList.displayName = 'MessageList';

const listStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
  },
});
