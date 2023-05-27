import Logo from '@/app/components/UI/Logo'
import {OptionButton} from '@/app/components/UI/Button'
import { Correct, Wrong } from '@/app/components/Feedback'
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
    return <Correct />
  } 
  else if (isCorrect === false) {
    return <Wrong />
  }
  else {
    return (
      <main className="flex justify-center p-4 h-full flex-col items-center"> 
        <iframe className="w-[100%] h-[42%]" src="https://www.youtube.com/embed/YVFLICOMm5k?&autoplay=1" title="YouTube video player" allow="autoplay"></iframe>
        <div className="mt-6 flex flex-col gap-4">
          <OptionButton onClick={handleButtonAClick} text="Letter A" />
          <OptionButton onClick={handleButtonBClick} text="Letter B" />
          <OptionButton onClick={handleButtonCClick} text="Letter C" />
        </div>
        
      </main>
    )
  }
}