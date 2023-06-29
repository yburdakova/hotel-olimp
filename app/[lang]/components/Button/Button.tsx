import React from 'react';
import styles from './button.module.css'

import { ButtonProps } from '@/constants/interfaces';

function Button( {text}:ButtonProps) {
  return (
    <div className={styles.button_container}>
        <div className={styles.button_text}>
            {text}
        </div>
    </div>
  )
}

export default Button;