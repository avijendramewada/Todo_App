import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducers from './reducers'
import Root from './Root'
import sagas from './saga'
import './index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducers,
  applyMiddleware( sagaMiddleware ),
)
sagaMiddleware.run( sagas )

render(
  <Root store={ store } />,
  document.getElementById( 'root' ),
)
