import React from 'react';
import kinderWelcome from '../../../images/kinder.jpg';
const Welcome = () => {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center">
            <div  className="col-md-6 offset-md-1">
                <img src={kinderWelcome} alt=""/>
            </div>
            <div className="col-md-4">
                <h1 style={{color: '#3A4256'}}>WELCOME TO <br/> THE KINDERGARTEN!</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-primary">WHY KINDERGARTEN?</button>
            </div>
        </div>
    );
};

export default Welcome;