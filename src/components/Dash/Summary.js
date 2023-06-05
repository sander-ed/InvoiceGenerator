import React, { useState, useEffect } from 'react';


const SalesSummaryCard = ({ title, value }) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{value} NOK</p>
          </div>
        </div>
      </div>
    );
  };


function Summary({salesData}) {
    const [totalRev, setTotalRev] = useState(0)
    const [totalAddedTax, setTotalAddedTax] = useState(0)
    const [totalTax, setTotalTax] = useState(0)
    const [totalProf, setTotalProf] = useState(0)

    useEffect(() => {
        setTotalRev(salesData.reduce((total, item) => total + item.sumRow, 0))
        setTotalAddedTax(salesData.reduce((total, item) => total + item.sumTax, 0))
        setTotalTax(0.3* totalRev)
        setTotalProf(totalRev-totalTax-totalAddedTax)
    })

  return (
    <div>
        <div className='row mt-4'>
            <div className="col-md-4"></div>
            <SalesSummaryCard title={"Finn Griggs Produksjoner: 💡"} value={totalProf} />
            <div className="col-md-4"></div>      
        </div>
        <div className='row mt-4'>
            <SalesSummaryCard title={"Omsetning: 💰"} value={totalRev} />
            <SalesSummaryCard title={"Skyldig Mva: 🧾"} value={totalAddedTax} />
            <SalesSummaryCard title={"Skyldig skatt (30%): 🏛️"} value={totalTax} />
        </div>
        
        
      
    </div>
  );
}

export default Summary;