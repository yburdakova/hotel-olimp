import React from 'react';
import styles from './Button.module.css'

import { ButtonProps } from '@/constants/interfaces';

function Button( { text, openModal, textsize }:ButtonProps) {
  return (

    <div className={` bg-[#3F9EDE] flex text-white px-5 py-3 m-4 rounded-3xl uppercase min-w-[200px] justify-center`} onClick={openModal}>
        <div className={`text-${textsize}`}>
            {text}
        </div>
    </div>
  )
}

export default Button;