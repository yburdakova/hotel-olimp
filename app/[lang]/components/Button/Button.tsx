import React from 'react';
import styles from './button.module.css'

function Button( {text}:any) {
  return (
    <div className={styles.button_container}>
        <div className={styles.button_text}>
            {text}
        </div>
    </div>
  )
}

export default Button;