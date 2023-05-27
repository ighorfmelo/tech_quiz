import { CorrectButton } from '@/app/components/UI/Button'

export function Correct() {
  const handleCorrect = () => {
    console.log('aqui')
  }

  const handleWrong = () => {
    console.log('aqui')
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

export function Wrong() {
  return (
    <main className="flex flex-col">
      <div className="flex mt-48 justify-center items-center gap-2">
        <h1 className="uppercase font-bold text-4xl text-green-pill">Correct</h1>
        <span className="text-red-800">-2 point</span>
      </div>
      <p className="flex justify-center font-bold text-lg text-blue-100">Do you want to learn more?</p>
    </main>
  )
}