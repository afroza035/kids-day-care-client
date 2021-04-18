import React from 'react';

const TeacherDetails = ({teachers}) => {
    return (
        <div className="col-md-3 text-center">
            <img style={{height: '150px'}} src={teachers.img} alt="" />
            <h5 className="mt-3 mb-3">{teachers.name}</h5>
            <p>{teachers.tittle}</p>
        </div>
    );
};

export default TeacherDetails;