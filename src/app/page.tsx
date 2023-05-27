'use client';
import Start from '@/app/components/Start'
import Form from '@/app/components/Form'
import { useState } from 'react';

export default function Home() {
  const [isQuizPage, setIsQuizPage] = useState(false)
  const [points, setPoints] = useState(0)
  const setOpenQuiz = () => {
    setIsQuizPage(true)
  }
  const add1point = () => {
    setIsQuizPage(false)
    setPoints(points + 1)
  }
  const add4points = () => {
    setIsQuizPage(false)
    setPoints(points + 4)
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <div className="bg-gray-900 w-5/6 h-[90%] rounded-xl border-solid border-green--pill border-2 shadow-2xl shadow-green-pill p-4">
        { isQuizPage ? <Form later={add1point} done={add4points} /> : <Start points={points} openQuiz={setOpenQuiz} /> }
      </div>
    </main>
  )
}