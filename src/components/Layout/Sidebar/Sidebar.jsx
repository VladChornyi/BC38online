import { AuthContext } from 'context/AuthContext';
import { useContext, useState } from 'react';

export const Sidebar = () => {
  const [password, setPassword] = useState('');
  console.log('Sidebar rendered :>> ');

  const { isAuth, logIn } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    logIn(password);
  };

  if (!isAuth) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="btn primary-btn">
          LOGIN
        </button>
      </form>
    );
  }

  return (
    <aside className="nav nav-pills p-5 bg-light w-100" style={{ maxWidth: '300px', height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: 'max-content' }}>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-light">
          Home
        </a>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-link">
          Profile
        </a>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-link">
          Messages
        </a>
        <a href="/" style={{ textAlign: 'left' }} className="btn btn-link">
          Settings
        </a>
      </div>
    </aside>
  );
};
