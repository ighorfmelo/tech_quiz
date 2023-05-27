import { CorrectButton, WrongButton } from '@/app/components/UI/Button'
import { useState } from 'react'

type CorrectProps = {
  learnMore: () => void,
}

type WrongProps = {
  tryAgain: () => void,
}

export function Correct({learnMore}: CorrectProps) {
  const handleCorrect = () => {
    learnMore()
  }

  return (
    <main className="flex h-full flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <h1 className="uppercase font-bold text-4xl text-green-pill">Correct</h1>
        <span className="text-green-pill">+1 point</span>
      </div>
      <p className="flex justify-center font-bold text-lg text-blue-100">Do you want to learn more?</p>
      <div className="w-full flex justify-center mt-4">
        <CorrectButton onClick={handleCorrect} text="Learn more" />
      </div>
    </main>
  )
}

export function Wrong({tryAgain}: WrongProps) {
  const handleWrong = () => {
    tryAgain()
  }

  return (
    <main className="flex h-full flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <h1 className="uppercase font-bold text-4xl text-red-800">Wrong</h1>
        <span className="text-red-800">-2 points</span>
      </div>
      <p className="flex justify-center font-bold text-lg text-blue-100">Do you want to learn more?</p>
      <div className="w-full flex justify-center mt-4">
        <WrongButton onClick={handleWrong} text="Try again" />
      </div>
    </main>
  )
}