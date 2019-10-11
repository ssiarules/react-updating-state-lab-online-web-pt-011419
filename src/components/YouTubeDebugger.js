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
  this.state.bitrate = '720p'
}

  }

  render(){
    return(
        <button className='bitrate'onClick=>

        </button>

        <button className='resolution'onClick=>

        </button>

    )
  }
}
