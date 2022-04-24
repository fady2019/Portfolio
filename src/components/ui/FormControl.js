import styledComponents from 'styled-components';
import Input from './Input';
import Textarea from './Textarea';

const FormControlDiv = styledComponents.div`
    padding-bottom: 15px;

    & label,
    input,
    textarea{
      display: block;
    }

    & label{
        padding-bottom: 4px;
        padding-left: 2px;
        user-select: none;
    }
`;

const FormControl = (props) => {
  const { id, label, type, value, placeholder, actions } = props.control;

  return (
    <FormControlDiv className={props.className}>
      <label htmlFor={id}>{label}</label>
      {type.toLowerCase() === 'textarea' ? (
        <Textarea
          id={id}
          value={value}
          placeholder={placeholder}
          {...actions}
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          {...actions}
        />
      )}
    </FormControlDiv>
  );
};

export default FormControl;
