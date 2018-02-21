import * as React from "react";

import OutcomeIconProps from "./outcome-icon-props";
import { OutcomeNotImplementedColor } from "shared/constants";

const OutcomeNotImplementedIcon = (props: OutcomeIconProps) => {
  return (
    <svg 
      fill={props.color ? props.color : OutcomeNotImplementedColor} 
      width={props.width} 
      height={props.height}
      viewBox="0 0 40 40" 
      stroke="black"
      strokeWidth="0.5"
      xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-8)">
        <path d="M29.898 26.5722l-4.3921 0c-0.0118,-0.635 -0.0177,-1.0172 -0.0177,-1.1583 0,-1.4229 0.2352,-2.5929 0.7056,-3.5102 0.4704,-0.9231 1.417,-1.952 2.8281,-3.1044 1.4111,-1.1465 2.2578,-1.8991 2.5282,-2.2578 0.4292,-0.5585 0.6409,-1.1818 0.6409,-1.8579 0,-0.9408 -0.3763,-1.7463 -1.1289,-2.4224 -0.7526,-0.6703 -1.7639,-1.0054 -3.0397,-1.0054 -1.2289,0 -2.2578,0.3527 -3.0868,1.0524 -0.8232,0.6997 -1.3935,1.7698 -1.7051,3.2044l-4.4391 -0.5527c0.1234,-2.0578 0.9995,-3.8041 2.6223,-5.2387 1.6286,-1.4346 3.757,-2.152 6.4029,-2.152 2.7752,0 4.9859,0.7291 6.6322,2.1814 1.6404,1.4522 2.4635,3.1397 2.4635,5.0741 0,1.0642 -0.3057,2.0755 -0.9054,3.028 -0.6056,0.9525 -1.8933,2.2519 -3.8688,3.8923 -1.0231,0.8525 -1.6581,1.5346 -1.905,2.052 -0.2469,0.5174 -0.3587,1.4405 -0.3351,2.7752zm-4.3921 6.5087l0 -4.8389 4.8389 0 0 4.8389 -4.8389 0z"/>
      </g>
    </svg>
  );
};

export default OutcomeNotImplementedIcon;
