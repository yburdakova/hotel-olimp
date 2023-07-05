import React from 'react';
import styles from './Button.module.css'

import { ButtonProps } from '@/constants/interfaces';

function Button( { text, openModal, textsize }:ButtonProps) {
  
  return (
    <div className={styles.container} onClick={openModal}>
        <div className={`text-${textsize} font-bold tracking-wide`}>
            {text}
        </div>
    </div>
  )
}

export default Button;