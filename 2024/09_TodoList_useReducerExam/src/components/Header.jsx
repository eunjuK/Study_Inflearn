import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">오늘은 📅</h1>
      <strong className="date">{new Date().toDateString()}</strong>
    </header>
  );
};

export default Header;