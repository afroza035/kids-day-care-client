import React, { useEffect, useState } from "react";
import abc from "../../../images/abc.png";
import TestimonialData from "../TestimnialData/TestimonialData";
// const testimonialData = [
//   {
//     name: "Marin",
//     img: abc,
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, molestiae?",
//   },
//   {
//     name: "Marin",
//     img: abc,
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, molestiae?",
//   },
//   {
//     name: "Marin",
//     img: abc,
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, molestiae?",
//   },
//   {
//     name: "Marin",
//     img: abc,
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, molestiae?",
//   },
// ];
const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(()=>{
    fetch('https://lit-plateau-42557.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>setTestimonialData(data))
  }, [])
  return (
      <section className="text-center container mt-5">
        <div>
          <h5>REVIEWS</h5>
          <h1>TESTIMONIAL</h1>
          <div className="row">
            {testimonialData.map((testimonial) => (
              <TestimonialData testimonial={testimonial} key={testimonial._id}></TestimonialData>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Testimonial;
