const mongoose = require('mongoose')



const saleSchema = mongoose.Schema({
        customer: String,
        customerName: String,
        customerEmail: String,
        customerAdress: String,
        customerZip: String,
        organizationNumber: Number,
        invoiceDate: Date,
        expireDate: Date,
        deliveredDate: Date,
        typeOfWork: String,
        unitPrice: Number,
        numberUnits: Number,
        addedTax: Boolean,
        sumRow: Number,
        sumTax: Number
      })



const Sale = mongoose.model("Sale", saleSchema);


module.exports = Sale;