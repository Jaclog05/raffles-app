'use client'

import NavBar from './components/navBar/NavBar'
import { useThemeContext } from '@/context/raffleState'
import Raffle from './components/raffleComponent/Raffle'

export default function Home() {

  const [raffleInfo, setRaffleInfo] = useThemeContext()


  return (
    <>
      <NavBar/>
      {
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
      }
    </>
  )
}
