import React from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function PDFgenerator() {

    const exportToPDF = () => {
        const divWidthInMm = 210; // Width of the div in mm
        const divHeightInMm = 297; // Height of the div in mm
      
        // Convert millimeters to points
        
        // Create a new jsPDF instance with A4 dimensions
        const doc = new jsPDF('p', 'mm', 'a4');
      
        // Capture the div as an image using html2canvas
        const element = document.getElementById('report');
        html2canvas(element, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = divWidthInMm;
          const imgHeight = divHeightInMm;
      
          // Add the image to the PDF document
          doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
          // Save the PDF file
          doc.save('./output/output.pdf');
        });
      };
    
    return (
        <div className="m-4">
            <button onClick={exportToPDF} type="button" className="btn btn-outline-danger"><spans className="bi bi-file-pdf text-danger"></spans> Export PDF</button>
        </div>
      );
}


export default PDFgenerator