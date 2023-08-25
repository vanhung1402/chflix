import React from 'react';

import IconType from 'types/IconType';
import { ICON_COLOR_DEFAULT, ICON_SIZE_DEFAUL } from 'constants/commons';

export const PlayIcon = ({ color, width, height, className }: IconType) => (  
  <svg className={className} width={width ?? ICON_SIZE_DEFAUL} height={height ?? ICON_SIZE_DEFAUL} fill={color || ICON_COLOR_DEFAULT} viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M175 .024V1920l1570.845-959.927z" fillRule="evenodd"/>
  </svg>
);

export default PlayIcon;
