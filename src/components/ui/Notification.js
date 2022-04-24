import ReactDOM from 'react-dom';

import classes from './Notification.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import Card from './Card';

const Notification = (props) => {
  return ReactDOM.createPortal(
    <Card
      className={`${props.className} ${
        props.error ? classes.error : classes.success
      } ${classes.notification}`}
    >
      <div className={classes['notification-container']}>
        <p className={classes.message}>{props.message || props.msg}</p>

        <Button
          className={classes['close-btn']}
          reset={true}
          onClick={props.onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </div>
    </Card>,
    document.getElementById('notification-root')
  );
};

export default Notification;
