const mongoose = require('mongoose')
const Sale = require('./sale-model');

mongoose.connect('mongodb://localhost:27017/invoicingDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});


function get(req, res) {
    Sale.find({})
    .then(sales => {
      console.log('All sales:', sales);
      
      const salesData = sales.map(sale => sale.toObject()); // Convert Mongoose documents to plain JavaScript objects
      
      // Send the sales data as a JSON response
      res.json({ success: true, data: salesData });
    })
    .catch(error => {
      console.error('Error retrieving sales:', error);
      
      // Send an error response
      res.status(500).json({ success: false, error: 'Failed to retrieve sales.' });
    });
}


function getSale(req, res, id) {
  
  Sale.findById(id)
    .then(sale => {
      console.log('Sale', sale)

      res.json({ success: true, data: sale })
    })
    .catch(error => {
      res.send({success: false, error: 'Failed to retrieve sale by id'})
    })
}


function post(req, res) {
  const saleData = req.body; // Assuming the request body contains the sale data
  const sale = new Sale(saleData);
  sale.save()
    .then(() => {
      console.log('Record saved!');
      res.json({ success: true }); // Send a JSON response indicating success
    })
    .catch(error => {
      console.error('Error:', error);
      res.json({ success: false, error: 'Failed to save the record.' }); // Send a JSON response indicating failure
    });
}


function put(req, res, id) {

  Sale.findByIdAndUpdate({_id: id}, 
    req.body, 
    {new:true})
      .then(sale => {
        res.send({success : true, data : sale})
      })
      .catch(error => {
        res.json({success:false, error: 'Failed to update sale'})
      })
    
}


function del(req, res, id) {
  Sale.findByIdAndDelete({_id: id})
    .then(sale => {
      res.send({success:true, data:sale})
    })
    .catch(error => {
      res.send({success:false, error:'Failed to delete sale'})
    })
}



module.exports = {
    get:get,
    getSale:getSale,
    post:post,
    put:put,
    del:del

}