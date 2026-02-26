import start_button from '../images/start_button.png';
import bg_image from '../images/loadingScreen_bg.png';
import {useState, useEffect } from 'react';

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
        }, 150);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="h-screen relative overflow-hidden bg-white flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${bg_image})`}}></div>
            <h1 className="absolute top-50 text-9xl mb-32 text-purple-950 drop-shadow-xl" style = {{fontFamily: 'Silkscreen, cursive'}}> {displayedText} </h1>
            
            <button className="bottom-60 mt-16 transition-all duration-200 hover:scale-105 active:scale-95">
                <img src={start_button} alt="Start Game" className={`w-80 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
            </button>
        </div>
    );
}