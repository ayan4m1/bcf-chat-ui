// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function ChatTrigger() {
  return (
    <div className="chat-trigger">
      <FontAwesomeIcon icon={faQuestionCircle} size="3x" color="#190d5e" />
    </div>
  );
}
