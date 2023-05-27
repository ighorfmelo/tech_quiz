import {OptionButton} from '@/app/components/UI/Button'
import Informations from '@/app/components/Informations'
import { Correct, Wrong } from '@/app/components/Feedback'
import { useState } from 'react'

type FormProps = {
  done: () => void,
  later: () => void,
}

export default function Form({ done, later}: FormProps) {
  const [isCorrect, setIsCorrect] = useState<Boolean | null>(null)
  const [showInformations, setShowInformations] = useState(false)

  const handleButtonAClick = () => {
    setIsCorrect(false)
  }
  const handleButtonBClick = () => {
    setIsCorrect(true)  
  }
  const handleButtonCClick = () => {
    setIsCorrect(false)
  }

  const handleLearnMore = () => {
    setShowInformations(true)
  }

  const handleTryAgain = () => {
    setIsCorrect(null)
  }

  const handleLater = () => {
    later()
  }

  const handleDone = () => {
    done()
  }

  if(showInformations) {
    return <Informations later={handleLater} done={handleDone} />
  }

  if (isCorrect === true) {
    return <Correct learnMore={handleLearnMore}/>
  } 
  else if (isCorrect === false) {
    return <Wrong tryAgain={handleTryAgain} />
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