
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLandlord } from '../context/LandlordContext';

function AddProperty() {
  const { landlord, addProperty, updatePropertyData } = useLandlord();
  const [propertyData, setPropertyData] = useState({
    location: '',
    environment: '',
    security: '',
    name: '',
    images: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Update propertyData in the LandlordContext
    updatePropertyData({ [name]: value });
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    // Call the addProperty function from the context and pass both landlord and propertyData
    await addProperty(landlord, propertyData);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                <Link to="/addproperty" className="tab">
                  AddProperty
                </Link>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <Link to="/signup" className="tab">
                  {/* Add your text here */}
                </Link>
                <div className="login-space">
                  <div className="login">
                    <div className="group">
                      <label htmlFor="location" className="label">
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        className="input"
                        name="location"
                        placeholder="Enter property location"
                        value={propertyData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="environment" className="label">
                        Environment
                      </label>
                      <input
                        id="environment"
                        type="text"
                        className="input"
                        name="environment"
                        placeholder="Enter property environment"
                        value={propertyData.environment}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="security" className="label">
                        Security
                      </label>
                      <input
                        id="security"
                        type="text"
                        className="input"
                        name="security"
                        placeholder="Enter property security"
                        value={propertyData.security}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="name" className="label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input"
                        name="name"
                        placeholder="Enter property name"
                        value={propertyData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="images" className="label">
                        Images
                      </label>
                      <input
                        id="images"
                        type="text"
                        className="input"
                        name="images"
                        placeholder="Enter property images URL"
                        value={propertyData.images}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="group">
                      <input
                        type="submit"
                        className="button"
                        value="Add Property"
                        onClick={handleAddProperty}
                      />
                    </div>
                    <div className="hr"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
