# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


==========

### Memoization
기억해두기, 메모해두기

### useMemo
`메모이제이션` 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅


### useCallback과 함수 재생성 방지
```
useCallback(() => {최적화하고 싶은 함수}, [deps])
```
- 최적화하고 싶은 함수 : 불필요하게 재생성 되지 않도록 방지하고 싶은 함수
- deps : 
  - 빈 배열로 적용할 경우 : 최초 한번만 리렌더링 될때 함수 생성 (마운트 될때만 딱 한번 함수 생성)

### 최적화 하기 좋은 시점
- 기능 구현 후 최적화 하는것이 일반적

### 최적화 대상
- 꼭 최적화가 필요할 것 같은 연산, 함수, 컴포넌트들에 최적화


### 추가로 읽어보면 좋을 내용
- (When-to-useMemo-and-useCallback/)[https://goongoguma.github.io/2021/04/26/]