/* eslint-disable no-unused-vars */
import { Fragment, useCallback, useState } from 'react';

import ChatTrigger from 'ChatTrigger';
import ChatWindow from 'ChatWindow';

export default function App() {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow((val) => !val), [setShow]);

  return (
    <Fragment>
      <ChatWindow show={show} />
      <ChatTrigger onClick={toggleShow} />
    </Fragment>
  );
}
