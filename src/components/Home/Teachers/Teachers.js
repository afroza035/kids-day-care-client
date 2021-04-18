import React from 'react';
import TeacherDetails from '../TeacherDetails/TeacherDetails';
import lily from '../../../images/teacher.png';
import jennifer from '../../../images/teacher1.png';
import regina from '../../../images/teacher2.png';
import hill from '../../../images/teacher3.png';
import ric from '../../../images/teacher4.png';

const infoTeachers = [
    {
        name: 'LILY CARTER',
        tittle: 'Literacy Teacher',
        img: ric
    },
    {
        name: 'JENNIFER LAWRENCE',
        tittle: 'Active Learning Teacher',
        img: lily
    },
    {
        name: 'REGINA SPEKTOR',
        tittle: 'Preschool Teach',
        img: regina
    },
    {
        name: 'RICHARD HILL',
        tittle: 'Art and Music Teacher',
        img: hill
    }
]

const Teachers = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h2>MEET OUR TEACHERS</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-2 pt-5">
            {
                infoTeachers.map(teachers => <TeacherDetails teachers={teachers} key={teachers.name}></TeacherDetails>)
            }
        </div>
    </div>
    </section>
    );
};

export default Teachers;