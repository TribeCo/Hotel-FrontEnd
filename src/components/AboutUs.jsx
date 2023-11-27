import React from 'react';
import './aboutus.css';
import './tailwind.css';
import pic from './pic.jpg';
import icon from './icon.png';
function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <header className="nav-color text-white py-4 w-full">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">برند شما</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">بازگشت به خانه</a></li>
              <li><a href="#" className="btn-link">ورود</a></li>
              <li><a href="#" className="btn-link">ثبت نام</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <img className="image mb-8 mt-8" src={pic} alt="Sample" />
      <p className="info">تیم ما</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4 items-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
              <img src={icon} alt="Icon" />
            </div>
            <p className="mt-2 name">پورنوین</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
              <img src={icon} alt="Icon" />
            </div>
            <p className="mt-2 name">کرمی</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
              <img src={icon} alt="Icon" />
            </div>
            <p className="mt-2 name">وظیفه</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
              <img src={icon} alt="Icon" />
            </div>
            <p className="mt-2 name">طاها</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center icon">
              <img src={icon} alt="Icon" />
            </div>
            <p className="mt-2 name">رضا</p>
          </div>
        </div>
      </div>
      <footer className="footer-color text-white py-4 w-full mt-8" dir="rtl">
        <div className="container mx-auto flex items-center px-4">
          <a href="#" className="hover:text-gray-300 ml-4">تماس با ما</a>
          <a href="#" className="hover:text-gray-300">درباره ما</a>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
