import { ReactNode } from 'react'
import React from 'react'

type ButtonProps = {
  text: string,
  onClick: () => void,
}


export default function Button({ text, onClick }: ButtonProps) {  
  return (
    <button onClick={onClick} className="w-44 p-4 justify-center flex rounded-3xl text-xl font-bold  bg-green-pill text-black border-solid border-blue-200 border-2 shadow-sm shadow-blue-200 hover:bg-green-200">
      {text}
    </button>
  )
}

export function OptionButton({ text, onClick }: ButtonProps) {  
  return (
    <button onClick={onClick} className="w-full min-w-[200px] p-2 justify-center flex rounded-3xl text-xl font-bold  bg-green-pill text-black border-solid border-blue-200 border-2 shadow-sm shadow-blue-200 hover:bg-green-200">
      {text}
    </button>
  )
}

export function CorrectButton({ text, onClick }: ButtonProps) {  
  return (
    <button onClick={onClick} className="w-3/4 min-w-[200px] p-2 justify-center flex rounded-3xl text-xl font-bold  bg-green-pill text-white border-solid border-blue-200 border-2 shadow-sm shadow-blue-200 hover:bg-green-200">
      {text}
    </button>
  )
}

export function WrongButton({ text, onClick }: ButtonProps) {  
  return (
    <button onClick={onClick} className="w-3/4 min-w-[200px] p-2 justify-center flex rounded-3xl text-xl font-bold  bg-red-800 text-white border-solid border-blue-200 border-2 shadow-sm shadow-blue-200 hover:bg-red-950">
      {text}
    </button>
  )
}

export function LaterButton({ text, onClick }: ButtonProps) {  
  return (
    <button onClick={onClick} className="w-3/4 min-w-[200px] p-2 justify-center flex rounded-3xl text-xl font-bold  bg-gray-100 text-black border-solid border-blue-200 border-2 shadow-sm shadow-blue-200 hover:bg-gray-200">
      {text}
    </button>
  )
}