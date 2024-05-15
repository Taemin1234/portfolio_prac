import { css } from 'styled-components';


const media  = (breakpoints) => {
    return Object.keys(breakpoints).reduce((accumulator, label) => {
        accumulator[label] = (...args) => css`
        @media (max-width: ${breakpoints[label]}) {
            ${css(...args)}
        }
        `;
        return accumulator;
    }, {});
};

export default media