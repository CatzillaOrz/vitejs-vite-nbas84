import { useEffect, useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import {HelloWorld} from './components/HelloWorld';
import { CarList } from './components/CarList';
import { getCars } from './services/car';

const initData = {
  autoClose: false
}

function App() {
  const [cars, setCars] = useState([])
  const myref = useRef(null);


  useEffect(() => {
    getList();
    
  }, [])

  
  const handler = ()=>{
      myref.current.show()
  }

  const getList = async () => {
     const data = await getCars();
     setCars(data.data)
     
  }

  return (
    <>  
      <Layout>
        <HelloWorld/>
        {cars.length && 
        <CarList cars={cars} ref={myref}/>
        }
        <button type='button' onClick={handler}>Click</button>
      </Layout>
    </>

  );
}

export default App;
