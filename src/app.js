import React from 'react'
import TimeSlot from './timeSlot'

class App extends React.Component {
  render() {
    let element = <TimeSlot name="butterscotch" color='yellow' hrs={9} />;
    return element
  }
}

export default App