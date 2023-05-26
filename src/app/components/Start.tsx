'use client';
import Logo from '@/app/components/UI/Logo'
import Button from '@/app/components/UI/Button'
import { useState } from 'react';

type StartProps = {
  openQuiz: () => void,
}


export default function Start({openQuiz}: StartProps) {
  const [isFirstPage, setIsFirstPage] = useState()
  const handleButtonClick = () => {
    openQuiz()
  }

  return (
    <main className="relative">
      <Logo />
      <p className="flex mt-48 justify-center uppercase font-bold text-4xl text-blue-100 drop-shadow-2xl shadow-black">Homeopath</p>
      <div className="flex justify-center mt-16">
        <Button onClick={handleButtonClick} text="Start Game" color="red"/>
      </div>
    </main>
  )
}
