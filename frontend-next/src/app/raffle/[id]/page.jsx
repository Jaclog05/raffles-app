'use client'

import React from 'react'
import styles from './raffleDetails.module.css'
import { useThemeContext } from '@/context/raffleState'
import { useState, useEffect } from 'react'
import daysToRaffle from '@/app/components/raffleComponent/raffleDates'
import Board from '@/app/components/board/Board'
import axios from 'axios'

export default function RaffleDetails({params}) {

  const today = new Date()

  const [raffle, setRaffle] = useState([])

  useEffect(() => {

    async function fetchData(){
      const response = await axios.get(`http://localhost:4000/raffle/${params.id}`)
      return response.data
    }

    fetchData().then((rafflesAxios) => {
      setRaffle(rafflesAxios[0])
    })
  }, [])

  return (
    <div className={ raffle ? styles.wrapper : styles.raffleNotFound}>
      { raffle  ? 
        <div className={styles.container}>
          <div className={styles.left}>
              <h2>{raffle.prize}</h2> 
              <img src={raffle.image} alt='prize'/>
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
