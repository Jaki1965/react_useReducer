
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
          <button className={styles.change_name_button} onClick={()=> dispatch({type: 'add'})}>IGOR</button>
          <button className={styles.change_name_button} onClick={()=> dispatch({type: 'change'})}>SERGEY</button>
          <button className={styles.change_name_button} onClick={()=> dispatch({type: 'reset'})}>RESET</button>
        </div>
        <div className={styles.change_name_name}>
            Name: {state.name}
        </div>
      
      </div>
    </>
    
  );
}

export default ChangeName;