// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {

      errors: [],
      user: null,
    settings: {
      bitrate: 8,
    video: {
      resolution: '1080p'
      }
    }
   }

bitrateChanged = () => {
  this.state.bitrate = 12
}

videoResolutionChanged = () => {
  this.state.settings.video.resolution = '720p'
}

  }

  render(){
    return(
        <button className='bitrate' onClick={this.bitrateChanged}>Click

        </button>

        <button className='resolution'onClick={this.videoResolutionChanged}>Resolution

        </button>

    )
  }
}
