import logo from './Holberton.logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const isIndex = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo"/>
        <h1>School dashboard</h1>
        
        
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard </p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
        </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
        <p>{getFooterCopy(isIndex)}</p>
        <p>{getFullYear()}</p>
      </div>
    </div>
  );
}

export default App;
