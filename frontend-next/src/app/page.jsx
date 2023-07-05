'use client'

import { useThemeContext } from '@/context/raffleState'
import Raffle from './components/raffleComponent/Raffle'
import styles from './page.module.css'
import daysToRaffle from './components/raffleComponent/raffleDates'
import Link from 'next/link'

export default function Home() {

  const [raffleInfo, setRaffleInfo] = useThemeContext()
  
  const today = new Date()

  const handleClosing = (id) => {
    setRaffleInfo(prevInfo => {
      return {
        ...prevInfo,
        rafflesArray: prevInfo.rafflesArray.filter(raffle => raffle.id != id)
      }
    })
  }

  return (
      <div className={raffleInfo.rafflesArray.length ? styles.rafflesWrapper : styles.noRafflesCreated}>
          { raffleInfo.rafflesArray.length ? 
            raffleInfo.rafflesArray.map((raffle, idx) => {
              return (
                <Link href={`/raffle/${encodeURIComponent(raffle.id)}`}>
                  <Raffle
                    id={raffle.id}
                    key={idx}
                    img={raffle.image}
                    numTickets={raffle.numTickets}
                    prize={raffle.prize}
                    price={raffle.price}
                    handleClosing={handleClosing}
                    dateInfo={daysToRaffle(today, raffle.date)}
                />
                </Link>
              )
            })
          : <h1>Aún no hay rifas creadas 🤔</h1>
          }
      </div>
  )
}
