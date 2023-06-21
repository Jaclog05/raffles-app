'use client'

import NavBar from './components/navBar/NavBar'
import { useThemeContext } from '@/context/raffleState'
import Raffle from './components/raffleComponent/Raffle'
import styles from './page.module.css'

export default function Home() {

  const [raffleInfo, setRaffleInfo] = useThemeContext()

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
      {
        JSON.stringify(raffleInfo.rafflesArray)
      }
      <div className={styles.rafflesWrapper}>
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
                />
              )
            })
          : <h1>Aún no hay rifas creadas 🤔</h1>
          }
      </div>
    </div>
  )
}
