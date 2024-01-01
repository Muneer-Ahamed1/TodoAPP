import "../index.css"
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search"
import { add, remove } from "../Features/createSlice/Todo";
import { useState } from "react";

export default function Todo() {
    const [update, setUpdate] = useState(null);
    const sel = useSelector((state) => {
        return state.todo.value
    });
    function edit(value) {
        value && setUpdate(value);

    }



    return (
        <div className="Todo flex-col md-2 ">
            <h1 className="text-center font-large text-5xl text-white mb-5 ">What Is Your Today Todo</h1>
            <Search update={update} setUpdate={setUpdate}></Search>

            <div className="Container mt-3 mb-2 flex flex-col items-center ">
                {
                    sel && (sel.length>0)? sel.map((value, index) => {
                        return (
                            <Contain key={value.id} id={value.id} edit={edit}>
                                {` ${value.task}`}
                            </Contain>
                        )

                    }):<h1>EMpty</h1>}

            </div>
        </div>
    )
}

function Contain({ children, id, edit }) {
    const dispatch = useDispatch();

    return (
        <div className="contain flex items-center justify-center bg-slate-50 rounded-md w-2/3 px-2 py-2 my-2">
            <h1 className="w-4/5 pl-4">{children}</h1>
            <Button id={id}
                onclick={() => {
                    console.log(id)
                    const obj = { "id": id }
                    dispatch(remove(obj))

                }}
            >DEL</Button>

            <Button id={id}
                onclick={() => {
                    const obj = {
                        id: id,
                        task: children
                    }
                    edit(obj)
                }}
            >Edit</Button>
        </div>
    )

}
function Button({ children, id, onclick }) {

    return (
        <>
            <button className="px-4 py-2 mr-2 rounded-md bg-zinc-800 text-white"
                onClick={onclick}
            >
                {children}
            </button>
        </>
    )
}