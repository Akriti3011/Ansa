<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Ansa</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">

    <link rel="stylesheet" href="{{ asset('css/magnific-popup.css')}}">

    <link rel="stylesheet" href="{{ asset('css/animate.min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css')}}">

    <link rel="stylesheet" href="{{ asset('css/nivo-lightbox.css')}}">
    <link rel="stylesheet" href="{{ asset('css/nivo_themes/default/default.css')}}">

    <link rel="stylesheet" href="{{ asset('css/hover-min.css')}}">
    <link rel="stylesheet" href="{{ asset('css/flexslider.css')}}">

    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Handlee|Limelight" rel="stylesheet">

        <!-- Styles -->
    </head>
    <body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
        <section id="home" class="parallax-section">
  <div class="gradient-overlay"></div>
    <div class="container">
      <div class="row">

          <div class="col-md-offset-2 col-md-8 col-sm-12">
              <h1 class="wow fadeInUp" data-wow-delay="0.6s"style="font-family: 'Handlee', cursive;
font-family: 'Limelight', cursive;font-size: 100px;">ANSA</h1>
              <p class="wow fadeInUp" data-wow-delay="1.0s">Presenting small and yummy Gujarati snacks to make every section of your tongue feel yummmmm....!!  .</p>
              <a href="/order" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"style="font-family: 'Handlee', cursive;font-weight:600">Order Online</a>
          </div>

      </div>
    </div>
</section>


<!-- Navigation section -->
<div class="navbar navbar-default navbar-static-top" role="navigation">
  <div class="container">

    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand" style="font-family: 'Handlee', cursive;
font-family: 'Limelight', cursive;">ANSA</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="/" class="smoothScroll">Home</a></li>
          <li><a href="#feature" class="smoothScroll">About</a></li>
        <li><a href="#menu" class="smoothScroll">Menu</a></li>
        <li><a href="/order" class="smoothScroll">Order Online</a></li>
        <li><a href="#contact" class="smoothScroll">Contact</a></li>
          
      </ul>
    </div>

  </div>
</div>


<!--About section-->
<section id="feature" class="parallax-section">
  <div class="container">
    <div class="row">

      <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
        <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
          <h2>ABOUT US</h2>

        </div>
      </div>

      <div class="clearfix"></div>

      <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <div class="feature-thumb">
          <div class="feature-icon">
            <span><i class="fa fa-coffee"></i></span>
          </div>
          <h3>MASALA TEA</h3>
          <p>We serve the incredible masala tea with the real taste of Gujarat. Keep yourself refreshing for the day ahead.</p>
        </div>
      </div>

      <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
        <div class="feature-thumb">
          <div class="feature-icon">
            <span><i class="fa fa-cutlery"></i></span>
          </div>
          <h3>WELCOME</h3>
          <p>We welcome you to the delicious taste of traditional Gujarati snacks. Hope to look forward in near future.</p>
        </div>
      </div>

      <div class="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
        <div class="feature-thumb">
          <div class="feature-icon">
            <span><i class="fa fa-cutlery"></i></span>
          </div>
          <h3>SNACKS</h3>
          <p>We are ready with the gujarati Farsan to give your tea coffee a good company and complementary taste</p>
        </div>
      </div>

    </div>
  </div>
</section>


<!--Menu section -->
<section id="menu" class="parallax-section ">
    <div class="container">
        <div class="row" style="margin-top: -20px;">

            <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
                <div class="wow fadeInUp section-title" data-wow-delay="0.3s">
                    <h2>Food Menu</h2>
                </div>
            </div>

               <div class="row">
                @foreach ($items as $item)
                <div class="col-sm-6">
                <div class="menu-item-card">
                <div class="item-image" style="background-image: url({{$item->imagePath}});"></div>
                <div class="item-content">
                    <div class="top-line">
                        <div class="item-name">
                            {{$item->name}}
                        </div>
                        <div class="item-dots">
                            <div class="dots"></div>
                        </div>
                        <div class="item-price">
                            &#x20B9; {{$item->price}}
                        </div>
                    </div>
                    <div class="item-description">
                       {{$item->description}}
                    </div>
                </div>
            </div>
                </div>
                 @endforeach
                </div>


        </div>

    </div>
    </div>
</section>


<!--Contact section -->
<section id="contact" class="parallax-section">
  <div class="overlay"></div>
    <div class="container">
        <div class="row">

            <div class="col-md-6">
                <div id="map">
                    <div class="wow fadeInUp section-title" data-wow-delay="0.3s">
                        <h2>Locate us!</h2>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117408.69044820829!2d72.53460386476948!3d23.132886583503023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b2662ca22af%3A0xac028bef38ae513e!2sAnsa!5e0!3m2!1sen!2sin!4v1495889178629" width="400" height="363" 
                            frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-md-6">
            <!--<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10"-->
            <div class="wow fadeInUp section-title" data-wow-delay="0.3s">
                <h2>Say hello</h2>
                <h4>we are always ready to serve you!</h4>
            </div>
                <div class="contact-form wow fadeInUp" data-wow-delay="0.7s">
                    <form id="contact-form" method="post" action="#">
                        <input name="name" type="text" class="form-control" placeholder="Your Name" required>
                        <input name="email" type="email" class="form-control" placeholder="Your Email" required>
                        <textarea name="message" class="form-control" placeholder="Message" rows="5" required></textarea>
                        <input type="submit" class="form-control submit" value="SEND MESSAGE">
                    </form>
                </div>
            </div>
            </div>

        </div>
    </div>
</section>

<!-- Footer section -->
<footer>
    <div class="container">
        <div class="row">

              <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="1.3s">
                <h3>About the owner</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                    tincidunt ut laoreet. Dolore magna aliquam erat volutpat ipsum.</p>
              </div>  
        
              <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="1.6s">
                <h3>Contact Detail</h3>
                <p>123 Delicious Street, San Francisco, CA 10110</p>
                <p>010-020-0780</p>
                <p>hello@company.com</p>
              </div> 
        
              <div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="1.9s">
                <h3>Opening Hours</h3>
                <strong>Monday - Friday</strong>
                <p>11:00 AM - 10:00 PM</p>
                <strong>Saturday - Sunday</strong>
                <p>10:00 AM - 09:00 PM</p>
              </div> 

        </div>
    </div>
</footer>

<!-- Copyright section -->
<section id="copyright">
  <div class="container">
    <div class="row">

      <div class="col-md-8 col-sm-8 col-xs-8">
        <p>Copyright © 2018<a class="designed-by" href="https://github.com/AnsaWebsite/Ansa" target="_blank"> Ansa</a></p>
      </div>  

      <div class="col-md-4 col-sm-4 text-right">
        <a href="#home" class="fa fa-angle-up smoothScroll gototop"></a>
      </div>

    </div>
  </div>
</section>

<!-- javscript js -->
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>

<script src="js/jquery.magnific-popup.min.js"></script>

<script src="js/jquery.sticky.js"></script>
<script src="js/jquery.backstretch.min.js"></script>

<script src="js/isotope.js"></script>
<script src="js/imagesloaded.min.js"></script>
<script src="js/nivo-lightbox.min.js"></script>

<script src="js/jquery.flexslider-min.js"></script>

<script src="js/jquery.parallax.js"></script>
<script src="js/smoothscroll.js"></script>
<script src="js/wow.min.js"></script>

<script src="js/custom.js"></script>
    </body>
</html>
