import './App.css'
import TodoInput from "./components/TodoInput.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    return (
        <div className="App">
            <TodoInput/>
            <TodoList/>
        </div>
    );
}

export default App
