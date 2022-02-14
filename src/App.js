import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App(props) {
  return (
    <div className="App" style={{paddingTop: '25px', paddingBottom: '25px', color: 'red', fontSize: '30px', fontWeight: '600',}}>
      Inline Styles бывают удобны, если стилизация задана с помощью сторонних программ. <br /><br />
      <header className="App-header">
        My First React App
        <h3>Hello, {props.name}</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
