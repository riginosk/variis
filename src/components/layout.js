import React from 'react'
import './base.css'
import Chat from './chat/chat';
import Cursor from './cursor/cursor';
import Navigation from './navigation/navigation'

class Template extends React.Component {

  render() {
    const { children } = this.props;
    const data = this.props;

    return (
      <>
        < Cursor/>
        <Navigation  data={data} />
        {children}
        <Chat />
      </>
    )
  }
}

export default Template
