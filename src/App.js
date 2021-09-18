import {useEffect,useState} from 'react'
import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css"
import img from './Images/1384336.jpg'
import Card from './Components/Card'

import Box from './Components/Box.js'
function App() {

  
  const [CloudCompState, setCloudCompState] = useState(true)
  const [CardCompState, setCardCompState] = useState(false);
  useEffect(() => {
     Aos.init({duration:2000})
  }, [])


  setTimeout(function(){ 
    setCloudCompState(false)
    setCardCompState(true)
  }, 6000);

  return (
    <>
     {/* <header className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage:`url(${img})` }}>        
     </header> */}
<div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage:`url(${img})` }}>

{
  CloudCompState? <Box/>:null
}
{
  CardCompState? <Card/>:null
}

   </div>
   
    </>
  );
}

export default App;
