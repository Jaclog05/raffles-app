'use client'

import React from 'react'
import styles from './raffleDetails.module.css'
import { useThemeContext } from '@/context/raffleState'
import { useState } from 'react'
import daysToRaffle from '@/app/components/raffleComponent/raffleDates'
import Board from '@/app/components/board/Board'

export default function RaffleDetails({params}) {

  const [raffleInfo, setRaffleInfo] = useThemeContext()

  const filterRaffle = (rafflesArray, id) => {
    return rafflesArray.find(raffle => raffle.id == id)
  }

  const today = new Date()

  const [raffle, setRaffle] = useState(filterRaffle(raffleInfo.rafflesArray, params.id))

  return (
    <div className={ raffle ? styles.wrapper : styles.raffleNotFound}>
      { raffle  ? 
        <div className={styles.container}>
          <div className={styles.left}>
              <h2>{raffle.prize}</h2> 
              <img src='https://pc-tecnologia.com/855-large_default/televisor-samsung-32-pulgadas-serie-4.jpg' alt='prize'/>
          </div>
          <Board numTickets={raffle.numTickets}/>
          <div className={styles.right_bottom}>
              <h2>{raffle.numTickets} Boletas</h2>
              <h4>Juega con la lotería {raffle.lotery}</h4>
              <h3>{daysToRaffle(today, raffle.date)}</h3>
              <button>Comprar boletas</button>
          </div>
        </div>
        : 
          <h2>Rifa No Encontrada 🤔</h2>
      }
    </div>
  )
}
