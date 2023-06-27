import React from 'react'
import styles from './login.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles.container}>
        <form>
            <h3>Ingreso</h3>
            <label>
                Ingrese su correo electrónico
                <input name='email' type='email'/>
            </label>
            <label>
                Ingrese su contraseña
                <input name='password' type='password'/>
            </label>
            <input type="submit" value="Log In"/>
            <p>¿No tienes cuenta aún? Registrate <Link href='/register'>aquí</Link></p>
        </form>
    </div>
  )
}
