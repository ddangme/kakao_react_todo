import "./TodoInput.css";

const TodoInput = () => {
    return (
        <div className="TodoInput">
            <input placeholder="새로운 Todo를 입력해주세요."/>
            <button>추가</button>
        </div>
    );
};

export default TodoInput;