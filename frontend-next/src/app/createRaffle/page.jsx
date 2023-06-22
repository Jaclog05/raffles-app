'use client'

import React from 'react'
import styles from './createRaffle.module.css'
import NavBar from '../components/navBar/NavBar'
import { useThemeContext } from '@/context/raffleState'
import { useState } from 'react'
import { initialState } from './initialState'

export default function CreateRaffle() {

  const [raffleGlobal, setRaffleGlobal] = useThemeContext()

  const [raffleInfo, setRaffleInfo] = useState(initialState)

  const handleChange = (e) => {
    const {value, name} = e.target
        setRaffleInfo(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRaffleGlobal(prevState => {
        const newId = prevState.rafflesArray.length;
        return {
            ...prevState,
            rafflesArray: [...prevState.rafflesArray, {id: newId, ...raffleInfo}]
        }
    })
    setRaffleInfo(initialState)
  }

  return (
   <>
   <NavBar/>
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
            <h3>Creación de Rifas</h3>
            <label>
                Seleccione cuantas boletas tendrá la rifa
                <select name='numTickets' onChange={handleChange}>
                    <option name='numTickets' value={50}>50 boletas</option>
                    <option name='numTickets' value={100}>100 boletas</option>
                    <option name='numTickets' value={200}>200 boletas</option>
                </select>
            </label>
            <label>
                Ingrese el articulo a rifar
                <input onChange={handleChange} name='prize' value={raffleInfo.prize} type='text'/>
            </label>
            <label>
                Indique con qué lotería se sabrá el ganador
                <input onChange={handleChange} name='lotery' value={raffleInfo.lotery} type='text'/>
            </label>
            <label>
                Indique la fecha en que jugará la rifa
                <input onChange={handleChange} name='date' value={raffleInfo.date} type="date" />
            </label>
            <label>
                Establezca el precio de la boleta (COP)
                <input onChange={handleChange} name='price' value={raffleInfo.price} type="number" step='500'/>
            </label>
            <input type="submit" value="Crear Rifa"/>
        </form>
    </div>  
   </> 
  )
}
