// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstname: true, lastname: true}

  hideFirst = () => {
    this.setState(prev => ({firstname: !prev.firstname}))
  }

  hideLast = () => {
    this.setState(prev => ({lastname: !prev.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    const showfirst = () =>
      firstname ? (
        <div className="name-box">
          <h1 className="name">Joe</h1>
        </div>
      ) : null

    const showlast = () =>
      lastname ? (
        <div className="name-box">
          <h1 className="name">Jonas</h1>
        </div>
      ) : null

    return (
      <div className="conataiere">
        <h1>Show/Hide</h1>
        <div className="names-container">
          <div className="name-butn-cont">
            <button type="button" onClick={this.hideFirst}>
              Show/Hide Firstname
            </button>
            <div>{showfirst()}</div>
          </div>
          <div className="name-butn-cont">
            <button type="button" onClick={this.hideLast}>
              Show/Hide Lastname
            </button>
            <div>{showlast()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
