import React from 'react';

import IconType from 'types/IconType';
import { ICON_COLOR_DEFAULT, ICON_SIZE_DEFAUL } from 'constants/commons';

export const MenuLeftIcon = ({ color, width, height, className }: IconType) => (
  <svg 
    width={width ?? ICON_SIZE_DEFAUL}
    height={height ?? ICON_SIZE_DEFAUL}
    xmlns="http://www.w3.org/2000/svg"
    fill={color || ICON_COLOR_DEFAULT}
    version="1.1" id="Layer_1" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"
    className={className}
  >
    <path d="M19,5H1C0.4,5,0,4.6,0,4s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,5,19,5z"/>
    <path d="M10,11H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h9c0.6,0,1,0.4,1,1S10.6,11,10,11z"/>
    <path d="M19,17H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S19.6,17,19,17z"/>
  </svg>
);

export default MenuLeftIcon;
