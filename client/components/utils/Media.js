import { css } from "styled-components";

const sizes = {
  widescreen: 1408,
  desktop: 768,
  tablet: 1023,
  mobile: 768
  // mobile: 0,
};

const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default Media;
