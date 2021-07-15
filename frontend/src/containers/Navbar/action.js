import { MENU_OPTIONS } from '../../utils/action/menuIndex'

const getMenuOptions = ( role = null ) => ( { type: MENU_OPTIONS, role } )

export default getMenuOptions
