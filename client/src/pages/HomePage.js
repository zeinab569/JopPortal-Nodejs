import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
const HomePage = () => {
  return (
   <>
<head>
<Link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"></Link>
<Link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css"></Link>
<Link href="/assets/css/style.css" rel="stylesheet" >
</Link>
</head>
<header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a href="/home" class="logo">Job Portal<em> Website</em></a>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul class="nav">
                            <li><Link to="/home" >Home</Link></li>
                            <li><Link to="/jobs" >Jobs</Link></li>
                            <li><Link to="/about" >About</Link></li> 
                            <li><Link to="/login" >Login</Link></li> 
                            <li><Link to="/register" >Register</Link></li> 
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- ***** Header Area End ***** -->

    <!-- ***** Main Banner Area Start ***** --> */}
    <div class="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
            <source src="/assets/videos/video.mp4" type="video/mp4" />
        </video>
      
        <div class="video-overlay header-text">
            <div class="caption">
                {/* <h6>Lorem ipsum dolor sit amet</h6> */}
                <h2>Find the perfect <em>Job</em></h2>
                <div class="main-button">
                    <a href="contact.html">Get Strat</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ***** Main Banner Area End ***** --> */}

    <script src="/assets/js/jquery-2.1.0.min.js"></script>


<script src="/assets/js/popper.js"></script>
<script src="/assets/js/bootstrap.min.js"></script>


<script src="/assets/js/scrollreveal.min.js"></script>
<script src="/assets/js/waypoints.min.js"></script>
<script src="/assets/js/jquery.counterup.min.js"></script>
<script src="/assets/js/imgfix.min.js"></script> 
<script src="/assets/js/mixitup.js"></script> 
<script src="/assets/js/accordions.js"></script>


<script src="/assets/js/custom.js"></script>
      
      </>



  );
};

export default HomePage;
