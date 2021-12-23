import * as React from 'react';

const SvgNavClose = (props) => (
  <svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      y={9.192}
      width={13}
      height={2}
      rx={1}
      transform="rotate(-45 0 9.192)"
      fill="#3952A2"
    />
    <rect
      x={1.414}
      width={13}
      height={2}
      rx={1}
      transform="rotate(45 1.414 0)"
      fill="#3952A2"
    />
  </svg>
);

export default SvgNavClose;
