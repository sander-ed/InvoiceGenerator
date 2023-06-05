const requestSale = (id) => {
    console.log("called with", id)
    fetch(`http://localhost:5000/sales/${id}`)
      .then(response => response.json())
      .then(data => {
        
        if (data.success) {
            console.log('I GOT CALLED')
            return(data.data);
        }
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });
  };


const updateSale = (id, saleData) => {
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



module.exports = {
    requestSale,
    updateSale
}
