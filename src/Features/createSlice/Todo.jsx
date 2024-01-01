import { createSlice,current } from "@reduxjs/toolkit";

const todo = createSlice({
    name: "Todo",
    initialState: {
        value: []
    },
    reducers: {
        add: (state, action) => {
            const value = { ...action.payload }
            
            value.id = state.value.length + 1;
            console.log(value)
            state.value.push(value)
        },
        remove: (state, action) => {
            const id = action.payload
            const x = state.value.filter((value) => value.id !== id.id);
            state.value.length = 0
            state.value = x
        },
        edit:(state,{payload})=> {
            console.log(payload)
            const arr=state.value.map((vl)=>{
                if(vl.id===payload.id) {
                    vl.task=payload.task
                    return vl
                } 
                else{
                    return vl;
                }
            })
            console.log(current(arr[0]))
            state.value=arr;
            

        }


    }

})
export { todo };
export const { add, remove, edit } = todo.actions
export default todo.reducer;