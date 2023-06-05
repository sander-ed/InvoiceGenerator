import React, {useState, useEffect} from "react";
import CreateSaleInput from "../../Invoicing/CreateSaleInput";
import './modal.css';

const { requestSale, updateSale } = require('../../../Api.js')


function UpateSale({id, clicked, handleOnClick}) {

    // Issue - sum not updated!
    const [saleData, setSaleData] = useState({})
    
    useEffect(() => {
      
      requestSaleApi()
        
    }, [id]);

    

    // Duplicated code!
    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        
        setSaleData((prevData) => {
          const tax = checked;
          const uPrice = name == "unitPrice" ? value : prevData.unitPrice;
          const numUnits = name == "numberUnits" ? value : prevData.numberUnits
          const sumPrice = uPrice * numUnits * (1 + (tax ? 0.25 : 0));
          const sumTaxes = uPrice * numUnits * (tax ? 0.25 : 0);
      
          return {
            ...prevData,
            [name]: value,
            sumRow: sumPrice,
            sumTaxes: sumTaxes
          };
        });
      };
    
      
    // Duplicated
    const handleTaxChange = (e) => {
      const { name, checked } = e.target;
      setSaleData((prevData) => {
        const tax = checked;
        const uPrice = prevData.unitPrice;
        const sumPrice = uPrice * prevData.numberUnits * (1 + (tax ? 0.25 : 0));
        const sumTaxes = uPrice * prevData.numberUnits * (tax ? 0.25 : 0);
    
        return {
          ...prevData,
          [name]: tax,
          sumRow: sumPrice,
          sumTax: sumTaxes
        };
      });
    }
    
    // ---------------------------------------------
    
    


    const fetchSaleData = async () => {
      try {
        const response = await requestSale(id); // Pass the id as an argument
        setSaleData(response);
      } catch (error) {
        console.error('Error fetching sale data:', error);
      }
    };

    const requestSaleApi = () => {
      fetch(`http://localhost:5000/sales/${id}`)
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log('This sales data:', data);
          if (data.success) {
            //handleDateFormatter(data.data)
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