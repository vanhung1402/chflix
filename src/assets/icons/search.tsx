import React from 'react';

import IconType from 'types/IconType';
import { ICON_COLOR_DEFAULT, ICON_SIZE_DEFAUL } from 'constants/commons';

export const SearchIcon = ({ color, width, height, className }: IconType) => (
  <svg className={className} width={width ?? ICON_SIZE_DEFAUL} height={height ?? ICON_SIZE_DEFAUL} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L15.8033 15.8033C15.8033 15.8033 14 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5C18 11.0137 17.9484 11.5153 17.85 12" stroke={color || ICON_COLOR_DEFAULT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default SearchIcon;
