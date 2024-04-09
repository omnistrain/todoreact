import '../assets/todo.css'

export default function TodoItem({todo, deleteTodo, toggleTodo, toggleTodoEdit, selectedTodo}){
    return (
        <li className={todo.selected ? 'selected': ''} onClick={selectedTodo}>
            <span>{todo.content} {todo.done && '(OK)'}</span>
            <button onClick={(e)=> {e.stopPropagation(), toggleTodo()}}>Valider</button>
            <button onClick={(e) => {e.stopPropagation(); toggleTodoEdit(todo.id)}}>Modifier</button>
            <button onClick={(e) => {e.stopPropagation();deleteTodo(todo.id)}}>Supprimer</button>
        </li>
    )
}