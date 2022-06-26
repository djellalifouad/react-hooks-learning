import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react'; 
function App() {
  //const [count , setCount] = useState(0);
  const [{count,count2},setCount] = useState({count:0,count2:1});
  return (
    <div className="App">
    <p onClick={() => setCount(currentState => ({...currentState,count:currentState.count+1}))}> you clicked {count}</p>
    </div>
  );
}

export default App;
