import React from 'react'
import styles from "./header.module.scss"

export const Header  = () => {
  return (
    <div className={styles.headerContainer}> 
        <h1>My shop</h1>
        <nav>
          <ul className={styles.navItems}>
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Login</li>
          </ul>
        </nav>
    </div>
  )
}

export default Header;