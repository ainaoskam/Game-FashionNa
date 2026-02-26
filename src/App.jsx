import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState('loadingScreen');

  if (currentScreen === 'loadingScreen') {
    return <LoadingScreen />;
  }

}

export default App;
