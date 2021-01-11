import React from 'react'

const Space = (props) => {
  const spaceSize = props.data.spaceSize.toLowerCase();

  return (
    <div className={'space space-' + spaceSize}>
    </div>
  )
}

export default Space;

