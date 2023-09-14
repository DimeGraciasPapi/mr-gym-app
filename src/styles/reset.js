import { css } from "@emotion/react";
import { COLORS } from "./colors";
import { FONT } from "./font";

export const RESET = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    padding: 0;
    margin: 0,
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${COLORS.gray};
  }

  ul {
    list-style: none;
  }

  body {
    font-size: 1rem;
    font-family: ${FONT.primary};
    color: ${COLORS.gray};
    background-color: ${COLORS.white};
  }
`;
