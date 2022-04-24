import { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Button from '../ui/Button';
import FlexBox from '../ui/FlexBox';
import FormControl from '../ui/FormControl';
import UL from '../ui/UL';

import classes from './ContactForm.module.css';
import { uiActions } from '../../store/ui-slice';

const formInitialState = {
  name: '',
  email: '',
  message: '',
  validName: false,
  validEmail: false,
  validMessage: false,
  validForm: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'NAME_CHANGE': {
      const validName = action.value.trim().length > 0;
      return {
        ...state,
        name: action.value,
        validName,
        validForm: validName && state.validEmail && state.validMessage,
      };
    }

    case 'EMAIL_CHANGE': {
      const validEmail = action.value.trim().length > 0;
      return {
        ...state,
        email: action.value,
        validEmail,
        validForm: state.validName && validEmail && state.validMessage,
      };
    }

    case 'MESSAGE_CHANGE': {
      const validMessage = action.value.trim().length > 0;
      return {
        ...state,
        message: action.value,
        validMessage,
        validForm: state.validName && state.validEmail && validMessage,
      };
    }

    default: {
      return formInitialState;
    }
  }
};

const ContactForm = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const dispatch = useDispatch();

  const [formState, dispatchForm] = useReducer(formReducer, formInitialState);

  const changeNameHandler = (event) => {
    dispatchForm({ type: 'NAME_CHANGE', value: event.target.value });
  };

  const changeEmailHandler = (event) => {
    dispatchForm({ type: 'EMAIL_CHANGE', value: event.target.value });
  };

  const changeMessageHandler = (event) => {
    dispatchForm({ type: 'MESSAGE_CHANGE', value: event.target.value });
  };

  const submitMsgHandler = (event) => {
    event.preventDefault();

    if (formState.validForm) {
      emailjs
        .send(
          'service_drgvfok',
          'template_qyjys1b',
          {
            name: formState.name,
            email: formState.email,
            message: formState.message,
          },
          'WfjZKKx8sQ5Ys-oHW'
        )
        .then(() => {
          dispatch(
            uiActions.setNotification({
              message: 'Your message sent successfully',
              error: false,
            })
          );

          dispatchForm({ type: 'FORM_RESET' });
        })
        .catch(() => {
          dispatch(
            uiActions.setNotification({
              message: 'Your message failed, try again',
              error: true,
            })
          );
        });
    }
  };

  return (
    <form className={classes['contact-form']} onSubmit={submitMsgHandler}>
      <FlexBox midScreenFullWidth={true} midScreenGap={false}>
        <FormControl
          control={{
            id: 'contact-form-name-input',
            label: 'Name',
            type: 'text',
            value: formState.name,
            actions: {
              onChange: changeNameHandler,
            },
          }}
        />

        <FormControl
          control={{
            id: 'contact-form-email-input',
            label: 'Email',
            type: 'email',
            value: formState.email,
            actions: {
              onChange: changeEmailHandler,
            },
          }}
        />
      </FlexBox>

      <FormControl
        control={{
          id: 'contact-form-msg-input',
          label: 'Message',
          type: 'textarea',
          value: formState.message,
          actions: {
            onChange: changeMessageHandler,
          },
        }}
      />

      <div className={classes['form-action']}>
        <Button type="submit" border={false} disabled={!formState.validForm}>
          Submit
        </Button>

        <UL
          className={`${classes['social-links']} ${
            isDarkMode && classes['dark-mode']
          }`}
        >
          <li className={classes.github}>
            <a
              href="https://github.com/fady2019"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </li>

          <li className={classes.linkedin}>
            <a
              href="https://www.linkedin.com/in/fady-emad-400b71216/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </UL>
      </div>
    </form>
  );
};

export default ContactForm;
