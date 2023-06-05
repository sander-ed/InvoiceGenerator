import React, {useState} from "react";


function SendData({saleData}) {

    const [isDataStored, setIsDataStored] = useState(false);

    const handleButtonClick = () => {
       
        // Make sure to replace 'your-server-endpoint' with the actual URL of your server endpoint
        const serverEndpoint = 'http://localhost:5000/sales';
      
        // Send the saleData object to the server
        fetch(serverEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(saleData),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.success) {
                console.log('Data stored successfully')
                // Handle the response from the server if needed
                console.log('Server response:', data);
                setIsDataStored(true);
            } else {
                console.log('Data storage failed!')
            }
            
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
          });
      };

      return (
        <div>
          <p> {isDataStored ? "Data stored successfully!" : ""}</p>
          <button onClick={handleButtonClick} className="btn btn-outline-success"><span className="bi bi-save text-success"></span> Lagre oppdrag</button>
        </div>
      )
      
}

export default SendData