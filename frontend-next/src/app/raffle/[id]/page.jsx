import React from 'react'
import styles from './raffleDetails.module.css'

export default function RaffleDetails({params}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
            <h2>Televisor</h2> 
            <img src='https://pc-tecnologia.com/855-large_default/televisor-samsung-32-pulgadas-serie-4.jpg' alt='prize'/>
        </div>
        <div className={styles.right_up}>
          board Component
        </div>
        <div className={styles.right_bottom}>
            <h2>100 boletas</h2>
            <h4>La Caribeña</h4>
            <h3>30 de Junio, 2023</h3>
            <button>Comprar boletas</button>
        </div>
      </div>
    </div>
  )
}
