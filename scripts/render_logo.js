import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const makeSvg = (iconColor, textColor, eFill, eStroke) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 100" width="1120" height="200" fill="none">
  <defs>
    <style>
      .logo-text {
        font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        font-style: italic;
        font-weight: 900;
        letter-spacing: -0.015em;
      }
    </style>
  </defs>

  <!-- Left AE Monogram Graphic -->
  <g transform="translate(10, 0)">
    <!-- Solid Green Left Triangle/Wedge of A -->
    <path d="M 68 8 L 92 8 L 46 92 L 18 92 Z" fill="${iconColor}" />

    <!-- Center Spine / shadow -->
    <path d="M 94 8 L 102 8 L 74 92 L 66 92 Z" fill="${iconColor}" opacity="0.85" />

    <!-- Offset Bottom Shadow Under E -->
    <path d="M 72 92 L 70 96 L 138 96 L 140 92 Z" fill="${iconColor}" />

    <!-- E Block with White Fill & Green Stroke -->
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
      fill="${eFill}"
      stroke="${eStroke}"
      stroke-width="4.5"
      stroke-linejoin="miter"
      stroke-miterlimit="4"
    />
  </g>

  <!-- 4-Line Brand Text -->
  <g fill="${textColor}" class="logo-text">
    <text x="180" y="24" font-size="24" class="logo-text">ACTION</text>
    <text x="180" y="48" font-size="23" class="logo-text">ELECTRICAL &amp;</text>
    <text x="180" y="72" font-size="23" class="logo-text">MECHANICAL</text>
    <text x="180" y="96" font-size="23" class="logo-text">CONTRACTORS</text>
  </g>
</svg>
`;

// 1. Regular green logo for navbar (light background)
const resvgGreen = new Resvg(makeSvg('#00873d', '#00873d', '#ffffff', '#00873d'), {
  fitTo: { mode: 'width', value: 1120 },
});
fs.writeFileSync(path.resolve('src/assets/images/action_logo.png'), resvgGreen.render().asPng());

// 2. White logo for footer (dark green background)
const resvgWhite = new Resvg(makeSvg('#ffffff', '#ffffff', 'none', '#ffffff'), {
  fitTo: { mode: 'width', value: 1120 },
});
fs.writeFileSync(path.resolve('src/assets/images/action_logo_white.png'), resvgWhite.render().asPng());

console.log('Both PNG logos generated successfully!');
