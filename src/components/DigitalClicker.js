// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor(){
    super();
    timesClicked: 0
  }


  render(){
    return(
          <button input={this.timesClicked}>

          </button>

    )
  }
}
export default DigitalClicker
