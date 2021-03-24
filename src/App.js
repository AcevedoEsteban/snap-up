import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';

import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> react flask </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/create">new post</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
