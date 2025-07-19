
interface ProgressBarProps {
    progress: number;
    currentIndex: number;
    dataLength: number;
}

const ProgressBar = ({progress, currentIndex, dataLength}: ProgressBarProps) => {
  return (
    <>
    <div className="flex flex-col items-center justify-center font-montserrat w-full"> 
        <div className="border-3 w-full sm:w-96 border-gray-300 rounded-lg overflow-hidden flex items-center">
            <div className="m-0.5 bg-emerald-500 rounded-sm text-center py-2 sm:py-3 text-white font-bold text-xs z-20 transition-all duration-300 ease-out" style={{width: `${progress}%`}}></div>
        </div>
        <div className="flex flex-row items-center justify-between w-full sm:w-96 px-1"> 
            <div className="text-xs sm:text-sm text-gray-500 mt-2">{currentIndex} of {dataLength}</div> 
            <div className="text-xs sm:text-sm text-gray-500 mt-2">{Math.round(progress)}%</div>
        </div>
    </div>
    </>
  )
}

export default ProgressBar;