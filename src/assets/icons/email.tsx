import { SVGProps } from "react";

export const IconEmail = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} aria-hidden="true" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <polyline
          fill="none"
          points=".75 4.5 6 6.75 11.25 4.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <rect
          fill="none"
          height="8.5"
          rx="2"
          ry="2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          width="10.5"
          x=".75"
          y="1.75"
        />
      </g>
    </svg>
  );
};
