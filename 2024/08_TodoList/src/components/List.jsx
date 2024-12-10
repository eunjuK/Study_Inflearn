import './List.css';
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if(search === "") {
      return todos;
    }
    return todos.filter((todo) => 
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }

  const filteredTodos = getFilteredData();

  return (
    <div className="list">
      <h2 className="content_title">Todo List 🌱</h2>
      <input 
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id}
              {...todo} 
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List; 