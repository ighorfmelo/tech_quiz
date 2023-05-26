import { ReactNode } from 'react'
import React from 'react'

type ButtonProps = {
  text: string,
  color: string,
  onClick: () => void,
}


export default function Button({ color = 'bg-red', text, onClick }: ButtonProps) {  
  return (
    <button onClick={onClick} className="w-44 p-4 justify-center flex rounded-3xl text-xl font-bold  bg-purple-800 text-white border-solid border-blue-200 border-2 shadow-sm shadow-blue-200 hover:bg-purple-950">
      {text}
    </button>
  )
}