import React from 'react'
import Transition from '../page-transition/page-transition';

const Button = (props) => {
  const value = props.value;
  const to = props.to;
  const color = props.color;
  const backgroundColor = props.backgroundColor;
  const className = props.className;

  return (
    <Transition className="button" to={to}>
        <button className={className} style={{color:color, backgroundColor:backgroundColor}} aria-label={value}>{value}</button>
    </Transition>
  )
}

export default Button;