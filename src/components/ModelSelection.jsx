import bg_image from '../images/modelSelection_bg.png';
import model1 from '../images/model1.png';
import model2 from '../images/model2.png';
import model3 from '../images/model3.png';
import model4 from '../images/model4.png';
import left_button from '../images/left_button.png';
import right_button from '../images/right_button.png';
import confirm_button from '../images/confirm_button.png';

import { useState, useEffect } from 'react';



export default function ModelSelection({ setCurrentScreen }) {
    const fullText = "Select your model!";
    const [displayedText, setDisplayedText] = useState("");
    const [isConfirming, setIsConfirming] = useState(false);

    const [modelIndex, setModelIndex] = useState(0);

    const models = [model1, model2, model3, model4];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);
    

    const handlePrev = () => {
        setModelIndex((prev) => (prev === 0 ? models.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setModelIndex((prev) => (prev === models.length - 1 ? 0 : prev + 1));
    };


    const handleConfirm = () => {
        setIsConfirming(true);
    };

    return (
        <div className="h-screen flex flex-col items-center bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${bg_image})`}}></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4">
                
                <h1 className={`mt-10 mb-8 text-5xl md:text-7xl text-purple-950 drop-shadow-xl center transition-opacity duration-800 
                    ${isConfirming ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{fontFamily: 'Silkscreen, cursive'}}
                >
                    {displayedText}
                </h1>

                <div className="flex justify-center items-center w-full h-[60vh] gap-6 md:gap-16">
                    
                    {/*left button*/}
                    <button onClick={handlePrev} className={`transition-all duration-300 hover:scale-110 active:scale-90 
                        ${isConfirming ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <img src={left_button} alt="Previous" className="w-16 md:w-22 drop-shadow-lg hover:drop-shadow-2xl" />
                    </button>

                    {/*Model*/}
                    <div className={`transition-all duration-2000 transform origin-bottom flex justify-center w-40 sm:w-48 md:w-64 
                        ${isConfirming ? 'scale-[1.2] translate-y-12 z-50' : 'scale-100'}`}
                    >
                        <img src={models[modelIndex]} alt={`Model ${modelIndex + 1}`} 
                            className="w-full drop-shadow-xl object-contain transition-all duration-300" 
                        />
                    </div>

                    {/*right button*/}
                    <button onClick={handleNext} className={`transition-all duration-300 hover:scale-110 active:scale-90 
                        ${isConfirming ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <img src={right_button} alt="Next" className="w-16 md:w-22 drop-shadow-lg hover:drop-shadow-2xl" />
                    </button>

                </div>

                <button onClick={handleConfirm} className={`mt-8 transition-all duration-500 
                    ${isConfirming ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 hover:scale-105 active:scale-95'}`}
                >
                    <img src={confirm_button} alt="Confirm Selection" className="w-40 md:w-60 drop-shadow-lg hover:drop-shadow-2xl" />
                </button>

            </div>
        </div>
    );
}