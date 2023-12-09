import React from 'react';
import './eachfood.css'; // Import your CSS file here
import './tailwind.css';

const eachfood = () => {
  return (
    <div className="flex flex-col h-full gap-4 lg:flex-row">
      {/* Left side (picture) */}
      <div className="w-full h-auto lg:w-1/2">
        <img src="../assets/eachfood.png" alt="Your Image" className="w-full h-auto" />
      </div>
  
      {/* Right side (content) */}
      <div className="w-full container lg:w-1/2">
        <h1 className="room-info">مشخصات غذا</h1>
        <div className="row mx-2">
          <div className="relative flex flex-col">
            <label htmlFor="item" className="label absolute bottom-10 left-10"> قیمت</label>
            <input type="text" placeholder="Input 1" className="item2 w-1/3 p-2 border rounded-md mx-2" />
          </div>
        </div>
        <div className="row">
          <div className="relative flex flex-col">
            <label htmlFor="item" className="label absolute bottom-54 left-3/4"> توضیحات</label>
            <textarea className="text px-3 py-2" placeholder="Enter your text here..."></textarea>
          </div>
        </div>
        <div className="row">
          <button className="button">رزرو غذا</button>
        </div>
      </div>
    </div>
  );
};

export default eachfood;
