import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Group } from "@mui/icons-material";
import { Typography, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import "./aboutus.css";
import "./tailwind.css";

const styles = {
    faqPage: {
        width: '80%',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'vazir',
        flex: '1'
    },
    faqItem: {
        background: '#BD93F9',
        marginBottom: '10px',
        border: '1px solid #6272a4',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        fontFamily: 'vazir'
    },
    faqTitle: {
        color: '#F8F8F2', // Light color for visibility
        fontSize: '28px', // Larger font size
        textAlign: 'center',
        margin: '60px',
    },
    faqQuestion: {
        padding: '15px',
        margin: 0,
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: '#282A36',
        color: 'white',
        borderRadius: '4px 4px 0 0',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: '10px'
    },
    faqAnswer: {
        padding: '15px',
        margin: 0,
        display: 'none',
        lineHeight: 1.6,
    },
    faqAnswerShow: {
        display: 'block',
    }
};

// Define responsive styles
const responsiveStyles = {
    faqPage: {
        '@media screen and (maxWidth: 600px)': {
            padding: '10px',
        },
    },
    faqQuestion: {
        '@media screen and (maxWidth: 600px)': {
            fontSize: '14px',
        },
    },
    faqAnswer: {
        '@media screen and (maxWidth: 600px)': {
            fontSize: '14px',
        },
    }
};

// Merge styles with responsive styles
for (let key in responsiveStyles) {
    if (responsiveStyles.hasOwnProperty(key)) {
        styles[key] = { ...styles[key], ...responsiveStyles[key] };
    }
}

const defaultFaqs = [
    { question: "چگونه می‌توانم رزرو کنم؟", answer: "شما می‌توانید از طریق وب‌سایت ما یا با تماس با دفتر رزرواسیون، رزرو انجام دهید." },
    { question: "زمان‌های ورود و خروج چه ساعتی است؟", answer: "ورود از ساعت ۳ بعدازظهر و خروج تا ساعت ۱۱ صبح است. برای درخواست ورود زودهنگام یا خروج دیرهنگام با ما تماس بگیرید." },
    { question: "آیا در هتل رستوران وجود دارد؟", answer: "بله، هتل ما دارای رستورانی با خدمات کامل است که انواع غذاها و خدمات اتاق را ارائه می‌دهد." },
    { question: "آیا وای‌فای در هتل موجود است؟", answer: "بله، وای‌فای رایگان در تمامی نقاط هتل موجود است." },
    { question: "آیا هتل شما امکانات پارکینگ دارد؟", answer: "بله، ما فضای پارکینگ امن و رایگان برای مهمانان خود فراهم کرده‌ایم." },
    { question: "آیا امکان برگزاری جلسات و کنفرانس‌ها در هتل وجود دارد؟", answer: "بله، هتل ما دارای اتاق‌های مجهز برای جلسات و کنفرانس‌ها می‌باشد." },
];

const FAQPage = ({ faqs = defaultFaqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const Navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <Fab
                onClick={() => Navigate("/")}
                variant="extended"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    margin: "16px",
                }}>
                <Typography>بازگشت به صفحه اصلی</Typography>
            </Fab>
            <div style={styles.faqPage} className="responsive-faqPage">
                <h1 style={styles.faqTitle}>پرسش‌های متداول</h1>
                {faqs.map((faq, index) => (
                    <div key={index} style={styles.faqItem}>
                        <div
                            style={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                            className="responsive-faqQuestion"
                        >
                            <AddIcon style={styles.icon} />
                            {faq.question}
                        </div>
                        <div
                            style={activeIndex === index ? { ...styles.faqAnswer, ...styles.faqAnswerShow } : styles.faqAnswer}
                            className="responsive-faqAnswer"
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
            <footer
                className="footer-color items-center text-white py-4 w-full mt-8"
                dir="rtl">
                <div
                    className="mx-auto flex items-center px-4"
                    style={{ justifyContent: "space-between" }}>
                    <div className="column-1">
                        <Link
                            to="/contactus"
                            className="hover:text-gray-300 ml-4 mb-2">
                            <Typography>تماس با ما</Typography>
                        </Link>
                        <Link
                            to="/aboutus"
                            className="hover:text-gray-300">
                            <Typography>درباره ما</Typography>
                        </Link>
                    </div>
                    <div className="column-2">
                        <a href="https://github.com/Parsavazifeh">
                            <img
                                src="https://avatars.githubusercontent.com/Parsavazifeh"
                                alt="Avatar 1"
                                width="40"
                                height="40"
                                style={{ borderRadius: "50%", margin: "0 5px" }}
                            />
                        </a>
                        <a href="https://github.com/pouryape">
                            <img
                                src="https://avatars.githubusercontent.com/pouryape"
                                alt="Avatar 2"
                                width="40"
                                height="40"
                                style={{ borderRadius: "50%", margin: "0 5px" }}
                            />
                        </a>
                        <a href="https://github.com/TahaM8000">
                            <img
                                src="https://avatars.githubusercontent.com/TahaM8000"
                                alt="Avatar 3"
                                width="40"
                                height="40"
                                style={{ borderRadius: "50%", margin: "0 5px" }}
                            />
                        </a>
                        <a href="https://github.com/pourya22334415">
                            <img
                                src="https://avatars.githubusercontent.com/pourya22334415"
                                alt="Avatar 4"
                                width="40"
                                height="40"
                                style={{ borderRadius: "50%", margin: "0 5px" }}
                            />
                        </a>
                        <a href="https://github.com/Reza-B">
                            <img
                                src="https://avatars.githubusercontent.com/Reza-B"
                                alt="Avatar 5"
                                width="40"
                                height="40"
                                style={{ borderRadius: "50%", margin: "0 5px" }}
                            />
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        textAlign: "center",
                        color: "Highlight",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Group
                        fontSize="small"
                        style={{ marginLeft: "8px" }}
                    />
                    <Typography
                        variant="body1"
                        style={{ margin: "0" }}>
                        طراحی شده توسط گروه پنج‌ بعلاوه یک
                    </Typography>
                </div>
            </footer>
        </div>
    );
};

export default FAQPage;
