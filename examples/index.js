import React, { Component } from 'react'
import { Button } from './Button'

class Example extends Component {
  render () {
    return (
      <div>
        <h2>Buttons</h2>
        <p><Button>Plain button</Button></p>
        <p><Button modifier='primary'>Primary button</Button></p>
        <p><Button is='active'>Active button</Button></p>
        <p><Button disabled>Disabled button</Button> disabled prop gets passed native button-element</p>
      </div>
    )
  }
}

export default Example
