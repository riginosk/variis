import React, { useEffect } from "react"
import CustomCursor from 'custom-cursor.js'

const Cursor = (props) => {

  useEffect(() => {

    new CustomCursor('.cursor', {
      hideTrueCursor: true,
      focusElements: [{
        selector: '.view-cursor',
        focusClass: 'cursor--focused-view'
      },
      {
        selector: '.drag-cursor',
        focusClass: 'cursor--focused-drag',
      },
      {
        selector: '.play-cursor',
        focusClass: 'cursor--focused-play'
      }]
    }).setPosition(-30, -30).initialize().unhideTrueCursor()
  }, []);

  return (
    <div className="cursor">
      <div className="cursor-border">
        <span className="view">View</span>
        <span className="drag">Drag</span>
        <span className="play">Play</span>
      </div>
    </div>
  )
}

export default Cursor;

