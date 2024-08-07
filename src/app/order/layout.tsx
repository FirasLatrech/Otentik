import Image from 'next/image';
import React from 'react'
import logo from '@/../public/images/logo.png'

function layout({children} :{children: React.ReactNode;}) {
  return (

    <>
    {children}</>
  )
}

export default layout
