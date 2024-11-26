import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';

export default function ChatTrigger({ onClick }) {
  return (
    <div className="chat-trigger" onClick={onClick}>
      <FontAwesomeIcon icon={faQuestionCircle} size="3x" color="#190d5e" />
    </div>
  );
}

ChatTrigger.propTypes = {
  onClick: PropTypes.func.isRequired
};
