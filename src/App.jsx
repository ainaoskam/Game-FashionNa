import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ModelSelection from './components/ModelSelection';

function App() {
  const [currentScreen, setCurrentScreen] = useState('loadingScreen');

  return (
    <>
      {currentScreen === 'loadingScreen' && <LoadingScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'modelSelection' && <ModelSelection setCurrentScreen={setCurrentScreen} />}
    </>
  )
}

export default App;
