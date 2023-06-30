import React from 'react';
import styles from './button.module.css'

import { ButtonProps } from '@/constants/interfaces';

function Button( {text}:ButtonProps) {
  return (
    <div className={styles.button_container}>
      <a href="https://cloud.shelter.ru/hotels/HotelOlimp" target='_blank'>
        <div className={styles.button_text}>
            {text}
        </div>
      </a>
    </div>
  )
}

export default Button;