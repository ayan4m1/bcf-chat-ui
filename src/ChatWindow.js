/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Row,
  Col,
  ButtonGroup,
  OverlayTrigger
} from 'react-bootstrap';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faMessage,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

import ChatMessage from 'ChatMessage';
import InfoTooltip from 'InfoTooltip';

export default function ChatWindow({ show, onDismiss }) {
  const inputRef = useRef();
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [messages, setMessages] = useState([]);
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        setQuestion(e.target.value);
      }
    },
    [setQuestion]
  );
  const handleClick = useCallback(() => {
    if (inputRef.current) {
      setQuestion(inputRef.current.value);
    }
  }, [setQuestion, inputRef]);
  const handleDismiss = useCallback(() => {
    setQuestion('');
    setMessages([]);
    setShowButtons(false);
    if (onDismiss) {
      onDismiss();
    }
  }, [setQuestion, setMessages, setShowButtons, onDismiss]);
  const handleRedirect = useCallback(() => {
    window.location = 'https://www.bullcityflavors.com/contact-us/';
  }, []);

  useEffect(() => {
    if (!question || !inputRef.current) {
      return;
    }

    inputRef.current.value = '';
    setLoading(true);
    setMessages((messages) => [
      ...messages,
      {
        sent: true,
        message: question
      }
    ]);

    const fetchData = async () => {
      const response = await fetch(
        `${BCF_CHAT_API_URL}/answer?question=${encodeURIComponent(question)}`
      );
      const answer = await response.text();

      setLoading(false);
      setShowButtons(true);
      setMessages((messages) => [...messages, { message: answer }]);
    };

    throttle(fetchData, 3000)();
  }, [question, setMessages]);

  return (
    <div
      className={classNames(
        'chat-window',
        `chat-window-${show ? 'visible' : 'invisible'}`
      )}
    >
      <Card bg="light">
        <Card.Header>
          Ask Bull City Flavors{' '}
          {show && (
            <OverlayTrigger placement="top" delay={250} overlay={InfoTooltip}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </OverlayTrigger>
          )}
        </Card.Header>
        <Card.Body>
          <Container fluid className="g-0">
            <Row>
              <Col>
                <Card.Text className="chat-window-messages">
                  {messages.map((message, index) => (
                    <ChatMessage key={index} sent={message.sent}>
                      {message.message}
                    </ChatMessage>
                  ))}
                  {loading && (
                    <ChatMessage>
                      <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        fixedWidth
                        size="xl"
                      />
                    </ChatMessage>
                  )}
                </Card.Text>
              </Col>
            </Row>
            {showButtons && (
              <Row>
                <Col>
                  <p className="my-2">Did this answer your question?</p>
                  <ButtonGroup className="d-flex">
                    <Button variant="success" onClick={handleDismiss}>
                      Yes
                    </Button>
                    <Button variant="danger" onClick={handleRedirect}>
                      No
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            )}
            <Row className="mt-2">
              <Col>
                <InputGroup>
                  <Form.Control
                    ref={inputRef}
                    type="text"
                    name="message"
                    placeholder="Enter your question here"
                    onKeyDown={handleKeyDown}
                  />
                  <Button variant="primary" onClick={handleClick}>
                    <FontAwesomeIcon icon={faMessage} fixedWidth />
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

ChatWindow.propTypes = {
  show: PropTypes.bool.isRequired
};
