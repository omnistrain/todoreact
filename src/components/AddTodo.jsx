import { useState } from 'react'

export default function AddTodo({addTodo}){

    const [value, setValue] = useState('');

    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue)
    }

    function handleClick(){
        if(value.length){
            addTodo(value);
            setValue("");
        }
    }

    function handleKeyDown(e){
        if(e.code === "Enter" && value.length){
            addTodo(value);
            setValue("");
        }
    }
    return (
        <div>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Ajouter une todo"/>
            <button onClick={handleClick} >Ajouter</button>
        </div>
    )
}