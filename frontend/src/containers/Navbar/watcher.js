import { takeEvery } from 'redux-saga/effects'
import optionsWorker from './worker'

function* navBarWatcher() {
  yield takeEvery( 'MENU_OPTIONS', optionsWorker )
}

export default navBarWatcher
