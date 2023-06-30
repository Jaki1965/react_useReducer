
import React, { useReducer } from 'react';
import styles from './change-name.module.css';
import {initialstateName, reducerName} from '../utils/reducer';



function ChangeName() {

  const [state, dispatch] = useReducer(reducerName, initialstateName)
  
  return (
    <>
      <div className={styles.change_name}>
        <h2 className={styles.change_name_title}>ИМЯ</h2>
        <div className={styles.change_name_buttons}>
          <button className='App-button' onClick={()=> dispatch({type: 'add'})}>ДОБАВИТЬ</button>
          <button className='App-button' onClick={()=> dispatch({type: 'change'})}>ИЗМЕНИТЬ</button>
          <button className='App-button' onClick={()=> dispatch({type: 'reset'})}>СБРОС</button>
        </div>
        <div className='App-count'>
            Name: {state.name}
        </div>
      
      </div>
    </>
    
  );
}

export default ChangeName;