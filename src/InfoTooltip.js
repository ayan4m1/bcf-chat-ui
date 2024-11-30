// eslint-disable-next-line no-unused-vars
import { Tooltip } from 'react-bootstrap';

export default function InfoTooltip(props) {
  return (
    <Tooltip {...props} className="info-tooltip border">
      Accuracy of responses is on a best-effort basis. Contact us directly for
      authoritative answers.
    </Tooltip>
  );
}
