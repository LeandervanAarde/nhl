import {Routes, Route} from 'react-router-dom'
import "./index.css";
import Head from './Components/Head';
import BodyNav from './Components/BodyNav';
import Playercompare from './Components/Playercompare';
import Teamcompare from './Components/Teamcompare';
import Playertimeline from './Components/Playertimeline';
import Scores from './Components/Scores';
import Overview from './Components/Overview';

function App() {
  
  return (
   <>
   <div className='App'>
   <Head/>
    <BodyNav/>
    <Routes>
      <Route path="/" element ={<Overview/>}></Route>
      <Route path="/Playercompare" element = {<Playercompare/>}></Route>
      <Route path="/Teamcompare" element = {<Teamcompare/>}></Route>
      <Route path="/Playertimeline" element = {<Playertimeline/>}></Route>
    </Routes>
    <Scores/>
  </div>
   </>
  );
}

export default App;
