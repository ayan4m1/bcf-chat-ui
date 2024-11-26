/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge } from 'react-bootstrap';

export default function ChatMessage({ sent = false, message }) {
  return (
    <Badge
      pill
      className={classNames(
        'chat-message',
        sent && 'chat-message-sent',
        !sent && 'text-dark'
      )}
      bg={sent ? 'primary' : 'light'}
    >
      {sent ? 'You: ' : 'Bot: '}
      {message}
    </Badge>
  );
}

ChatMessage.propTypes = {
  sent: PropTypes.bool,
  message: PropTypes.string.isRequired
};
