# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


-----

## Router
```
npm i react-router-dom
```
- Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능

1. Routes, Route
```
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
```

2. Link를 이용한 navigator
```
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
```

3. useNavigate를 이용한 navigator
```
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new")
  }
  return (
    <>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;
```


## 동적경로
1. useParmas 커스텀 훅
- 현재 브라우저에 명시한 URL 파라미터의 값을 가져오는 기능을 하는 커스텀 훅
- `localhost:5173/diary/100`

```
<Route path="/diary/:id" element={<Diary />} />
```
```
import { useParams } from "react-router-dom";

const Diary = () => {
  const   params = useParams();
  console.log(params);

  return <div>Diary</div>
}

export default Diary;
```

2. QueryString
- 라우트 컴포넌트에 별도 설정 없음
- `localhost:5173/diary?value=hello`

```
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("valuse"));

  return <div>Home</div>
}

export default Home;
```

## 이미지 경로
- 소수의 이미지를 사용할 경우
  - src/assets 폴더에 보관하여 캐싱되도록 사용
  ```
  import emotion1 from './assets/emotion1.png';
  
  function App() {
    return (
      <div>
        <img src={emotion1} alt="" />
      </div>
    )
  }
  ```
- 다수의 이미지를 사용할 경우
  - public 폴더에 사용
    - 브라우저 메모리에 캐싱할 경우 과부하 문제가 발생할 수 있기 때문
  ```
  function App() {
    return (
      <div>
        <img src={"/emotion1.png"} alt="" />
      </div>
    )
  }
  ```

## 프로젝트 개발 순서
- 프로젝트 개발 순서는 사람마다 다름
1. 페이지 라우팅
2. 글러벌 레이아웃 설정
3. 공통 컴포넌트 구현
4. 개별 페이지 및 복잡한 기능 구현


## 웹 스토리지 (Web Storage) : 웹 브라우저 내장 DB
- 데이터를 브라우저에 보관하는 방법, 일종의 데이터 베이스
- 웹 브라우저에 기본적으로 내장되어있는 데이터 베이스
- 별도의 프로그램 설치 필요 X, 라이브러리 설치 필요 X
- 자바스크립트 내장함수 만으로 접근 가능

### SessionStorage
- 브라우저 탭 별로 데이터를 보관
- 탭이 종료되기 전에는 데이터 유지 (새로고침)
- 탭이 종료되거나 꺼지면 데이터 삭제
- ex)
  - 값 저장 : `sessionStorage.setItem(key, value)`
  - 값 꺼내기 : `sessionStorage.getItem(key)`
  - 값 삭제 : `seeeiontStorage.removeItem(key)`

### LocalStorage
- 사이트 주소별로 데이터 보관
- 사용자가 직접 삭제하기 전까지 데이터 보관
- ex)
  - 값 저장 : `localStorage.setItem(key, value)`
    - key : 원시데이터 값만 넣을 수 있음 (숫자, 문자, )
    - value : 실제 저장될 값
  - 값 꺼내기 : `localStorage.getItem(key)`
  - 값 삭제 : `localStorage.removeItem(key)`



## 최적화
### 필요한 때?
- 비용이 많이 드는 계산
- 매우 여러번, 반복적으로 실행되는 연산
  - ex) API를 호출해서 데이터를 가공하고 하는 등등의 작업들

### React 레더링 최적화와 관련된 기능들
- useMemo
- useCallback
- React.memo