import React, {useState, useEffect} from "react";
import CreateSaleInput from "../../Invoicing/CreateSaleInput";
import './modal.css'


function UpateSale({id, clicked, handleOnClick}) {

    // Issue - sum not updated!
    const [saleData, setSaleData] = useState({})
    
    useEffect(() => {
      requestSale()
        
    }, []);

    useEffect(() => {
      if (clicked) {
        requestSale();
      }
    }, [clicked]);

    // Duplicated code!
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSaleData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      
    // Duplicated
    const handleTaxChange = (e) => {
      const tax = value == 'on' ? true : false
      const { name, value } = e.target;
      const uPrice = saleData.unitPrice
      const sumPrice = uPrice * saleData.numberUnits * (1 + (tax ? .25 : 0))
      const sumTaxes = uPrice * saleData.numberUnits * (tax ? .25 : 0)
      setSaleData((prevData) => ({
          ...prevData,
          [name]: tax,
          sumRow: sumPrice,
          sumTax: sumTaxes
        }));
        console.log(saleData)
    }
    
    // ---------------------------------------------
    
    const requestSale = () => {
      fetch(`http://localhost:5000/sales/${id}`)
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log('This sales data:', data);
          if (data.success) {
            setSaleData(data.data);
          }
        })
        .catch(error => {
          // Handle any errors
          console.error('Error:', error);
        });
    };

    const updateSale = () => {
      fetch(`http://localhost:5000/sales/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleData),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log('Updated sale:', data);
        })
        .catch(error => {
          // Handle any errors
          console.error('Error updating sale:', error);
        });
    };
    
      
    const htmlOnClick = ( 
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-body">
            <form>
              <div className="title-close-btn">
                <button onClick={handleOnClick} className="btn btn-outline-danger"><spans className="bi bi-x-square-fill"></spans></button>
              </div>
              <CreateSaleInput saleData = {saleData} handleInputChange = {handleInputChange} handleTaxChange = {handleTaxChange}/>
              <div className="footer">
                <button onClick={handleOnClick}>Cancel</button>
                <button onClick={updateSale}>Update hire</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
    

    return (
        <div>
            {clicked ? htmlOnClick : <div></div>} 
        </div>
    )
}

export default UpateSale