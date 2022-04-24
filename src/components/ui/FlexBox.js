import styledComponents from 'styled-components';

const FlexBox = styledComponents.div`
    --gap: 15px;
    display: flex;
    gap: var(--gap);
    flex-wrap: wrap;

    @media screen and (min-width: 900px) {
      & > * {
        width: calc(50% - calc(var(--gap)/2));
      }
    }

    

    @media screen and (max-width: 899px) {
      & {
        ${(props) =>
          props.midScreenFullWidth !== true && 'justify-content: center'};

        ${(props) => props.midScreenGap === false && '--gap: 0'}
      }
    
      & > * {
        ${(props) =>
          props.midScreenFullWidth === true ? 'width: 100%' : 'width: 75%'}
        ;
      }
    }
      
   
      
    @media screen and (max-width: 768px) {
      & > * {
        width: 100%;
      }
    }
`;

export default FlexBox;
