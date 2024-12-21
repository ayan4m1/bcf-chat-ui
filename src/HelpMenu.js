import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line no-unused-vars
import { Card, ListGroup } from 'react-bootstrap';

// eslint-disable-next-line no-unused-vars
import ChatWindow from 'ChatWindow';

export default function HelpMenu({ show }) {
  const [showChat, setShowChat] = useState(false);
  const handleShowChat = useCallback(() => setShowChat(true), [setShowChat]);
  const handleHideChat = useCallback(() => setShowChat(false), [setShowChat]);

  if (showChat) {
    return <ChatWindow show={show} onDismiss={handleHideChat} />;
  }

  return (
    <div
      className={classNames(
        'help-menu',
        `help-menu-${show ? 'visible' : 'invisible'}`
      )}
    >
      <Card bg="light">
        <Card.Header>Get Help &amp; Advice</Card.Header>
        <Card.Body>
          <ListGroup>
            <a href="https://www.bullcityflavors.com/get-personalized-flavor-recommendations/">
              <ListGroup.Item>
                Get personalized flavor recommendations
              </ListGroup.Item>
            </a>
            <a href="https://www.bullcityflavors.com/frequently-asked-questions/">
              <ListGroup.Item>
                Get answers to commonly asked questions
              </ListGroup.Item>
            </a>
            <a className="clickable" onClick={handleShowChat}>
              <ListGroup.Item>Chat with our flavor robot</ListGroup.Item>
            </a>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

HelpMenu.propTypes = {
  show: PropTypes.bool.isRequired
};
