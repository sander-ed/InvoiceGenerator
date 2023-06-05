import React, { useState } from "react";

function InvoiceRow({saleData}) {

    return (
        <tr>
            <td>{saleData.typeOfWork}</td>
            <td>{saleData.numberUnits}x</td>
            <td>{saleData.unitPrice} NOK</td>
            <td>{saleData.addedTax ? 25 : 0}%</td>
            <td>{saleData.sumRow} NOK</td>
       </tr>
    )
}


export default InvoiceRow
