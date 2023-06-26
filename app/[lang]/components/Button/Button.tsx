import React from 'react';
import styles from './button.module.css'

function Button() {
  return (
    <div className={styles.button_container}>
        <div className={styles.button_text}>
            BOOKING
        </div>
    </div>
  )
}

export default Button