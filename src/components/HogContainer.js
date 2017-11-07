import React, { Component } from 'react';
import Hogs from '../porkers_data.js'
import HogList from './HogList'
import HogCard from './HogCard'

export default class HogContainer extends Component {

  state = {
    hogs: Hogs,
    hogVisible: false,
    currentHog: null

  }

  slapHog = (event) => {
    const foundHog = this.state.hogs[event.target.id]
    this.setState({
      hogVisible: true,
      currentHog: foundHog
    })
    console.log(this.state)

  }

  render() {
    return (
      <div>
        <HogList slapHog={this.slapHog} hogs={this.state.hogs}>
        {this.state.hogVisible ? <HogCard hog={this.state.currentHog} /> : null }
    )
  }
}
