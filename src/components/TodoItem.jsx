import "./TodoItem.css";

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox"/>
            <div className="NotDone">content</div>
            <button>삭제</button>
        </div>
    );
};

export default TodoItem;