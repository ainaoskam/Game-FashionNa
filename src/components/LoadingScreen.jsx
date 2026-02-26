import start_button from '../images/start_button.png';
import progress_bar from '../images/progress_bar.png';
import {useState, useEffect } from 'react';

export default function LoadingScreen({ setCurrentScreen }) {
    //progress bar
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => {
            if (prevProgress == 100) {
            clearInterval(timer);
            return 100;
            }

            return prevProgress + 1;
        });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        //loading screen
        <div className="h-screen flex flex-col items-center justify-center bg-pink-100">   
            <h1 className="absolute top-20 text-[180px] mb-32 text-purple-950" style = {{ fontFamily: 'Silkscreen, cursive' }}>Fashion Na</h1>

            <div className="relative">
                <img src={progress_bar} alt="Progress Bar" className="w-96 mb-4 drop-shadow-md" />
                <div className="absolute top-0 left-0 pd-1 bg-pink-600 overflow-hidden transition-all duration-1000 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            
            <button className="absolute bottom-60 transition-all duration-200 hover:-translate-y-2 active:scale-95">
                <img src={start_button} alt="Start Game" className="w-60 drop-shadow-md hover:drop-shadow-xl transition-all duration-300" />
            </button>
        </div>
    );
}