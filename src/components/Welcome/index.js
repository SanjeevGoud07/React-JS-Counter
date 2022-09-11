// const Welcome = () => <h1>Hello, User</h1>

import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {User} = this.props
    return <h1>Hello, {User}</h1>
  }
}

export default Welcome
