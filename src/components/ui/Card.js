import styledComponents from 'styled-components';

const Card = styledComponents.div`
    background-color: var(--bg);
    border-radius: 4px;
    box-shadow: 0px 0px 12px -6px var(--shadow-color);

    ${(props) => props.padding !== false && 'padding: 15px'};
`;

export default Card;
