import React from "react";

const Enroll = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="">
        <div className="text-center">
          <h3>HOW TO ENROLL YOUR CHILD?</h3>
          <h5>CALL +1 000 123 1234 OR FILL IN THE FORM BELOW</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            molestias minima tenetur explicabo incidunt vel itaque deleniti
            necessitatibus quasi ad.
          </p>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="CONTACT PHONE"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ADD US TO THE WAITING LIST"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="PARENT'S NAME"
                ></input>
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="YOUR MESSAGE"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
