import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styles from './style'
import  {Link}  from "react-router-dom"
function ButtonAppBar( props ) {

  const { classes } = props
  return (
    <div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={ classes.menuButton } color="inherit" aria-label="Menu">
            Home
          </IconButton>
          <Button color="inherit"><Link className={classes.link} to="todolist" > Todo List</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.shape( {} ).isRequired,
}

export default withStyles( styles )( ButtonAppBar )
