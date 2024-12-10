# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


==========

### Context
- 일종의 데이터 보관소 역할을 하는 객체
- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 props drilling을 단점을 해결할 수 있음
- 컴포넌트 외부에 선언
  - 데이터를 하위에 있는 컴포넌트들에게 공급햐면 되므로 app 컴포넌트가 리렌더링 될 때마다 다시 생성될 필요가 없음