/* eslint-disable no-unused-vars */
import { Fragment, useCallback, useState } from 'react';

import MenuTrigger from 'MenuTrigger';
import HelpMenu from 'HelpMenu';

export default function App() {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow((val) => !val), [setShow]);

  return (
    <Fragment>
      <HelpMenu show={show} onDismiss={toggleShow} />
      <MenuTrigger show={show} onClick={toggleShow} />
    </Fragment>
  );
}
