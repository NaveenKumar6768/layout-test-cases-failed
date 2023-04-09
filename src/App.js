import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
    //  this.setState({showContent: value})
    //  console.log(value)
  }

  onToggleShowLeftNavba = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <ConfigurationContext.Provider
            value={{
              showContent,
              showLeftNavbar,
              showRightNavbar,
              onToggleShowContent: this.onToggleShowContent,
              onToggleShowLeftNavbar: this.onToggleShowLeftNavba,
              onToggleShowRightNavbar: this.onToggleShowRightNavbar,
            }}
          >
            <ConfigurationController />
            <Layout />
          </ConfigurationContext.Provider>
        </div>
      </div>
    )
  }
}

export default App
