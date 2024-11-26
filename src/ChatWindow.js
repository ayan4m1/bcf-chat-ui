/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';

import ChatMessage from 'ChatMessage';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function ChatWindow({ show }) {
  const inputRef = useRef();
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      sent: true,
      message: 'I need all the strawberries, NOW!'
    },
    {
      message: 'We can ship those right to you for free, sir.'
    }
  ]);
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

  useEffect(() => {
    if (!question) {
      return;
    }

    setMessages((messages) => [
      ...messages,
      {
        sent: true,
        message: question
      }
    ]);

    const fetchData = async () => {
      // const response = await fetch(
      //   `http://localhost:9000/help?q=${encodeURIComponent(question)}`
      // );
      // const json = await response.json();

      // console.dir(json);
      setMessages((messages) => [
        ...messages,
        {
          message: 'Testing reply from server'
        }
      ]);
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
      <Card>
        <Card.Header>Ask Bull City</Card.Header>
        <Card.Body>
          <Card.Text className="chat-window-messages">
            {messages.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))}
          </Card.Text>
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
        </Card.Body>
      </Card>
    </div>
  );
}

ChatWindow.propTypes = {
  show: PropTypes.bool.isRequired
};
