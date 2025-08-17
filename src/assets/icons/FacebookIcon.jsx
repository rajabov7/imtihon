// src/components/icons/FacebookIcon.jsx
import React from "react";

const FacebookIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.3 1.37-3.57 3.47-3.57.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.89h-2.1v6.99C18.34 21.12 22 16.99 22 12z" />
  </svg>
);

export default FacebookIcon;
