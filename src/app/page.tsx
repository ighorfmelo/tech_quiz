'use client';
import Start from '@/app/components/Start'
import { useState } from 'react';

export default function Home() {
  const [isFirstPage, setIsFirstPage] = useState(false)
  const setOpenQuiz = () => {
    setIsFirstPage(true)
  }
  
  if (isFirstPage) {
    return <h1>Hello</h1>
  } else {
    return (
      <main className="flex h-screen flex-col items-center justify-center bg-black">
        <div className="bg-blue-900 w-5/6 h-2/3 rounded-xl border-solid border-purple-800 border-2 shadow-2xl shadow-purple-800">
          <Start openQuiz={setOpenQuiz} />
        </div>
      </main>
    )
  }

}