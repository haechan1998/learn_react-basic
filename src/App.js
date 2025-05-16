// import logo from './logo.svg';
import './App.css';
import Count from './components/Count';
import Hello from './components/Hello';
import HelloProps from './components/HelloProps';
import InputSample from './components/InputSample';
import InputSample2 from './components/InputSample2';
import Start from './components/Start';
import UserList from './components/UserList';
import UserList2 from './components/UserList2'; 





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Start />
      <Hello />
      <HelloProps name="react" color="red"/>
      <hr />
      <Count />
      <hr />
      <InputSample />
      <hr />
      <InputSample2 />
      <UserList />
      <hr />
      <UserList2 />


      
    </div>
  );
}

export default App;
