import React from 'react';
import Icons from '../../../assets/icons/icons.svg';

function Icon({ name, width, height, viewbox, color, animation, classes }) {
  let widthPx = width ? `${width}px` : null;
  let heightPx = height ? `${height}px` : null;
  return (
    <svg className={`icon icon-${name} ${animation} ${classes}`} fill={color} width={widthPx} height={heightPx} viewBox={viewbox}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  )
}

export default Icon;