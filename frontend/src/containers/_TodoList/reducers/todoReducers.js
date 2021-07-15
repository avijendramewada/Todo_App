const initialState ={
    list:[]
}
const todoReducers =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TODO" :
            const {id,data} = action.payload
            if(!data){
                alert("please enter item")
            }else{
            return{
                ...state,
                    list: [
                        ...state.list, {
                            id:id,
                            data:data
                    }]

                }}
                case "DELETE_TODO" :
                    const newList= state.list.filter((elem)=>elem.id !==action.payload.id) 
                    return{
                        ...state,
                          list:newList
        
                        }
                 case "EDIT_TODO" :
                    let newEditItem=state.list.find((elem)=>{
                        return elem.id===action.payload.id
                    })
                    let item =newEditItem.data
                    return {
                        ...state,
                   list:item
                // setEdititem(id);     
                    }  
                        
                default:return state;
            }
            
    }
export default todoReducers;