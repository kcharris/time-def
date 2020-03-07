import React from 'react';

class TimeSlot extends React.Component {
  render(){
    const divStyle = {
      backgroundColor: this.props.color,
    }
    return <div style={divStyle}>{this.props.name.length > 0 ? this.props.name + "  hrs: " + this.props.hrs: "none"}</div>
  }
}

export default TimeSlot