import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faClose } from '@fortawesome/free-solid-svg-icons';

export default function MenuTrigger({ show, onClick }) {
  return (
    <div className="menu-trigger" onClick={onClick}>
      <FontAwesomeIcon
        icon={show ? faClose : faQuestionCircle}
        size="3x"
        color="#190d5e"
      />
    </div>
  );
}

MenuTrigger.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
