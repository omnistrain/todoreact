import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";

export default function TodoList({todoList, deleteTodo, toggleTodo, toggleTodoEdit, editTodo, selectedTodo, cancelEditTodo}){
    return todoList.length ? (
        <ul>
            {todoList.map(
                (todo, index) => todo.edit ?
                <EditTodo key={todo.id} editTodo={editTodo} toggleTodoEdit={toggleTodoEdit} todo={todo} />
                :
                <TodoItem
                    selectedTodo={() => selectedTodo(todo.id)}
                    key={todo.id} 
                    toggleTodo={() => toggleTodo(todo.id)}
                    toggleTodoEdit={toggleTodoEdit}
                    deleteTodo={deleteTodo} 
                    todo={todo}
                    
                />
        )}

        </ul>
    ) : <p>Aucune todo</p>;
}