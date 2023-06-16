import React from 'react'
import styles from "./WhishList.module.css"

const WhishList = () => {
  return (
  <div className={styles.container}>
    <div className={styles.juegosContainer}>
        <div className={styles.cajitaItems}>
            <div className={styles.emptyCart}> 
                <p> WhishList </p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default WhishList