import { fork } from 'redux-saga/effects'
import navBarWatcher from './containers/Navbar/watcher'

export default function* sagas() {
  yield [
    fork( navBarWatcher ),
  ]
}
