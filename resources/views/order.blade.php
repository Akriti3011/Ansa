


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
      <div class="navbar navbar-default navbar-static-top" role="navigation">
  <div class="container">

    <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
        <span class="icon icon-bar"></span>
      </button>
      <a href="#" class="navbar-brand" style="font-family: 'Handlee', cursive;
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
      <section id="order">
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h3>OUR MENU</h3>
          <hr>
        <div class="row">
          @foreach ($items as $item)
                <div class="col-sm-12">
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
                    <div class="col-sm-10 item-description">
                        {{$item->description}}
                    </div>
                    <div class="col-sm-2">
                       <button class="btn btn-sm btn-primary" style="margin-top:5px; text-align: right;">ADD</button>
                    </div>
                </div>
            </div>
                </div>
                 @endforeach
               </div>
             </div>
      <div class="col-sm-4">
        <div class="myOrder">
          <h3>MY ORDER</h3>
          <hr>
          <div class="row">
            <div class="cart">
              
              <div class=" text-left">
              <div class="col-sm-2">
                 <button class="btn btn-xs btn-danger" style="margin-top:5px;"><i class="glyphicon glyphicon-trash"></i></button>
              </div>
              <div class="col-sm-7">
                <h5>1 &ensp; &times; &ensp; sbcashbcs</h5>
              </div>
              <div class="col-sm-3">
                <h5>&#x20B9; 850 </h5>
              </div>
              </div>
               
              
            </div>
            <div class="total">
              <hr style="margin: 0 -10px;">
              <h4 style="letter-spacing:0; font-size:17px; text-transform: capitalize; margin-top: 20px;">Order Total &ensp;&ensp;&ensp;&ensp; &ensp; &ensp;&ensp; &#x20B9; 512</h4>
            </div>
            <form action="" method="Post">
              
              <a href="#myModal" data-toggle="modal"><button class="btn btn-success" style="margin: 20px 40px; padding: 7px 40px;">
                Continue
            </button></a>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

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

<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          <button id="close" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 id="myModalLabel"> Please let us know!!</h3>
        </div>
      
         <div class="col-md-12">
               <input type="text" class="form-control" placeholder="Name" name="name" required>
            </div>
            <div class="col-md-12">
               <input type="email" class="form-control" placeholder="Email" name="email" required>
            </div>
            <div class="col-md-12">
               <input type="text" class="form-control" placeholder="Contact" name="contact" required>
            </div>
            <div class="col-md-12">
               <input type="text" class="form-control" placeholder="Pincode" name="pincode" required>
            </div>
            <div class="col-md-12">
               <input type="text" class="form-control" placeholder="Address" name="address" required>
            </div>

        <div class="modal-footer">
          
         
            
            <button class="btn modalbtn" type="submit">Order Now</button>
          
        </div>
      </div>
    </div>
  </div>

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
