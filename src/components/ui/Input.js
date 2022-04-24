import styledComponents from 'styled-components';

const Input = styledComponents.input`
    width: 100%;
    padding: 12px 30px;
    border: 0;
    background-color: var(--bg);
    color: var(--main-color);
    border-radius: 4px;
    outline: none;
    box-shadow: 2px 2px 20px -8px var(--shadow-color);
`;

export default Input;
