import bg_image from '../images/modelSelection_bg.png';
import model1 from '../images/model1.png';
import model2 from '../images/model2.png';
import model3 from '../images/model3.png';
import {useState, useEffect } from 'react';

export default function ModelSelection({ setCurrentScreen }) {

    const fullText = "Select your model!";
    const [displayedText, setDisplayedText] = useState("");
    
    const [showModel1, setShowModel1] = useState(false);
    const [showModel2, setShowModel2] = useState(false);
    const [showModel3, setShowModel3] = useState(false);
    
    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                
                setTimeout(() => setShowModel1(true), 100);
                setTimeout(() => setShowModel2(true), 500);
                setTimeout(() => setShowModel3(true), 900);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen flex flex-col items-center bg-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${bg_image})`}}></div>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="mt-10 text-7xl text-purple-950 drop-shadow-xl center" style = {{fontFamily: 'Silkscreen, cursive'}}>{displayedText}</h1>
                <p className="mb-35 text-xl font-bold text-purple-950 drop-shadow-lg">Click on the model you want to play with!</p>

                <div className="flex items-center">

                    {/* Model 1 Button */}
                    <button onClick={() => setSelectedModel(1)} className={`transition-all duration-700 transform mx-5 
                        ${showModel1 ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                        ${selectedModel === 1 ? 'scale-105 z-20' : 'scale-90'}`}>
                    
                        <img src={model1} alt="Model 1" className={`w-60 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300
                            ${selectedModel !== null && selectedModel !== 1 ? 'opacity-90' : ''}
                            ${selectedModel === 1 ? 'dropshadow-2xl' : ''}`}/>
                    </button>

                    {/* Model 2 Button */}
                    <button onClick={() => setSelectedModel(2)} className={`transition-all duration-700 transform mx-5 
                        ${showModel2 ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                        ${selectedModel === 2 ? 'scale-105 z-20' : 'scale-90'}`}
                    >
                        <img src={model2} alt="Model 2" className={`w-60 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300
                            ${selectedModel !== null && selectedModel !== 2 ? 'opacity-90' : ''}
                            ${selectedModel === 2 ? 'dropshadow-2xl' : ''}`}/>
                    </button>

                    {/* Model 3 Button */}
                    <button onClick={() => setSelectedModel(3)} className={`transition-all duration-700 transform mx-5 
                        ${showModel3 ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                        ${selectedModel === 3 ? 'scale-105 z-20' : 'scale-90'}`}
                    >
                        <img src={model3} alt="Model 3" className={`w-60 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300
                            ${selectedModel !== null && selectedModel !== 3 ? 'opacity-90' : ''}
                            ${selectedModel === 3 ? 'dropshadow-2xl' : ''} `}/>
                    </button>
                </div>

            
            </div>
        </div>
    );
}   
