import react, {useState, useEffect} from 'react';
import CreateSaleInput from './CreateSaleInput';
import Invoice from './Invoice';
import PDFgenerator from './PDFgenerator';
import SendData from './SendData';

function ParentInvoiceInfo() {

    const [saleData, setSaleData] = useState({
        customer: 'Kulturhuset',
        customerName: 'Runer Gåsterud',
        customerEmail: '',
        customerAdress: 'Zander Kaaes gate 6',
        customerZip: '5015 Bergen',
        organizationNumber: 81541962,
        invoiceDate: new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        expireDate: '',
        deliveredDate: '',
        typeOfWork: 'Lystekniker',
        unitPrice: 4500,
        numberUnits: 1,
        addedTax: false,
        sumRow: 4500*1,
        sumTax: 0
      });


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSaleData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleTaxChange = (e) => {
        const { name, value } = e.target;
        const tax = value == 'on' ? true : false
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


      useEffect(() => {
        const invoiceDate = new Date(saleData.invoiceDate);
        const expireDate = new Date(invoiceDate.getTime() + 21 * 24 * 60 * 60 * 1000); // Add 21 days (3 weeks)
        setSaleData((prevData) => ({
          ...prevData,
          expireDate: expireDate.toISOString().slice(0, 10)
        }));
      }, [saleData.invoiceDate]);
      


    
      return (
        <div className="row">
          <div className="col-md-3">
            <CreateSaleInput saleData={saleData} handleInputChange={handleInputChange} handleTaxChange={handleTaxChange}/>
            <SendData saleData={saleData}/>
            <PDFgenerator />
          </div>
        <div className="col-md-9 invoice-pdf-border m-0 p-0" id='report'>
            <Invoice saleData={saleData} />
        </div>
           
        </div>
      );
    }





export default ParentInvoiceInfo