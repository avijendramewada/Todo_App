 export const addTodo = (data) =>{
    return{
    type: "ADD_TODO",
    payload:{
        id: new Date().getTime().toString(),
        data:data
    }
}
}
export const deleteTodo =(id)=>{
    return{
        type:"DELETE_TODO",
         payload:{
             id:id
         }  
    }
}
export const editTodo =(id)=>{
    return{
        type:"EDIT_TODO",
        payload:{
            id:id
        }
    }
}
