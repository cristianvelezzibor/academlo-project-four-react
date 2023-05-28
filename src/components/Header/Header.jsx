import "./Header.css";

const Header = ({ onCreateUser }) => {
  return (
    <>
      <header className="header">
        <h1>Users</h1>
        <button onClick={() => onCreateUser()}>
          <i className="fa-solid fa-plus"></i>
          Create a new user
        </button>
      </header>
    </>
  );
};

export default Header;
