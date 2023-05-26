'use client';
import Start from '@/app/components/Start'
import Form from '@/app/components/Form'
import { useState } from 'react';

export default function Home() {
  const [isFirstPage, setIsFirstPage] = useState(false)
  const setOpenQuiz = () => {
    setIsFirstPage(true)
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-black">
      <div className="bg-blue-900 w-5/6 h-2/3 rounded-xl border-solid border-green--pill border-2 shadow-2xl shadow-green-pill">
        { isFirstPage ? <Form /> : <Start openQuiz={setOpenQuiz} /> }
      </div>
    </main>
  )
}