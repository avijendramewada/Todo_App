import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import {Button,TextField,ButtonGroup} from '@material-ui/core'
import {addTodo,deleteTodo,editTodo} from '../../containers/_TodoList/_actions/index'
import { connect } from 'react-redux'
import styles from './style'

const TodoList = (props) =>{
  const { classes } = props
  const [inputData,setInputData]= useState("");
  const dispatch =useDispatch();
  const list = useSelector((state)=>state.todoReducers.list)
  const onChangeHandler = event => {
    setInputData(event.target.value)
  };
    return(
      <div className={classes.rootTodo}>
          <h1>Todo List</h1>
          <div className="addTodo">
          <TextField id="filled-basic" label="Add Todo" variant="filled"
           placeholder="Enter item"
           value={inputData}
           onChange={onChangeHandler}/>
          <Button className={classes.button} onClick={()=>dispatch(addTodo(inputData),setInputData(''))}>Add</Button>
          </div>
          <div className="showItem">
          {
                   list.map((elem)=>{
                       return (<div key={elem.id}>
                       <h2>{elem.data} <Button className={classes.buttonGroup} onClick={()=>dispatch(deleteTodo(elem.id))}>Delete</Button >
                       <Button className={classes.buttonGroup} onClick={()=>dispatch(editTodo(elem.id))} >Edit</Button ></h2>
                       </div>)

                   })
               }
          </div>
        
      </div>  
    )
}
export default withStyles( styles )( TodoList )