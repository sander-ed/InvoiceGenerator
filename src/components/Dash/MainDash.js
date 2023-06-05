import React, { useEffect, useState } from 'react';
import BarChart from './BarGraph';
import Summary from './Summary';
import Header from './Header';
import Hiring from './Hiring';
import UpateSale from './modal/UpdateSale';

function Requests() {
  const [salesData, setSalesData] = useState([]);
  const [clickedHiring, setClickedHiring] = useState(false)
  const [idClickedCard, setIdClickedCard] = useState("")
  

  useEffect(() => {
    requestData();
    
  }, []);

  const requestData = () => {
    fetch('http://localhost:5000/sales')
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log('Sales data:', data);
        if (data.success) {
          setSalesData(data.data);
        }
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  const handleOnClick = (id) => {
    setClickedHiring(!clickedHiring)
    setIdClickedCard(id)
  }


  const handleButtonClick = () => {
    setClickedHiring(!clickedHiring)

  }

  const handleEscape = (e) => {
    if(e.key === "Escape") {
      setClickedHiring(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
  })



  return (
    <div className='container'>
      <Header/>
      <Summary salesData={salesData}/>
      <h2 className='mt-4'>Liste over oppdrag</h2>
      <hr></hr>
      <Hiring salesData={salesData} handleOnClick={handleOnClick}/>
      <UpateSale id={idClickedCard} clicked={clickedHiring} handleOnClick={handleButtonClick}/>
    </div>
  );
}

export default Requests;
