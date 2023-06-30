import React from 'react'
import styles from './Board.module.css'

export default function Board({numTickets}) {

  const elements = Array.from({ length: parseInt(numTickets) }, (_, index) => index + 1);

  return (
    <div className={styles.wrapper}>
        {
            elements.map(number => (
                <p key={number}>{number}</p>
            ))
        }
    </div>
  )
}
