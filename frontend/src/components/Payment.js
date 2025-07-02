import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

function Payment() {
  const { property_id, id } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // Handle payment logic
  const handlePayment = () => {
    // Check if all fields are filled
    if (creditCard && expirationDate && cvv && name) {
      // Perform payment logic here
      // Example: Show Sweet Alert message
      Swal.fire({
        title: 'Payment Successful!',
        text: 'Thank you for your reservation!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      // Optionally, you can navigate to a different page after payment
      // Example: Redirect to the reservation success page
      navigate('/');
    } else {
      // Show an error message if any field is missing
      Swal.fire({
        title: 'Error',
        text: 'Please fill in all payment details.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  useEffect(() => {
    // Fetch room data using the provided room ID and property ID
    fetch(`http://127.0.0.1:3000/properties/${property_id}/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoomData(data);
      })
      .catch((error) => {
        console.error('Error fetching room details:', error);
      });
  }, [property_id, id]);

  return (
    <div className="container mt-5">
      <h5>Payment Page</h5>
      {roomData ? (
        <div key={roomData.id} className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* Display room image or relevant information */}
            <img src={roomData.image} className="img-fluid py-4" alt="Room" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="bg-details p-4">
              <h2>Room details</h2>
              <h5 className="centered-title">{roomData.room_type}</h5>
              <p className="description">{roomData.description}</p>
              <p>Price: ${roomData.price.toFixed(2)}</p>
              <p>Tenant Name: {roomData.tenant_name}</p>
              <p>Occupied: {roomData.occupied ? 'Yes' : 'No'}</p>
              {/* Button to toggle payment form visibility */}
              <button className="btn btn-primary" onClick={() => setShowPaymentForm(true)}>
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading room details...</p>
      )}

      {/* Payment form */}
      {showPaymentForm && (
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="bg-details p-4">
              <h2>Payment Details</h2>
              {/* Your payment form content here */}
              <form>
                <div className="col-12">
                  <div className="d-flex flex-column px-md-5 px-4 mb-4">
                    <span>Credit Card</span>
                    <div className="inputWithIcon">
                      <input
                        className="form-control"
                        type="text"
                        value={creditCard}
                        onChange={(e) => setCreditCard(e.target.value)}
                        required
                      />
                      <span>
                        <img
                          src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                    <span>
                      Expiration<span className="ps-1">Date</span>
                    </span>
                    <div className="inputWithIcon">
                      <input
                        type="text"
                        className="form-control"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        required
                      />
                      <span className="fas fa-calendar-alt"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                    <span>Code CVV</span>
                    <div className="inputWithIcon">
                      <input
                        type="password"
                        className="form-control"
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                        required
                      />
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex flex-column px-md-5 px-4 mb-4">
                    <span>Name</span>
                    <div className="inputWithIcon">
                      <input
                        className="form-control text-uppercase"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <span className="far fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="col-12 px-md-5 px-4 mt-3">
                  <button className="btn btn-primary w-100" onClick={handlePayment}>
                    Pay ${roomData.price.toFixed(2)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
