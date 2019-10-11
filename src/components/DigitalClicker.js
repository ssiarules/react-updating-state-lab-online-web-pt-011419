// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor(){
    super();

    this.state = {
      timesClicked: 0
    };
  }

timesClickedPlusOne = (e) => {
  this.setState({
    timesClicked: this.state.timesClicked += 1
  })
}


  render(){
    return(
          <button onClick={this.timesClickedPlusOne}>{this.state.timesClicked}

          </button>

    )
  }
}
export default DigitalClicker
