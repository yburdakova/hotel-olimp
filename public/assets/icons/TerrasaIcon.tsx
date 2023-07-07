import Image from 'next/image'
import React from 'react'
import { terrasa } from '../../index'

function TerrasaIcon() {
  return (
    <Image src={terrasa} alt='terasa-icon' width={32} height={32}/>
  )
}

export default TerrasaIcon