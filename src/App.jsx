import './App.css'

import { useRef, useState, useReducer } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";


function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
        case "DELETE":
            return state.filter(
                (item) => item.id !== action.targetId
            );
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content
            }
        });
    };

    const onUpdate = (targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        });
    };

    return (
        <div className="App">
            <TodoInput onCreate={onCreate}/>
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        </div>
    );
}

export default App
