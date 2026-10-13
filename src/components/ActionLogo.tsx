import React from 'react';

interface ActionLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
}

export const ActionLogo: React.FC<ActionLogoProps> = ({
  className = 'h-11 w-auto',
  variant = 'light',
}) => {
  // Primary brand green from the user's uploaded logo
  const brandGreen = '#00873d';
  
  const iconColor = variant === 'white' ? '#ffffff' : brandGreen;
  const textColor = variant === 'white' ? '#ffffff' : (variant === 'dark' ? '#f0fdf4' : brandGreen);
  const eFill = variant === 'white' ? '#355f39' : '#ffffff';
  const eStroke = variant === 'white' ? '#ffffff' : brandGreen;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 100"
      className={className}
      fill="none"
      role="img"
      aria-label="Action Electrical & Mechanical Contractors Logo"
    >
      <defs>
        <style>
          {`
            .logo-text {
              font-family: 'Space Grotesk', Arial, Helvetica, sans-serif;
              font-style: italic;
              font-weight: 900;
              letter-spacing: -0.01em;
            }
          `}
        </style>
      </defs>

      {/* Group for the AE Monogram Icon with Italic Shear */}
      <g transform="translate(10, 0)">
        {/* Left Solid Wedge of 'A' */}
        <path
          d="M 68 8 L 92 8 L 46 92 L 18 92 Z"
          fill={iconColor}
        />

        {/* Center Vertical-ish Spine / Connecting 3D shadow */}
        <path
          d="M 94 8 L 102 8 L 74 92 L 66 92 Z"
          fill={iconColor}
          opacity="0.85"
        />

        {/* Outer offset underline shadow under the E */}
        <path
          d="M 72 92 L 70 96 L 138 96 L 140 92 Z"
          fill={iconColor}
        />

        {/* The 'E' Monogram with crisp geometric arms */}
        <polygon
          points="
            86,12
            152,12
            149,27
            108,27
            104,44
            144,44
            141,59
            101,59
            97,76
            146,76
            143,91
            75,91
          "
          fill={eFill}
          stroke={eStroke}
          strokeWidth="4"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />
      </g>

      {/* 4-Line Brand Typography (Exact text from uploaded image) */}
      <g fill={textColor} className="logo-text">
        <text
          x="180"
          y="23"
          fontSize="24"
          className="logo-text"
        >
          ACTION
        </text>

        <text
          x="180"
          y="47"
          fontSize="23"
          className="logo-text"
        >
          ELECTRICAL &amp;
        </text>

        <text
          x="180"
          y="71"
          fontSize="23"
          className="logo-text"
        >
          MECHANICAL
        </text>

        <text
          x="180"
          y="95"
          fontSize="23"
          className="logo-text"
        >
          CONTRACTORS
        </text>
      </g>
    </svg>
  );
};
