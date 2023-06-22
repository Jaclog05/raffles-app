'use client'

import NavBar from './components/navBar/NavBar'
import { useThemeContext } from '@/context/raffleState'
import Raffle from './components/raffleComponent/Raffle'
import styles from './page.module.css'
import daysToRaffle from './components/raffleComponent/raffleDates'

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
    <div className={styles.container}>
      <NavBar/>
      <div className={raffleInfo.rafflesArray.length ? styles.rafflesWrapper : styles.noRafflesCreated}>
          { raffleInfo.rafflesArray.length ? 
            raffleInfo.rafflesArray.map((raffle, idx) => {
              return (
                <Raffle
                    id={raffle.id}
                    key={idx}
                    numTickets={raffle.numTickets}
                    prize={raffle.prize}
                    lotery={raffle.lotery}
                    date={raffle.date}
                    price={raffle.price}
                    handleClosing={handleClosing}
                    dateInfo={daysToRaffle(today, raffle.date)}
                />
              )
            })
          : <h1>Aún no hay rifas creadas 🤔</h1>
          }
      </div>
    </div>
  )
}
