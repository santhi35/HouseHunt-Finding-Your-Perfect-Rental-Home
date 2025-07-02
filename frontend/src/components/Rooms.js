import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './rooms.css';

function Rooms() {
  const { property_id } = useParams();
  const [roomsData, setRoomsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (property_id) {
          const response = await fetch(`http://127.0.0.1:3000/properties/${property_id}/rooms`);
          if (response.ok) {
            const data = await response.json();
            console.log('Fetched rooms data:', data);
            setRoomsData(data);
          } else {
            console.error('Error fetching rooms:', response.status);
          }
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();

  }, [property_id]);

  const handleDepositPayment = (room) => {
    if (room && room.id) {
      navigate(`/properties/${property_id}/rooms/${room.id}/payment`, { state: { roomDetails: room } });
    } else {
      console.error('Room ID is undefined');
    }
  };

  const handleContactLandlord = (landlordId) => {
    console.log(`Contact landlord ${landlordId}`);
  };

  return (
    <div className="container-background container py-5">
      <div className="row text-center text-white mb-5">
        <div className="col-lg-7 mx-auto">
          <h1 className="display-4">Rooms for Property {property_id || 'N/A'}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <ul className="list-group shadow">
            {roomsData.map((room) => (
              <li key={room.id} className="list-group-item" style={{ height: '250px' }}>
                <div className="row h-100">
                  {/* Image Column (Linked) */}
                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <Link to={`/rooms/${room.id}`}>
                      <img
                        src={room.image}
                        alt={`Room ${room.id}`}
                        width="200"
                        className="img-fluid rounded"
                        style={{ height: '100%' }}
                      />
                    </Link>
                  </div>
                  {/* Room Information Column */}
                  <div className="col-lg-8 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="mt-0 font-weight-bold mb-2">{room.room_type}</h5>
                      <p className="font-italic text-muted mb-0 small">
                        {room.occupied ? 'Occupied' : 'Vacant'}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="font-weight-bold my-2">${room.price.toFixed(2)}</h6>
                      {room.occupied ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleContactLandlord(room.landlord_id)}
                        >
                          Contact Landlord
                        </button>
                      ) : (
                        <>
                          <button
                            className="btn btn-success mr-2"
                            onClick={() => handleDepositPayment(room)}
                          >
                            Pay Deposit
                          </button>

                          <button
                            className="btn btn-primary"
                            onClick={() => handleContactLandlord(room.landlord_id)}
                          >
                            Contact Landlord
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
