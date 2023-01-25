import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../header/header.module.scss"
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.head}>
<h2>Floral Studio</h2>
      </div>
      <div className={styles.ul}>
        <ul>
            <li><Link to="/" className={styles.link}>Home</Link></li>
            <li><Link to="/add" className={styles.link}>Add</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default Header
