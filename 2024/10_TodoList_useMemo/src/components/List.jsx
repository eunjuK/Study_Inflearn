import './List.css';
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

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

  // 2번째 인자 == 의존성배열 : deps
  // deps에 포함된 값이 변경되었을 때에만 첫번재 인수로 전달한 콜백함수를 다시 실행
  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    // 메모이제이션 하고 싶은 연산
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todos]);

  // const {totalCount, doneCount, notDoneCount} = getAnalyzedData()

  return (
    <div className="list">
      <h2 className="content_title">Todo List 🌱</h2>
      <div>
        <p>total: {totalCount}</p>
        <p>done: {doneCount}</p>
        <p>notDone: {notDoneCount}</p>
      </div>
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