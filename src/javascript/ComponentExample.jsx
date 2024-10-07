import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ComponentExample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="ComponentExample">А вот эта карочи реакт-компонент</div>
        <p className="ComponentExample">А вот эта карочи реакт-компонент</p>
      </>
    )
  }
}
