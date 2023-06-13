import React from 'react'
import styles from './createRaffle.module.css'
import NavBar from '../components/navBar/NavBar'

export default function CreateRaffle() {
  return (
   <>
   <NavBar/>
    <div className={styles.container}>
        <form>
            <label>
                Seleccione cuantas boletas tendrá la rifa
                <select>
                    <option>50 boletas</option>
                    <option>100 boletas</option>
                    <option>200 boletas</option>
                </select>
            </label>
            <label>
                Ingrese el articulo a rifar
                <input type='text'/>
            </label>
            <label>
                Indique con qué lotería se sabrá el ganador
                <input type='text'/>
            </label>
            <label>
                Indique la fecha en que jugará la rifa
                <input type="date" />
            </label>
            <label>
                Establezca el precio de la boleta (COP)
                <input type="number" step='500'/>
            </label>
            <input type="submit" value="Crear Rifa"/>
        </form>
    </div>  
   </> 
  )
}
