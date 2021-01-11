import React from 'react'
import ReactPlayer from 'react-player';


class InlineVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.url = this.props.url;
    this.scrollbar = 'null'
  }

  state = {
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: true,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: true,
    scrollbar: null
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scrollbar !== this.props.scrollbar) {
        this.scrollbar = this.props.scrollbar;
        
        this.scrollbar.addListener((status) => {
            // WIP
            // console.log(status)
          });

    }
  }

  componentDidMount() {

    var cursor = document.querySelector(".inline-video-player__play-pause");
    var videoHover = document.querySelector(".inline-player");

    function mousecursors(e){

      cursor.classList.add("is-visible");

      var rect = videoHover.getBoundingClientRect();
      var x = e.clientX - rect.left; 
      var y = e.clientY - rect.top; 

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      
    }

    function unhighlight() {
      cursor.classList.remove("is-visible");
      cursor.style.left = 50 + "%";
      cursor.style.top = 50 + "%";
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
    var element = document.querySelector(".inline-video-player__play-pause");
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
    var element = document.querySelector(".inline-video-player__play-pause");
    element.classList.toggle("is-pause");
    element.classList.toggle("is-play");
    this.setState({ playing: this.state.loop })
  }

  ref = player => {
    this.player = player
  }

  render() {
    const url = this.url;
    const { playing, controls, light, volume, muted, loop, playbackRate, pip } = this.state

    return (
      <>
        <button className='inline-video-player' onFocus={this.handlePlay} onMouseOver={this.handlePlay} onMouseLeave={this.handlePause} onFocusOut={this.handlePause} >
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className='inline-player'
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
          <button className="inline-video-player__play-pause is-pause">
            <div className="inline-video-player__play">
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 14.583V-0.000366211L12.7083 7.2913L0.75 14.583Z" fill="black" />
              </svg>
            </div>
            <div className="inline-video-player__playcta">
              <span>Play</span>
            </div>
          </button>
        </button>

      </>
    )
  }
}

export default InlineVideoPlayer;