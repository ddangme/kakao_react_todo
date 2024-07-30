import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, onUpdate, onDelete }) => {
    return (
        <div className="TodoList">
            <div className="Todo">
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    );
};

export default TodoList;