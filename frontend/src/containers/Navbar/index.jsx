import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '../../components/AppBar'
import getMenuOptions from './action'

const Navbar = () => ( <AppBar /> )

const mapStateToProps = state => ({ options: state.menuOptionsReducer })

const mapDispatchToProps = dispatch => ({
  getOptions: (role = null) => dispatch(getMenuOptions(role)),
})

Navbar.propTypes = {
  options: PropTypes.shape({}).isRequired,
  getOptions: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
