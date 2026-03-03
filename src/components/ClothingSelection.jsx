import model1 from '../images/model1.png';
import model2 from '../images/model2.png';
import model3 from '../images/model3.png';
import model4 from '../images/model4.png';
import bg_image from '../images/clothingSelection_bg.png';

import Wardrobe from './Wardrobe';

export default function ClothingSelection({ setCurrentScreen, selectedModel }) {
    const models = [model1, model2, model3, model4];

    return (
        <div className="h-screen flex flex-col items-center bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-65" style={{backgroundImage: `url(${bg_image})`}}></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex justify-between items-center h-full">
                
                <div className="w-1/2 flex justify-center items-center h-full">
                    <img src={models[selectedModel]} alt="Selected Model" 
                        className="h-[60vh] drop-shadow-2xl scale-[1.35] transition-all duration-1000" 
                    />
                </div>

                <div className="w-[45%] max-w-lg h-[75vh]">
                    <Wardrobe />
                </div>

            </div>

        </div>
    );
}