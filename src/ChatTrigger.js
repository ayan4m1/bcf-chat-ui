import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export default function ChatTrigger({ show, onClick }) {
  return (
    <div className="chat-trigger" onClick={onClick}>
      <FontAwesomeIcon
        icon={show ? faClose : faQuestionCircle}
        size="3x"
        color="#190d5e"
      />
    </div>
  );
}

ChatTrigger.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
