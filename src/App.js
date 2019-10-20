import React, { Component } from 'react'
import PageHeader from './components/PageHeader'
import {BrowserRouter as Router ,Link ,Route,Switch} from 'react-router-dom';
 class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
      </div>
    )
  }
}

export default App
