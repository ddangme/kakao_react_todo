import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, onUpdate, onDelete }) => {
    const onChangeCheckBox = () => {
        onUpdate(id);
    };

    const onDeleteTodo = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input checked={isDone} onChange={onChangeCheckBox} type="checkbox"/>
            <div className={isDone ? 'Done' : 'NotDone'}>{content}</div>
            <button onClick={onDeleteTodo}>삭제</button>
        </div>
    );
};

export default TodoItem;