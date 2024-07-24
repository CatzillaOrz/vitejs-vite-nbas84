import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import {HelloWorld} from './components/HelloWorld';
import { CarList } from './components/CarList';
import { getCars } from './services/car';
import { myReducer } from './myReducer';

const initState = {
  autoClose: false
}

function App() {
  const [cars, setCars] = useState([])
  const myref = useRef(null);
  const [state, dispatch] = useReducer(myReducer, initState)


  useEffect(() => {
    getList();
    
  }, [])

  
  const handler = ()=>{
      myref.current.show();
      dispatch({type: 'auto', value: {autoClose:true}})
  }

  const getList = async () => {
     const data = await getCars();
     setCars(data.data)
     
  }

  return (
    <>  
      <Layout>
        <HelloWorld/>
        {cars.length>0 && 
        <CarList cars={cars} ref={myref}/>
        }
        <button type='button' onClick={handler}>{state.autoClose ? 'Auto Enabled':'Click'}</button>
      </Layout>
    </>

  );
}

export default App;
