import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ModelSelection from './components/ModelSelection';
import ClothingSelection from './components/ClothingSelection';

function App() {
  const [currentScreen, setCurrentScreen] = useState('loadingScreen');
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <>
      {currentScreen === 'loadingScreen' && <LoadingScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'modelSelection' && <ModelSelection setCurrentScreen={setCurrentScreen}/>}
      {currentScreen === 'clothingSelection' && <ClothingSelection setCurrentScreen={setCurrentScreen} />}
    </>
  )
}

export default App;
