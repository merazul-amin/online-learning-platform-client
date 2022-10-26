import React from 'react';
import { useLoaderData } from "react-router-dom";
import PDFContent from './PDFContent';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const CourseDetails = () => {
    const course = useLoaderData();
    const { name, img, price, duration, toLearn, id } = course;

    const printPdf = () => {
        console.log('clicked');
        const input = document.getElementById("course-details-container");

        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true })
            .then(canvas => {
                const imgWidth = 208;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save(`${name}.pdf`)
            })
    }
    return (
        <div style={{ width: '60%', margin: 'auto' }}>
            <div style={{ textAlign: " center" }} className='my-3'>
                <h3>Course Name: {name}</h3>
                <button onClick={printPdf} className='btn btn-success'>Download Course Pdf</button>
            </div>
            <div id='course-details-container'>
                <PDFContent course={course}></PDFContent>
            </div>


        </div>
    );
};

export default CourseDetails;