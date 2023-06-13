import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <header className={styles.container}>
      <div>Raffles App</div>
      <ul>
        <li>Jaider</li>
        <li>Nueva Rifa</li>
      </ul>
    </header>
  )
}
