import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav id='navbar'>
        <Link to='/'>MoviesLib</Link>
        <Link to='/movie/1'>Movie</Link>
        <Link to='/search'>Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
