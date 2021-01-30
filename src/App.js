import React,{useEffect} from 'react';
import Chat from './components/Chat';
import { getMessageData } from './actions'
import { useDispatch } from 'react-redux'
import './App.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMessageData())
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <Chat/>
    </div>
  );
}

export default App;
