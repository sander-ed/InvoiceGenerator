import React from "react";


const HiringSummaryCard = ({id, hiring, hiringSum, customer, handleOnClick }) => {
    const handleCardclick = () => {
      handleOnClick(id)
      console.log("Id of your card:" + id);
    }

    const deleteCard = () => {
      fetch(`http://localhost:5000/sales/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        } 
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log('Deleted sale:', data);
        })
        .catch(error => {
          // Handle any errors
          console.error('Error updating sale:', error);
        });
    }
  
    return (
      <div className="col-md-4 mt-3">
        <div className="card card-hover">
          <div className="card-body d-flex justify-content-between">
            <div>
              <h5 className="card-title">{hiring}</h5>
              <p className="card-text mb-1">{hiringSum} NOK</p>
              <p className="card-text">{customer}</p>
            </div>
            <div>
              <button className="btn btn-outline-success delete-button mb-1" onClick={(e) => {
                  e.stopPropagation(); // Prevent the click event from bubbling to the card
                  handleCardclick()
                }}><span className="bi bi-pen text-success"></span></button>
              <form>
                <button className="btn btn-outline-danger delete-button" onClick={(e) => {
                  e.stopPropagation(); // Prevent the click event from bubbling to the card
                  deleteCard();
                }}><span className="bi bi-trash text-danger"></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };


function Hiring({salesData, handleOnClick}) {

    return (
        <div className="row">
            {salesData.map(sale => (<HiringSummaryCard 
              key={sale._id}
              id={sale._id} 
              hiring={sale.typeOfWork} 
              hiringSum={sale.sumRow} 
              customer={sale.customer}
              handleOnClick = {handleOnClick}

              />))}
        </div>
    )
}

export default Hiring