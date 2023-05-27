'use client';
import Logo from '@/app/components/UI/Logo'
import Button from '@/app/components/UI/Button'
import { ReactNode, useState } from 'react'

type StartProps = {
  openQuiz: () => void,
  points: ReactNode,
}


export default function Start({openQuiz, points}: StartProps) {
  const [isFirstPage, setIsFirstPage] = useState()
  const handleButtonClick = () => {
    openQuiz()
  }

  return (
    <main className="relative">
      <Logo />
      <p className="flex mt-48 justify-center uppercase font-bold text-4xl text-white drop-shadow-2xl shadow-black">Homeopath</p>
      <div className="flex flex-col justify-center items-center mt-16 gap-7">
        <Button onClick={handleButtonClick} text="Start Game" />
        <p className="text-white">Points: {points}</p>
      </div>
    </main>
  )
}
