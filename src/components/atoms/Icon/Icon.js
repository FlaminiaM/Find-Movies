import React from 'react';
import Icons from '../../../assets/icons/icons.svg';

function Icon({name, width, height, color, animation, classes}) {
  let widthPx = width ? `${width}px` : null;
  let heightPx = height ? `${height}px` : null;
  let viewbox = height && width ? `0 0 ${width} ${height}` : null;
  return (
    <svg className={`icon icon-${name} ${animation} ${classes}`} fill={color} width={widthPx} height={heightPx} viewBox={viewbox}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  )
}

export default Icon;