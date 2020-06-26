import React, { useEffect, useState } from 'react'
import './Popup.scss'

export default class Popup extends React.Component<{}, any> {
  constructor (props) {
    super(props)
    this.state = {
      currentUrl: null
    }
  }

  componentDidMount () {
    const params: chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(params, (tabs) => {
      const { url } = tabs[0]
      this.setState({ currentUrl: url })
    })
  }

  render () {
    return (
      <div className='popupContainer'>
        <h1>Testing</h1>
        <p>Url: {this.state.currentUrl}</p>
      </div>
    )
  }
}
