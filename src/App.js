import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect,useRef} from 'react'; 
function App() {
  const mail = useRef(); 
  const password= useRef(); 
  const handleSubmit = (e) => {
    console.log('mail',mail.current.value)
    console.log('password',password.current.value);
  }
  return (
    <div className="App">
      <input type="text"  ref={mail} />
      <input type="text" ref={password} />
      <button onClick={handleSubmit}>test</button>
    </div>
  );
}

export default App;
