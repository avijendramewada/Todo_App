import { put } from 'redux-saga/effects'
import { MENU_SUCCESS_OPTIONS, MENU_OPTIONS_FAIL } from '../../utils/action/menuIndex'

function getOptions( role ) {
  if ( role === 'testRole' ) return 'This is for test role'
  return 'This is for no role'
}

function* optionsWorker( action ) {
  try {
    const options = getOptions( action.role )
    yield put( { type: MENU_SUCCESS_OPTIONS, options } )
  } catch ( error ) {
    yield put( { type: MENU_OPTIONS_FAIL, error } )
  }
}

export default optionsWorker
