import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
const AboutPage = () => {
  return (
   <>
<head>
<Link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"></Link>
<Link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css"></Link>
<Link href="/assets/css/style.css" rel="stylesheet" >
</Link>
</head>

<body>
    
   
    <div id="js-preloader" class="js-preloader">
      <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">

                        <a href="index.html" class="logo">Job Agency<em> Website</em></a>
                        

                        <ul class="nav">
                        <li><Link href="/home" >Home</Link></li>
                            <li><a href="jobs.html">Jobs</a></li>
                            <li><Link to="/login" >Login</Link></li> 
                            <li><Link to="/register" >Register</Link></li>   
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        
                    </nav>
                </div>
            </div>
        </div>
    </header>
   

    <section class="section section-bg" id="call-to-action" style="background-image: url(/assets/images/banner-image-1-1920x500.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2>Learn more <em>About Us</em></h2>
                        <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    <section class="section" id="our-classes">
        <div class="container">
            
            <div class="row" id="tabs">
              <div class="col-lg-4">

                {/* <ul>
                  <li><a href='#tabs-1'><i class="fa fa-soccer-ball-o"></i> Our Goals</a></li>
                  <li><a href='#tabs-2'><i class="fa fa-briefcase"></i> Our Work</a></a></li>
                  <li><a href='#tabs-3'><i class="fa fa-heart"></i> Our Passion</a></a></li>
                </ul> */}
              </div>
              <div class="col-lg-8">
                <section class='tabs-content'>
                  <article id='tabs-1'>
                    <img src="/assets/images/about-image-1-940x460.jpg" alt=""></img>
                    <h4>Our Goals</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aspernatur natus dignissimos eos quod, odio.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate ullam exercitationem molestiae illum? Nam magni, saepe sint maiores vitae!</p>

                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                   
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit commodi impedit unde accusantium nam incidunt tenetur, libero maiores enim! Nisi ex odit, totam nihil doloribus. Nemo ut, eos consequatur libero aut quas dolorum ipsa, quidem, totam dicta id possimus dolores distinctio laboriosam doloribus voluptates tenetur consectetur inventore aliquid dolorem?</p>
                  </article>
                  <article id='tabs-2'>
                    <img src="/assets/images/about-image-2-940x460.jpg" alt=""></img>
                    <h4>Our Work</h4>
                    <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ut accusantium cum! Ad quisquam, aut praesentium magni pariatur ipsa! Soluta deserunt accusantium repellendus ratione quam hic facere, cupiditate iste obcaecati a, officiis ipsum aspernatur in?</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla a necessitatibus eos vitae quibusdam quo sunt officiis rerum voluptatibus non natus eius placeat officia vel quaerat, reprehenderit obcaecati, eaque? Repudiandae ad facere culpa accusamus aliquam ab assumenda reiciendis corrupti cum nemo, cumque molestiae corporis deserunt!</p>
                  </article>
                  <article id='tabs-3'>
                    <img src="/assets/images/about-image-3-940x460.jpg" alt=""></img>
                    <h4>Our Passion</h4>
                    <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aut beatae commodi repudiandae distinctio, magnam blanditiis reiciendis vitae velit voluptatum natus, fugit quis eos dolores!</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic adipisci reiciendis quaerat qui earum aut, atque esse quisquam quis exercitationem sapiente, dolorum consequatur consequuntur voluptatibus ipsam, fuga magnam beatae optio nam. Recusandae ut aliquid, eligendi.</p>
                  </article>
                </section>
              </div>
            </div>
        </div>
    </section>
  

    <section class="section section-bg" id="call-to-action" style="background-image: url(/assets/images/banner-image-1-1920x500.jpg)">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2>Send us a <em>message</em></h2>
                        <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                        <div class="main-button">
                            <a href="contact.html">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





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
</body>    
      </>



  );
};

export default AboutPage;