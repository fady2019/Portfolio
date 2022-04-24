import styledComponents from 'styled-components';

const Card = styledComponents.div`
    // overflow: hidden;
    background-color: var(--bg);
    border-radius: 4px;
    box-shadow: 2px 2px 20px -8px var(--shadow-color);

    ${(props) => props.padding !== false && 'padding: 15px'};
`;

export default Card;
