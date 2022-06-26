import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react'; 
function App() {
  //const [count , setCount] = useState(0);
  const [count,setCount] = useState(0);
  const [title, setTitle]= useState('title'); 
  const handleCount = ()=> setCount((c)=> c+1); 
  const handleTitle= ()=> setTitle('algorithm academy')
    useEffect(() => {
      console.log("use Effect1");
    }, []);
  useEffect(()=> {
    console.log('use count')
  },[count])
   useEffect(() => {
     console.log("use title");
   },[title]);
  return (
    <div className="App">
      <button onClick={handleCount}>{count}</button>
      <button onClick={handleTitle}>{title}</button>
    </div>
  );
}

export default App;
