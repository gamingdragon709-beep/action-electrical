import React from 'react';

interface ActionLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
}

export const ActionLogo: React.FC<ActionLogoProps> = ({
  className = 'h-11 sm:h-12 w-auto',
  variant = 'light',
}) => {
  // Brand green matching logo_green.svg
  const green = '#008a38';
  
  const mainFill = variant === 'white' ? '#ffffff' : green;
  const strokeColor = variant === 'white' ? '#ffffff' : green;
  const textColor = variant === 'white' ? '#ffffff' : (variant === 'dark' ? '#f0fdf4' : green);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 315 102"
      className={className}
      fill="none"
      role="img"
      aria-label="Action Electrical & Mechanical Contractors Logo"
    >
      <defs>
        <style>
          {`
            .logo-font {
              font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-style: italic;
              font-weight: 800;
              letter-spacing: -0.02em;
            }
          `}
        </style>
      </defs>

      {/* --- AE MONOGRAM ICON --- */}
      <g id="ae-icon">
        {/* Solid green left leg of 'A' */}
        <polygon
          points="
            3,94
            41,94
            76,6
            49,6
          "
          fill={mainFill}
        />

        {/* Solid green back stem of 'A' / depth behind 'E' */}
        <polygon
          points="
            52,94
            65,94
            98,6
            78,6
          "
          fill={mainFill}
        />

        {/* Solid green bottom shadow / shelf under the bottom bar of 'E' */}
        <polygon
          points="
            62,94
            59,99
            132,99
            136,94
          "
          fill={mainFill}
        />

        {/* Solid green top cap connecting to the peak */}
        <polygon
          points="
            76,6
            100,6
            92,20
            74,20
          "
          fill={mainFill}
        />

        {/* The 'E' outline - hollow/transparent center with green border */}
        <polygon
          points="
            86,8
            145,8
            141,25
            104,25
            100,43
            137,43
            133,60
            96,60
            92,78
            141,78
            137,94
            67,94
          "
          fill="none"
          stroke={strokeColor}
          strokeWidth="4.2"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />
      </g>

      {/* --- 4-LINE TYPOGRAPHY MATCHING logo_green.svg --- */}
      <g fill={textColor} className="logo-font">
        <text
          x="154"
          y="23"
          fontSize="22"
          className="logo-font"
        >
          ACTION
        </text>

        <text
          x="154"
          y="47"
          fontSize="21"
          className="logo-font"
        >
          ELECTRICAL &amp;
        </text>

        <text
          x="154"
          y="71"
          fontSize="21"
          className="logo-font"
        >
          MECHANICAL
        </text>

        <text
          x="154"
          y="95"
          fontSize="21"
          className="logo-font"
        >
          CONTRACTORS
        </text>
      </g>
    </svg>
  );
};
