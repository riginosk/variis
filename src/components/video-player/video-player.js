import React from 'react'
import ReactPlayer from 'react-player';


class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.url;
  }

  state = {
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }

  componentDidMount() {
    var cursor = document.querySelector(".video-player__play-pause");
    var videoHover = document.querySelector(".react-player");

    function mousecursors(e){
      cursor.classList.add("is-visible");
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      
    }

    function unhighlight() {
      cursor.classList.remove("is-visible");
      document.removeEventListener('mousemove', mousecursors)
    }

    videoHover.onmousemove = function() { 
      document.addEventListener('mousemove', mousecursors)
    }
  
    videoHover.onmouseleave = function() { 
      unhighlight();
    }

  
  }

  handlePlayPause = () => {
    var element = document.querySelector(".video-player__play-pause");
    element.classList.toggle("is-pause");
    element.classList.toggle("is-play");
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handlePlay = () => {
    this.setState({ playing: true })
  }

  handlePause = () => {
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    var element = document.querySelector(".video-player__play-pause");
    element.classList.toggle("is-pause");
    element.classList.toggle("is-play");
    this.setState({ playing: this.state.loop })
  }

  ref = player => {
    this.player = player
  }

  render() {
    const url = this.url;
    const { playing, controls, light, volume, muted, loop, played, loaded, playbackRate, pip } = this.state

    return (
      <>
        <section className='video-player'>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              pip={pip}
              playing={playing}
              controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onClick={this.handlePlayPause}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onEnded={this.handleEnded}
              onProgress={this.handleProgress}
            />
          </div>
          <button className="video-player__play-pause is-pause">
            <div className="video-player__play">
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 14.583V-0.000366211L12.7083 7.2913L0.75 14.583Z" fill="black" />
              </svg>
            </div>
            <div className="video-player__pause">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 0H0V16H3V0ZM10 0H7V16H10V0Z" fill="black" />
              </svg>
            </div>
          </button>
          <div className="video-player__controls-container">
            <div className="video-player__controls">
              <div className="video-player__scrubber">
              <input className="video-player__seek"
                type='range' min={0} max={0.999999} step='any'
                value={played}
                onMouseDown={this.handleSeekMouseDown}
                onChange={this.handleSeekChange}
                onMouseUp={this.handleSeekMouseUp}
              />
              <progress className="video-player__played" max={1} value={played} />
              <progress className="video-player__loaded" max={1} value={loaded} />
              </div>
              <div className="video-player__sound">
                <span>Sound</span>
                <input id='muted' type='checkbox' checked={muted} onChange={this.handleToggleMuted} />
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }
}

export default VideoPlayer;