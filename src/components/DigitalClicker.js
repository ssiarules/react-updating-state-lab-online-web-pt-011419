// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor(){
    super();
    this.state = {
      timesClicked: 0
    };
  }

timesClickedPlusOne = () => {
  this.setState({
    timesClicked += 1
  })

}
  

  render(){
    return(
          <button label={this.timesClicked}>

          </button>

    )
  }
}
export default DigitalClicker
