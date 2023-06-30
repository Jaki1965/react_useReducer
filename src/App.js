import './App.css';
import {reducer, initialstate} from './utils/reducer';
import {useReducer} from 'react';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="App">
      <header className="App-header">
       ЗДЕСЬ БУДЕТ ПРОЕКТ
      </header>
      <div className="App-counter">
        <h2>СЧЕТЧИК</h2>
        <div className='App-buttons'>
          <button className='App-button' onClick={()=> dispatch({type: 'decrement'})}>МИНУС</button>
          <button className='App-button' onClick={()=> dispatch({type: 'increment'})}>ПЛЮС</button>
          <button className='App-button' onClick={()=> dispatch({type: 'reset'})}>СБРОС</button>
        </div>
        <div className='App-count'>
        Count: {state.count}
        </div>
      </div>
    </div>
  );
}

export default App;
