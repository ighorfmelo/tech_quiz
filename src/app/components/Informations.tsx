import {CorrectButton, LaterButton } from '@/app/components/UI/Button'
import Button from '@/app/components/UI/Button'
type InformationProps = {
  done: () => void,
  later: () => void,
}

export default function Informations({ done, later }: InformationProps) {  
  const handleDoneButton = () => {
    done()
  }
  const handleLaterButton = () => {
    later()
  }
  return (
    <div className="h-full p-6 flex flex-col gap-10 items-center justify-center">
      <iframe className="w-[100%] h-[42%]" src="https://www.youtube.com/embed/k09ip9Z6TCk" title="YouTube video player" allow="accelerometer; autoplay" allowFullScreen></iframe>
      <div className="flex gap-2 w-full justify-center items-center">
        <CorrectButton onClick={handleDoneButton} text="Done +3 points" />
      </div>
      <LaterButton onClick={handleLaterButton} text="Learn later" />
    </div>
  )
}