import React from 'react';

const FeatureDetails = ({ service }) => {
    return (
        <div className="col-md-3 text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
        </div>
    );
};

export default FeatureDetails;