import ProgressBar from "./components/ProgressBar"
import FlashCard from "./components/FlashCard"
import { useState, useEffect } from "react"
import data from "./data/data"


function App() {

  const [progress, setProgress] = useState<number>(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentQuestion = data[currentIndex];

  useEffect(() => {
    const newProgress = ((currentIndex + 1) / data.length) * 100;
    setProgress(Math.round(newProgress));
  }, [currentIndex, data.length]);

  const handleFlip = () => {
      setIsFlipped((prev) => !prev);
  }

  const handleNext = () => {
      if (currentIndex < data.length - 1) {
          setIsFlipped(false);
          setCurrentIndex(currentIndex + 1);
      } else {
          setIsFlipped(false);
          setCurrentIndex(0);
      }
  }

  const handlePrevious = () => {
      if (currentIndex > 0) {
          setIsFlipped(false);
          setCurrentIndex(currentIndex - 1);
      } else {
          setIsFlipped(false);
          setCurrentIndex(data.length - 1);
      }
  }

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 font-montserrat text-center">Flash Cards</h1>
        <ProgressBar progress={progress} currentIndex={currentIndex + 1} dataLength={data.length} />
        <FlashCard 
          isFlipped={isFlipped} 
          currentQuestion={currentQuestion} 
          handleFlip={handleFlip} 
          handleNext={handleNext} 
          handlePrevious={handlePrevious}
        />
      </div>
    </main>
  )
}

export default App
