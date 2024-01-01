import { useDispatch, useSelector } from "react-redux"
import { add,edit } from "../Features/createSlice/Todo";
import { useEffect, useState } from "react";

export default function Search({update,setUpdate}) {
const dispatch=useDispatch();
const temp={
    id:17,
    task:""
};
const [state,setState]=useState(temp);
useEffect(()=>{
    
    if(update!=null) {
        console.log(update)
        const vl={...state}
        vl['id']=update.id;
        vl["task"]=update.task;
        setState(vl)
    }
    

},[update])
function addTask() {
    if(update!=null) {
        console.log(state)
        
        dispatch(edit(state))
        setState(temp);
        setUpdate(null)
        
    } 
    else{
        dispatch(add(state))
        setState(temp)
    }
}
    return(
        <div className="Search w-screen flex justify-center ">
            <input type="text" placeholder="Enter Your Todo" className="px-4 py-2 border-white text-center rounded-lg w-2/4"
            style={{fontWeight:"400"}}
            onChange={(e)=>{
                if(state!=undefined) {
                 const dump={...state}
                dump.task=e.target.value
                setState(dump)
                }
            }}
            value={state.task}/>
            
            <button className="px-4 py-2 ml-4 bg-slate-100 rounded-lg" style={{fontWeight:"400"}}
            onClick={()=>addTask()}
            >{(update)?"Edit":"Add"
            }</button>
        </div>
    )
}