import "./TodoList.css";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
    return (
        <div className="TodoList">
            <div className="Todo">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    );
};

export default TodoList;