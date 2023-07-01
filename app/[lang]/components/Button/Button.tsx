import React from 'react';
import styles from './Button.module.css'

import { ButtonProps } from '@/constants/interfaces';

function Button( { text, openModal, textsize }:ButtonProps) {
  return (

    <div className={` bg-[#3F9EDE] flex text-white px-5 py-3 m-2 rounded-3xl uppercase`} onClick={openModal}>
        <div className={`text-${textsize}`}>
            {text}
        </div>
    </div>
  )
}

export default Button;