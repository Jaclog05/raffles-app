import React, {useState} from 'react'
import styles from './Board.module.css'

export default function Board({numTickets}) {

  const elements = Array.from({ length: parseInt(numTickets) }, (_, index) => {
    return {
      value: index + 1,
      picked: false
    }
  });

  const [boardState, setBoardState] = useState(elements)

  const toggle = (index) => {
    setBoardState((prevItems) => {
      const updatedItems = [...prevItems];
      const item = { ...updatedItems[index] };
      item.picked = !item.picked; 
      updatedItems[index] = item;
      return updatedItems;
    });
  };

  return (
    <div className={styles.wrapper}>
        {
            boardState.map((number, idx) => (
                <p 
                  key={number.value}
                  onClick={() => toggle(idx)}
                  className={number.picked ? styles.picked : styles.noPicked}
                >
                  {number.value}
                </p>
            ))
        }
    </div>
  )
}
