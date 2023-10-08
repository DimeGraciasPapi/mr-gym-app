import { css } from "@emotion/react";
import { COLORS } from "./colors";

export const RESET = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${COLORS.gray};
  }

  p {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1rem;
    color: ${COLORS.black};
    background-color: ${COLORS.white};
  }

  // reset scrollbar

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .4);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, .6);
  }
`;
