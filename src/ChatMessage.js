/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge } from 'react-bootstrap';

export default function ChatMessage({ sent = false, children }) {
  return (
    <Badge
      pill
      className={classNames(
        'chat-message',
        sent && 'chat-message-sent',
        !sent && 'text-dark'
      )}
      bg={sent ? 'primary' : 'white'}
    >
      {sent ? 'You: ' : 'Bot: '}
      {children}
    </Badge>
  );
}

ChatMessage.propTypes = {
  sent: PropTypes.bool,
  children: PropTypes.node.isRequired
};
