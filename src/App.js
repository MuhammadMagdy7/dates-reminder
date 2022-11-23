import './App.css';
import {Navber, Hero} from './Components/index'
import data from './Api/Data.json'
import { useState, useEffect } from 'react'



function App() {

  const [Data, setData] = useState(data)

  const deleteData = () => { 
    setData([]) 
  }
  const viewData = () => { 
    setData((data)) 
  }

  useEffect(() => {
    deleteData()
  }, [])
  


  return (
    <div className=' bg-slate-700 text-slate-100'>

      <Navber Data={Data}/>
      <Hero Data={Data} deleteData={deleteData} viewData={viewData}/>
    </div>
  );
}

export default App;
