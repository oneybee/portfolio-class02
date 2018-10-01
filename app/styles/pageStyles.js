import { css } from "styled-components";

const style = css`
  @import url("https://fonts.googleapis.com/css?family=Lora:400,700|Work+Sans:300,400,700");
  @media only screen and (min-width: 576px) {
    .home-col {
      top: -40%;
      position: absolute;
    }
  }
  ::selection {
    background-color: rgb(255, 240, 146);
    color: #1106ff;
  }

  body {
  }

  /* @media all and (max-width: 600px) {
    .home-col {
      color: blue;
      background-color: pink;
    }
  } */
`;

export default style;
