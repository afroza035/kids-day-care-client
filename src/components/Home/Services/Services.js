import React, { useState } from "react";
import { useEffect } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";


const Services = () => {
  const [classesData, setClassesData] = useState([]);

  useEffect(() =>{
    fetch('https://lit-plateau-42557.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setClassesData(data))
  }, []) 
  
  return (
    <section className="text-center container mt-5">
      <div>
        <h5>SERVICES</h5>
        <h1>CHOOSE CLASSES FOR YOUR CHILD</h1>
      <div className="row">
        {
          classesData.map(classes => <ServicesCard classes ={classes} key ={classes._id}></ServicesCard>)
        }
      </div>
    </div>
    </section>
    
  );
};

export default Services;
