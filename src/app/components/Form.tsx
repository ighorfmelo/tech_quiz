import Logo from '@/app/components/UI/Logo'
import {OptionButton} from '@/app/components/UI/Button'
import { useState } from 'react'

export default function Form() {
  const [isCorrect, setIsCorrect] = useState<Boolean | null>(null)

  const handleButtonAClick = () => {
    setIsCorrect(false)
  }
  const handleButtonBClick = () => {
    setIsCorrect(true)  
  }
  const handleButtonCClick = () => {
    setIsCorrect(false)
  }

  if (isCorrect === true) {
    return <h1>Correto</h1>
  } 
  else if (isCorrect === false) {
    return <h1>Errado</h1>
  }
  else {
    return (
      <main className="flex justify-center p-4 h-full flex-col items-center"> 
        <iframe className="w-[100%] h-[42%]" src="https://www.youtube.com/embed/ZwKhufmMxko" allowFullScreen></iframe>
        <div className="mt-6 flex flex-col gap-4">
          <OptionButton onClick={handleButtonAClick} text="Letter A" />
          <OptionButton onClick={handleButtonBClick} text="Letter B" />
          <OptionButton onClick={handleButtonCClick} text="Letter C" />
        </div>
        
      </main>
    )
  }
}