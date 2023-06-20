import React from 'react'
import styles from './Raffle.module.css'

export default function Raffle({numTickets, prize, lotery, date, price}) {
  return (
    <div className={styles.container}>
      <h4>{numTickets}</h4>
      <h4>{prize}</h4>
      <h4>{lotery}</h4>
      <h4>{date}</h4>
      <h4>{price}</h4>
    </div>
  )
}
