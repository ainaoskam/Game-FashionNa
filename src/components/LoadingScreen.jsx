import start_button from '../images/start_button.png';
import bg_image from '../images/loadingScreen_bg.png';
import {useState, useEffect } from 'react';
import ModelSelection from './ModelSelection';

export default function LoadingScreen({ setCurrentScreen }) {
    const fullText = "Fashion Na.";
    const [displayedText, setDisplayedText] = useState("");
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setShowButton(true);
                }, 100);
            }
        }, 200);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="h-screen relative overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${bg_image})`}}></div>   {/* inset-0 = top-0, right-0, bottom-0, left-0 */}

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="absolute bottom-full text-9xl mb-10 text-purple-950 drop-shadow-xl whitespace-nowrap" style = {{fontFamily: 'Silkscreen, cursive'}}> {displayedText} </h1>
                
                <button onClick={() => setCurrentScreen('modelSelection')} className="transition-all duration-200 hover:scale-107 active:scale-97">
                    <img src={start_button} alt="Start Game" 
                    className={`w-70 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-100 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
                </button>
            </div>

        </div>
    );
}