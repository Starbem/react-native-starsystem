import {withTheme} from '../config';
import {
  Message,
  MessageProps,
  Reaction,
  TypingMessage,
  TypingMessageProps,
  MessageDay,
  MessageDayProps,
  SystemMessage,
  SystemMessageProps,
  MessageList,
  MessageListProps,
} from './Message';

const ThemedMessage = Object.assign(withTheme(Message, 'Message'), {
  Typing: withTheme(TypingMessage, 'TypingMessage'),
  Day: MessageDay,
  System: SystemMessage,
  List: MessageList,
});

export {Message, TypingMessage, MessageDay, SystemMessage, MessageList};
export type {
  MessageProps,
  Reaction,
  TypingMessageProps,
  MessageDayProps,
  SystemMessageProps,
  MessageListProps,
};
export default ThemedMessage;
