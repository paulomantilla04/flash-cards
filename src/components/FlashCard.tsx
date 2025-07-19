import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FlashCardData {
    question: string;
    answer: string;
}

interface FlashCardProps {
    isFlipped: boolean;
    currentQuestion: FlashCardData;
    handleFlip: () => void;
    handleNext: () => void;
    handlePrevious: () => void;
}

const FlashCard = ({ isFlipped, currentQuestion, handleFlip, handleNext, handlePrevious }: FlashCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center border-3 border-gray-300 rounded-lg mt-6 w-full max-w-xs sm:max-w-sm h-72 sm:h-80 md:h-96 gap-2 font-montserrat mx-auto">
            <div className="flex flex-col items-center justify-center bg-cyan-600 text-white w-[95%] h-[80%] rounded-lg p-4 text-center">
                {isFlipped ?
                    <p className="text-md sm:text-lg font-bold">{currentQuestion.answer}</p> :
                    <p className="text-md sm:text-lg font-bold">{currentQuestion.question}</p>
                }
            </div>
            <div className="flex flex-row items-center justify-between bg-cyan-600 text-white h-10 sm:h-12 px-3 sm:px-4 w-[95%] rounded-lg">
                <button className="text-sm sm:text-base flex items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" onClick={handlePrevious}>
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <button className="text-sm sm:text-base flex items-center cursor-pointer" onClick={handleFlip}>
                    {isFlipped ? "Hide Answer" : "Show Answer"}
                </button>
                <button className="text-sm sm:text-base flex items-center cursor-pointer" onClick={handleNext}>
                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
            </div>
        </div>
    )
}

export default FlashCard;