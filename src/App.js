
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrease, increase, reset } from './actions';

function App() {
  const myState = useSelector((state)=>state.inc_dec);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to React-Redux</h1>
      <h1>Count={myState}</h1>
      <br/>
      
      <button className='tbdr' onClick={()=>{dispatch(increase())}}>Increment by one</button>
      <button className='tbdr' style={{backgroundColor:"red"}} onClick={()=>{dispatch(reset())}}>Reset</button>
      <button className='tbdr' onClick={()=>{dispatch(decrease())}}>decrement by one</button>
      
      
    </div>
  );
}

export default App;
