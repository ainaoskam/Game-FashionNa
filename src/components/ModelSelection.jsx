import bg_image from '../images/modelSelection_bg.png';
import model1 from '../images/model1.png';
import model2 from '../images/model2.png';
import model3 from '../images/model3.png';
import model4 from '../images/model4.png';
import confirm_button from '../images/confirm_button.png';
import { useState, useEffect } from 'react';

export default function ModelSelection({ setCurrentScreen }) {
    const fullText = "Select your model!";
    const [displayedText, setDisplayedText] = useState("");
    const [visibleModels, setVisibleModels] = useState([false, false, false, false]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [isConfirming, setIsConfirming] = useState(false);

    const models = [model1, model2, model3, model4];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => setVisibleModels([true, false, false, false]), 100);
                setTimeout(() => setVisibleModels([true, true, false, false]), 400);
                setTimeout(() => setVisibleModels([true, true, true, false]), 700);
                setTimeout(() => setVisibleModels([true, true, true, true]), 1000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const handleConfirm = () => {
        if (!selectedModel) return;
        setIsConfirming(true);
    };

    return (
        <div className="h-screen flex flex-col items-center bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${bg_image})`}}></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4">
                <h1 
                    className={`mt-10 mb-8 text-5xl md:text-7xl text-purple-950 drop-shadow-xl center transition-opacity duration-800 ${isConfirming ? 'opacity-0' : 'opacity-100'}`} 
                    style={{fontFamily: 'Silkscreen, cursive'}}
                >
                    {displayedText}
                </h1>

                <div className="flex justify-center items-end w-full h-[60vh]">
                    {models.map((modelImg, index) => {
                        const modelId = index + 1;
                        const isSelected = selectedModel === modelId;
                        const isVisible = visibleModels[index];
                        const isHiddenByConfirm = isConfirming && !isSelected;

                        return (
                            <button 
                                key={modelId}
                                onClick={() => !isConfirming && setSelectedModel(modelId)}
                                className={`transition-all duration-800 transform origin-bottom relative mx-2 sm:mx-4
                                    ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                                    ${isHiddenByConfirm ? '!opacity-0 !scale-50 pointer-events-none' : ''}
                                    ${isSelected && !isConfirming ? 'scale-105 z-20 translate-y-6' : ''}
                                    ${!isSelected && !isConfirming && selectedModel ? 'scale-90 translate-y-0' : ''}
                                    ${!selectedModel ? 'scale-90 translate-y-0' : ''}
                                    ${isConfirming && isSelected ? 'scale-150 z-50 translate-y-30 transition-all duration-1500' : ''}
                                `}
                            >
                                <img 
                                    src={modelImg} 
                                    alt={`Model ${modelId}`} 
                                    className={`w-24 sm:w-32 md:w-48 lg:w-56 transition-all duration-300
                                        ${isSelected ? 'drop-shadow-2xl' : 'drop-shadow-xl'}
                                        ${!isConfirming && 'hover:drop-shadow-2xl'}
                                    `}
                                />
                            </button>
                        );
                    })}
                </div>

                <button 
                    onClick={handleConfirm}
                    className={`mt-8 transition-all duration-500
                        ${selectedModel && !isConfirming ? 'opacity-100 hover:scale-105 active:scale-95' : 'opacity-0 pointer-events-none scale-90'}
                    `}
                >
                    <img src={confirm_button} alt="Confirm Selection" className="w-40 md:w-60 drop-shadow-lg" />
                </button>
            </div>
        </div>
    );
}