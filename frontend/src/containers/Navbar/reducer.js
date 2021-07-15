import { MENU_SUCCESS_OPTIONS, MENU_OPTIONS_FAIL } from '../../utils/action/menuIndex'

const initialState = []

function menuOptionsReducer( state = initialState, action ) {
  switch ( action.type ) {
    case MENU_SUCCESS_OPTIONS:
      return action.options

    case MENU_OPTIONS_FAIL:
      return action.error

    default:
      return state
  }
}

export default menuOptionsReducer
