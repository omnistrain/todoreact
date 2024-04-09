import { useState } from 'react'

export default function EditTodo({todo, editTodo, toggleTodoEdit}){
    const [value, setValue] = useState(todo.content);

    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue)
    }


    function handleClick(){
        if(value.length){
            editTodo(todo.id, value);
        }
    }

    function handleKeyDown(e){
        if(e.code === "Enter" && value.length){
            editTodo(todo.id, value);
        }
    }

    function handleCancel(e){
        toggleTodoEdit(todo.id);
    }
    return (
        <div>
            <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Ajouter une todo"/>
            <button onClick={handleCancel} >Annuler</button>
            <button onClick={handleClick} >Modifier</button>
        </div>
    )
}