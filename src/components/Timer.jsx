import React, { Component } from 'react'

class Timer extends Component {

  constructor (props) {
    super(props)
    console.log("Logged in user props: ", props);
    this.state = {
      count: 20,
      resetTimer: props.resetTimer
    }
  }

  render () {
    const {count} = this.state
    return (
      <div>
        <h1>Time left: {count} seconds</h1>
      </div>
    )
  }

  componentDidMount () {
    this.doIntervalChange();
    if (this.state.resetTimer === true) {
        this.resetClock();
    }
  }

  resetClock () {
      clearInterval(this.myInterval)
      this.setState({
          count: 20
      })
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
        if (this.state.count > 0)
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }
}

export default Timer;