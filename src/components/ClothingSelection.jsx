import model1 from '../images/model1.png';
import model2 from '../images/model2.png';
import model3 from '../images/model3.png';
import model4 from '../images/model4.png';



export default function ClothingSelection({ setCurrentScreen }) {
    return (
        <div className="h-screen flex flex-col items-center bg-white relative overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{backgroundImage: `url(${bg_image})`}}></div>
            
        </div>
    )
}