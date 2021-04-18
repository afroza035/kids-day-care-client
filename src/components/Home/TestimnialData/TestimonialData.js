import React from 'react';

const TestimonialData = ({testimonial}) => {
    return (
        <div className="col-md-4 mt-3">
          <div className="card text-center p-3">
            <div className="">
            <img style={{height: "70px", width: "70px"}} src={testimonial.imageUrl} alt="" className="card-img-top rounded-circle" />
            </div>
            <div className="card-body">
              <h5 className="card-tittle">{testimonial.name}</h5>
              <p>{testimonial.data.description}</p>
            </div>
          </div>
        </div>
    );
};

export default TestimonialData;