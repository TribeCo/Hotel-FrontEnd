import React from 'react';
import './employee_list.css'; // Import your CSS file here
import './tailwind.css'

const EmployeeList = () => {
    const cardData = [
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
            name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        {
          
          name: '---',
          jobname:"---",
          id : "---",
          email :"---"
        },
        // Add more objects for each card as needed
      ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container border-8 rounded-lg grid grid-cols-2 lg:grid-cols-3 gap-4 b-5 p-4" id="cardContainer">
        {cardData.slice(0, 15).map((cardInfo, index) => (
          <div key={index} className="rounded card flex flex-row items-center justify-center">
            <div dir="rtl" className="fields">
              <p className="card-text">نام کارمند: {cardInfo.name}</p>
              <p className="card-text">عنوان شغلی: {cardInfo.jobname}</p>
              <p className="card-text">کدملی: {cardInfo.id}</p>
              <p className="card-text">ایمیل: {cardInfo.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;