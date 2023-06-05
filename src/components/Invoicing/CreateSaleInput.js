import React, {useState, useEffect} from 'react';

function CreateSaleInput({saleData, handleInputChange, handleTaxChange}) {
  

  return (
    <div className='input-inv'>
      <div>
        <label>Oppdragsiver</label>
        <input
            type="text"
            name="customer"
            value={saleData.customer}
            onChange={handleInputChange}
            placeholder="Enter a customer"
          />
      </div>
      
      <div>
      <label>Oppdragsiver referanse</label>
        <input
            type="text"
            name="customerName"
            value={saleData.customerName}
            onChange={handleInputChange}
            placeholder="Enter customer ref..."
          />
      </div>
      <div>
      <div>
        <label>Oppdragsiver address</label>
        <input
            type="text"
            name="customerAdress"
            value={saleData.customerAdress}
            onChange={handleInputChange}
            placeholder="Enter a adress"
          />
      </div>
      <div>
        <label>Oppdragsiver postkode og sted</label>
        <input
            type="text"
            name="customerZip"
            value={saleData.customerZip}
            onChange={handleInputChange}
            placeholder="Enter a zip"
          />
      </div>
      <label>Oppdragsiver fakturadresse</label>
        <input
            type="email"
            name="customerEmail"
            value={saleData.customerEmail}
            onChange={handleInputChange}
            placeholder="Enter email..."
          />
      </div>
      <div>
        <label>Oppdragsiver org.nummer</label>
        <input
            type="number"
            name="organizationNumber"
            value={saleData.organizationNumber}
            onChange={handleInputChange}
            placeholder="Enter organization number..."
            
          />
      </div>
      <div>
        <label>
          Fakturadato: 
        </label>
        <input
            type="date"
            name="invoiceDate"
            value={saleData.invoiceDate}
            onChange={handleInputChange}
          />
      </div>
      <div>
        <label>
          Forfallsdato: 
          
        </label>
        <input
            type="date"
            name="expireDate"
            value={saleData.expireDate}
            onChange={handleInputChange}
          />
      </div>
      <div>
        <label>
          Levert oppdrag: 
          
        </label>
        <input
            type="date"
            name="deliveredDate"
            value={saleData.deliveredDate}
            onChange={handleInputChange}
          />
      </div>
      <div>
        <label>Oppdrag beskrivelse</label>
        <input
            type="text"
            name="typeOfWork"
            value={saleData.typeOfWork}
            onChange={handleInputChange}
            placeholder="Enter type of work..."
            
          />
        </div>
      <div>
        <label>Unit price</label>
        <input
            type="number"
            name="unitPrice"
            value={saleData.unitPrice}
            onChange={handleInputChange}
          />
      </div>
      <div>
        <label>Number of units</label>
        <input
            type="number"
            name="numberUnits"
            value={saleData.numberUnits}
            onChange={handleInputChange}
          />
      </div>
      <div>
        <label>
            Added tax?: 
            <input
              type="checkbox"
              name="addedTax"
              checked={saleData.addedTax}
              onChange={handleTaxChange}
            />
          </label>
      </div>
    </div>
  );
}

export default CreateSaleInput;