import styledComponents from 'styled-components';

const Textarea = styledComponents.textarea`
    width: 100%;
    height: 180px;
    padding: 15px 30px;
    border: 0;
    background-color: var(--bg);
    color: var(--main-color);
    border-radius: 4px;
    outline: none;
    box-shadow: 2px 2px 20px -8px var(--shadow-color);
    resize: none;
`;

export default Textarea;
