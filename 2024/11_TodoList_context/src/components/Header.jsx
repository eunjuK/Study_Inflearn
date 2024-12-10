import './Header.css'
import { memo } from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">오늘은 📅</h1>
      <strong className="date">{new Date().toDateString()}</strong>
    </header>
  );
};

// const memoizedHeader = memo(Header)

// export default memoizedHeader;
export default memo(Header);