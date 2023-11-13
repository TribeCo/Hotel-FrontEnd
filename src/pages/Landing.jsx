import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../layouts/theme";

import { Link } from "react-router-dom";
import "../components/BackgroundImage.css";
import Bar from '../components/Bar';
import Footer from "../components/Footer";
import { Button } from "@mui/material";

import htp1 from "../assets/Hotelpic1.jpeg";
import htp2 from "../assets/Hotelpic2.jpeg"
import htp3 from "../assets/Hotelpic3.jpeg"
import home from "../assets/HomePage.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Landing.css";


const HomePage = () => {
    return (
        <div >
        <nav class="navbar navbar-expand-lg fixed-top text-right navbar-dark border-body" data-bs-theme="dark" >
            <div class="container">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <Button>
                        <Link to="/register" class="nav-link active text-purple">ثبت نام</Link>
                    </Button>
                    <Button>
                    <Link to="/login" class="nav-link text-purple">ورود</Link>
                    </Button>
                    <Button>
                    <a class="nav-link text-purple" href="#">اخبار</a>
                    </Button>
                </ul>
              </div>
            </div>
        </nav>
        <div>
            
        </div>
        <div class="overlay-container">
            <img src={home} class="overlay-image rounded-bottom-corners enlarge-image" alt="Responsive Image" />
            <div class="overlay-text text-purple fade-text" id ="welcomeText">تصاویر هتل</div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src={htp1} class="card-img-top" alt="Card Image"/>
                        <div class="card-body">
                            <h5 class="card-title">اتاق با فضای باز</h5>
                            <p class="card-text">در این اتاق‌ها، شما از زیبایی‌های محیط باز لذت می‌برید، همچنین فضایی راحت و آرامش‌بخش برای استراحت و خلوت به شما ارائه می‌شود. با دسترسی به یک تراس یا باغ خصوصی، این اتاق‌ها فراتر از یک اقامت معمولی را به شما ارائه می‌دهند</p>
                            <a href="#" class="btn bg">ادامه</a>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src={htp2} class="card-img-top" alt="Card Image" />
                        <div class="card-body">
                            <h5 class="card-title">اتاق های لاکچری</h5>
                            <p class="card-text">هر جزئیات اتاق‌های لاکچری ما با دقت انتخاب شده است،ازانتخاب مبلمان گران‌قیمت تاارائه‌ی خدمات شخصی و حرفه‌ای. از دیگر ویژگی‌ها می‌توان به تجهیزات نوآورانه، تخت‌های فاخر با بلندی مطلوب و حمامات طراحی شده با ذوق اشاره کرد</p>
                            <a href="#" class="btn bg">ادامه</a>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src={htp3} class="card-img-top" alt="Card Image"/>
                        <div class="card-body">
                            <h5 class="card-title">اتاق های چند نفره</h5>
                            <p class="card-text">هر اتاق چند نفره با اهتمام به جزئیات طراحی شده است تا امکاناتی را در اختیار شما قرار دهد که هر کدام از مهمانان بتوانند لحظاتی خاص و شاد را در کنار یکدیگر سپری کنند. از امکانات این اتاق‌ها می‌توان به تجهیزات رفاهی، فضاهای جلوه‌ای و خدمات شخصی اشاره کرد</p>
                            <a href="#" class="btn bg">ادامه</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="mt-5 status-bottom">
            <div class="container-fluid bg-dark text-light text-center py-3">
                <Button>تماس با ما</Button>
                <Button>درباره ما</Button>
            </div>
        </footer>
    </div>
    );
}


export default HomePage;