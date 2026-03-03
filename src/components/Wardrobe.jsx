import outline from '../images/outline.png';
import pink_top from '../images/pink_top.png';
import brown_top from '../images/brown_top.png';
import whitegold_top from '../images/whitegold_top.png';

export default function Wardrobe() {
    
    const tabs = ['Tops', 'Bottoms', 'Dresses', 'Shoes'];
    
    const currentClothes = [pink_top, brown_top, whitegold_top, outline]; 

    return (
        <div className="w-full h-full bg-pink-500/50 backdrop-blur rounded-3xl border-4 border-purple-950 shadow-2xl p-6 flex flex-col">
            
            <h2 className="text-4xl text-center text-purple-950 mb-6 drop-shadow-md" style={{fontFamily: 'Silkscreen, cursive'}}>
                Wardrobe
            </h2>

            <div className="flex justify-around mb-4 border-b-3 border-purple-950 pb-2">
                {tabs.map((tabName) => (
                    <button key={tabName} className="text-xl text-purple-950 font-bold transition-all hover:scale-110 hover:text-purple-600 active:scale-95" 
                        style={{fontFamily: 'Silkscreen, cursive'}}
                    >
                        {tabName}
                    </button>
                ))}
            </div>
            
            <div className="flex-grow p-4 grid grid-cols-2 gap-8 overflow-y-auto justify-items-center items-start">
                
                {currentClothes.map((clothingImage, index) => (
                    
                    <div key={index} className="relative w-36 h-36 flex items-center justify-center cursor-pointer group">
                        
                        <div className="absolute inset-0 bg-white/40 rounded-[2rem] group-hover:bg-white/60 transition-colors"></div>
                        
                        <img src={outline} alt="Frame" 
                            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-lg"
                        />
                        
                        <img src={clothingImage} alt={`Clothing ${index}`} 
                            className="relative z-10 w-30 h-30 object-contain transition-transform drop-shadow-md" 
                        />
                        
                    </div>
                ))}

            </div>
            
        </div>
    );
}