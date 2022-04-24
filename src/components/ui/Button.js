import styledComponents from 'styled-components';

const Button = styledComponents.button`
    position: relative;
    overflow: hidden;
    user-select: none;
    outline: none;
    cursor: pointer;

    padding: ${(props) => (props.reset ? '0px' : '8px 12px')};
    border-radius: ${(props) => (props.reset ? '0px' : '4px')};
    background-color: ${(props) => (props.reset ? 'transparent' : 'var(--bg)')};
    color:  ${(props) => (props.reset ? 'inherit' : 'var(--main-color)')};

    border: ${(props) =>
      props.reset === true || props.border === false
        ? 'none'
        : '1px solid var(--border-color)'};

    box-shadow: ${(props) =>
      props.border === false && props.reset !== true
        ? '2px 2px 20px -8px var(--shadow-color)'
        : ''};

    &>a{
        color: var(--main-color);
    }

    ${(props) =>
      props.border !== false &&
      `
            &:hover{
                box-shadow: 2px 2px 20px -8px var(--shadow-color);
            }
        `}


    &:disabled,
    &.disabled{
        opacity: 0.6;
        pointer-events: none;
    }


    ${(props) =>
      props.effect === true &&
      `
        &:active::after{
            animation: btnHoverEffect 0.1s linear;
        }

        &:hover::after{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            background: var(--shadow-color);
            opacity: 0.2;
        }

        @keyframes btnHoverEffect{
            0%{
                width: 0;
            }
            100%{
                width: 200%
            }
        }
    `}
`;

export default Button;
