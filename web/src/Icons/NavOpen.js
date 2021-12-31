import * as React from 'react';

const SvgNavOpen = (props) => (
  <svg
    width={14}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={8} width={14} height={2} rx={1} fill="#3952A2" />
    <rect y={4} width={14} height={2} rx={1} fill="#3952A2" />
    <rect width={14} height={2} rx={1} fill="#3952A2" />
  </svg>
);

export default SvgNavOpen;
