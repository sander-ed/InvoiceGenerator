import React, { useEffect, useState } from 'react';
import InvoiceRow from './InvoiceRow';

function Invoice({saleData}) {


  return (
    <div className='invoice-pdf'> 
      <div className='container body-invoice'>
          <div className='row bg-dark text-light invoice-header-row'>
              <div className='col-md-8'>
                  <h1>Faktura</h1>
                  <p>Finn Griggs Produksjoner</p>
                  <p>finn.griggs3@gmail.com</p>
              </div>
              <div className='col-md-4 p-3'>
                <p>Org.nummer: 930809853</p>
              </div>
          </div>
          <div className='row p-2'>
                <div className='col-md-6'>
                  <h5>Oppdragsiver</h5>
                  <table className='table'>
                    <tbody>
                      <tr>{saleData.customer}</tr>
                      <tr>{saleData.customerAdress}</tr>
                      <tr>{saleData.customerZip}</tr>
                    </tbody>
                  </table>             
                </div>
                <div className='col-md-2'></div>
                <div className='col-md-4 table-dates'>
                  <h5>Fakturadetaljer</h5>
                  <table className='table '>
                      <tbody>
                        <tr>
                          <td>Fakturanummer:</td>
                          <td>1549</td>
                        </tr>
                        <tr>
                          <td>Fakturadato:</td>
                          <td>{saleData.invoiceDate}</td>
                        </tr>
                        <tr>
                          <td>Forfallsdato:</td>
                          <td>{saleData.expireDate}</td>
                        </tr>
                        <tr>
                          <td>Levert:</td>
                          <td>{saleData.deliveredDate}</td>
                        </tr>
                        <tr>
                          <td>Referanse:</td>
                          <td>{saleData.customerName}</td>
                        </tr>
                        <tr>
                          <td>Org.nummer:</td>
                          <td>{saleData.organizationNumber}</td>
                        </tr>
                      </tbody>
                    </table> 
                </div>
          </div>
          <div className='row table-sum'>
            <table className='table'>
              <thead className='bg-dark text-light text-light'>
                <tr>
                  <th className='col-4'>Produktbeskrivelse</th>
                  <th className='col-2'>Enh.</th>
                  <th className='col-2'>Enh. pris</th>
                  <th className='col-2'>Mva</th>
                  <th className='col-2'>Pris</th>
                </tr>
              </thead>
              <tbody>
                <InvoiceRow saleData = {saleData}/>
              </tbody>
            </table>
            <hr></hr>
            <table>
              <thead>
                <tr>
                  <td className='col-8'></td>
                  <td className='col-2'>Mva:</td>
                  <td className='col-2'>{saleData.sumTax} NOK</td>
                </tr>
                <tr>
                  <th></th>
                  <th>Sum:</th>
                  <th>{saleData.sumRow} NOK</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className='row div-spacer'></div>
          <div className='row'></div>
        </div>
        <div>
          <footer className='bg-dark text-light'>
            <div className='container'>
              <div className='row m-4 p-4'>
                <div className='col-md-6'>
                  <p>Sum: {saleData.sumRow} NOK</p>
                </div>
                <div className='col-md-6'>
                  <p>Kontonummer: 1404 98 34765</p>
                </div>
            
              </div>
            </div>
          </footer>
        </div>
    </div>
    
    
  );
}

export default Invoice;