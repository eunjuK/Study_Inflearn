import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  switch(action.type) {
    case "INCREASE" :
      return state + action.data;
    case "DeCREASE" :
      return state - action.data;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급승하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    dispatch({
      type : "INCREASE",
      data: 1,
    });
  }
  
  const onClickMinus = () => {
    dispatch({
      type : "DeCREASE",
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus} type="button">+</button>
      <button onClick={onClickMinus} type="button">-</button>
    </div>
  );
};

export default Exam;