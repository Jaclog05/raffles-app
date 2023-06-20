'use client'

import NavBar from './components/navBar/NavBar'
import { useThemeContext } from '@/context/raffleState'
import Raffle from './components/raffleComponent/Raffle'
import styles from './page.module.css'

export default function Home() {

  const [raffleInfo, setRaffleInfo] = useThemeContext()


  return (
    <div className={styles.container}>
      <NavBar/>
      <div className={styles.rafflesWrapper}>
          { raffleInfo.rafflesArray.length ? 
            raffleInfo.rafflesArray.map((raffle, idx) => {
              return (
                <Raffle
                    key={idx}
                    numTickets={raffle.numTickets}
                    prize={raffle.prize}
                    lotery={raffle.lotery}
                    date={raffle.date}
                    price={raffle.price}
                />
              )
            })
          : <h1>Aún no hay rifas creadas 🤔</h1>
          }
      </div>
    </div>
  )
}
