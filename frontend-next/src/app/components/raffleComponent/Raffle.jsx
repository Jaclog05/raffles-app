import React from 'react'
import styles from './Raffle.module.css'

export default function Raffle({id, numTickets, prize, lotery, date, price, handleClosing, dateInfo}) {

  const handleClick = (e) => {
    e.preventDefault()
    handleClosing(id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <h4>{prize}</h4>
        <button onClick={handleClick}> ✖ </button>
        <img src='https://pc-tecnologia.com/855-large_default/televisor-samsung-32-pulgadas-serie-4.jpg' alt='prize'/>
      </div>
      <div className={styles.bottom}>
        <h4 className={styles.price}>$ {price} /<span>boleta</span></h4>
        <h3 className={styles.numTickets}>{numTickets} boletas</h3>
        <h5>{dateInfo} <span className={dateInfo[3] !== 'ó' ? styles.playing : styles.finished}> ● </span></h5>
      </div>
    </div>
  )
}
