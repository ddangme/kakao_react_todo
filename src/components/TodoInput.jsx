import "./TodoInput.css";
import {useState, useRef} from "react";

const TodoInput = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }

        setContent("");
        onCreate(content);
    };

    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoInput">
            <input onKeyDown={onKeydown} ref={contentRef} value={content} onChange={onChangeContent} placeholder="새로운 Todo를 입력해주세요."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default TodoInput;