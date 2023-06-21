import React from 'react'
import styles from './Raffle.module.css'

export default function Raffle({id, numTickets, prize, lotery, date, price, handleClosing}) {

  const handleClick = (e) => {
    e.preventDefault()
    handleClosing(id)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick}> X </button>
      <h4>{numTickets}</h4>
      <h4>{prize}</h4>
      <h4>{lotery}</h4>
      <h4>{date}</h4>
      <h4>{price}</h4>
    </div>
  )
}
