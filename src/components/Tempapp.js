import React, {useEffect, useState} from 'react';
import'./card.css';
 const Tempapp=() =>{
    const[city, setCity] = useState(null);
    const[search, setSearch] = useState('Enter City Name');

    useEffect(()=>{
      if(search!=='' || search !=="Enter City Name"){
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4150e743513178886bb994e416d3259c`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
           
        };
        fetchApi();
      }
    },[search])
  return (
    <div> 
    <div className='box container' >
        <div className='inputData' >
           <input type='search' value={search} className='inputFeild'
           onChange={(event) =>{setSearch(event.target.value)}}
           onClick={() =>{setSearch("")}} />
            
            </div>
            {!city?(<></>):(
            <div className='info '>
                <h5 className='location'>
                <i className="fa-solid fa-street-view"> <strong>{search}</strong> </i>
                 </h5>
                 <h3 className='temp'>{city.temp}</h3>
                 <h3 className='tempmin-max'>min:{city.temp_min} cel | max: {city.temp_max} cel</h3>
            </div>
            )}
    <div className='wave1'></div>
    <div className=' wave1 wave2'></div>
    <div className=' wave1 wave3'></div>
    </div>
    </div>
  )
}
export default Tempapp;
