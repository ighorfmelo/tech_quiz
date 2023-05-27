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
    <main className="flex flex-col justify-center gap-4 items-center">
      <Logo />
      <p className="flex justify-center font-bold text-4xl text-white drop-shadow-2xl shadow-black">HomeoPATH</p>
      <div className="flex flex-col justify-center items-center gap-7">
        <Button onClick={handleButtonClick} text="Start Game" />
        <p className="text-white">Points: {points}</p>
      </div>
    </main>
  )
}
