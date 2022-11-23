import './App.css';
import {Navber, Hero} from './Components/index'
import data from './Api/Data.json'



function App() {
  return (
    <div className=' bg-slate-700 text-slate-100'>

      <Navber data={data}/>
      <Hero data={data} />
    </div>
  );
}

export default App;
