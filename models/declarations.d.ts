// declare module '*.svg' {
//   import { VFC, SVGProps } from 'react';

//   const SVG: VFC<SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare module '@/public/*.svg' {
  // import React from 'react';
  // const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  const SVG: string;
  export default SVG;
}
