import { css } from "styled-components";

// Create a responsive shortcut for css with React
export const mobile = (props) => {
  return css`
  /* Using props for responsive */
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
