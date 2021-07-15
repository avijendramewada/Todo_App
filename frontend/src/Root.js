import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import TodoList from './components/TodoList/index'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <React.Fragment>
          <Route path="/" component={App} />
          <Route path="/home" component={App} />
          <Route path="/todolist" component={TodoList} />
        </React.Fragment>
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Root
