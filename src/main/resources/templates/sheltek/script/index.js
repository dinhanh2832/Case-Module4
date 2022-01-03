function loadHomeContent() {
    let html = `
       <section id="page-content" class="page-wrapper">
            <div class="login-section pt-115 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="registered-customers mb-50">
                                <h5 class="mb-50">LOGIN</h5>
                                <div action="#">
                                    <div class="login-account p-30 box-shadow">
                                        <p>If you have an account with us, Please log in.</p>
                                        <input type="text" name="name" placeholder="Email Address" id="username">
                                        <input type="password" name="password" placeholder="Password" id="password">
                                        <p><small><a href="#">Forgot our password?</a></small></p>
                                        <button class="submit-btn-1" onclick="login()">login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- new-customers -->
                        <div class="col-md-6 col-xs-12">
                            <div class="new-customers mb-50">
                                <form action="#">
                                    <h5 class="mb-50">REGISTER</h5>
                                    <div class="login-account p-30 box-shadow">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text"  placeholder="First Name">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text"  placeholder="last Name">
                                            </div>
                                            <div class="col-sm-6">
                                                <select class="custom-select-2">
                                                    <option value="defalt">country</option>
                                                    <option value="c-1">Australia</option>
                                                    <option value="c-2">Bangladesh</option>
                                                    <option value="c-3">Unitd States</option>
                                                    <option value="c-4">Unitd Kingdom</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <select class="custom-select-2">
                                                    <option value="defalt">State</option>
                                                    <option value="c-1">Melbourne</option>
                                                    <option value="c-2">Dhaka</option>
                                                    <option value="c-3">New York</option>
                                                    <option value="c-4">London</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <select class="custom-select-2">
                                                    <option value="defalt">Town/City</option>
                                                    <option value="c-1">Victoria</option>
                                                    <option value="c-2">Chittagong</option>
                                                    <option value="c-3">Boston</option>
                                                    <option value="c-4">Cambridge</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text"  placeholder="Phone here...">
                                            </div>
                                        </div>
                                        <input type="text"  placeholder="Company neme here...">
                                        <input type="text"  placeholder="Email address here...">
                                        <input type="password"  placeholder="Password">
                                        <input type="password"  placeholder="Confirm Password">
                                        <div class="checkbox">
                                            <label class="mr-10">
                                                <small>
                                                    <input type="checkbox" name="signup">Sign up for our newsletter!
                                                </small>
                                            </label>
                                            <label>
                                                <small>
                                                    <input type="checkbox" name="signup">Receive special offers from our partners!
                                                </small>
                                            </label>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6 col-xs-12">
                                                <button class="submit-btn-1 mt-20" type="submit" value="register">Register</button>
                                            </div>
                                            <div class="col-sm-6 col-xs-12">
                                                <button class="submit-btn-1 mt-20 f-right" type="reset">Clear</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subscribe-area bg-blue call-to-bg plr-140 ptb-50">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="section-title text-white">
                                <h3>SUBSCRIBE</h3>
                                <h2 class="h1">NEWSLETTER</h2>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-8 col-xs-12">
                            <div class="subscribe">
                                <form action="#">
                                    <input type="text" name="subscribe" placeholder="Enter yur email here...">
                                    <button type="submit" value="send">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   `;
    document.getElementById("login1").innerHTML = html;
    document.getElementById("div1").style.display = 'none';
    document.getElementById("div2").style.display = 'none';
    // login();
}
function login() {
    let user = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/login",
        data: JSON.stringify(user),
        success: function (data) {
            console.log(data)
            localStorage.setItem("token", data.accessToken)
            document.getElementById("div1").style.display = 'block';
            document.getElementById("div2").style.display = 'block';
            loadData();
        },
        error: function (error) {

        }
    });
}

function loadData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes",
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")},
        success: function (data) {
            console.log(data);
            $("div#login1").remove();
            // document.getElementById("login1").style.display = 'none';
            let html = `
              
                    <!-- SERVICES AREA START -->
                    <div class="services-area pb-60">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title-2 text-center">
                                        <h2>OUR SERVICES</h2>
                                        <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="service-carousel">
                                    <!-- service-item -->
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/1.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Sale Property</a></h5>
                                                <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- service-item -->
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/2.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Buy Property</a></h5>
                                                <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- service-item -->
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/3.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Rent Property</a></h5>
                                                <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- service-item -->
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/4.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Property Management</a></h5>
                                                <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- service-item -->
                                    <div class="col-md-3 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/4.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Sale Property</a></h5>
                                                <p>Property sale best theme for litdo eiusmod tempor dolor sit amet, conse tetur adiping eiusmo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SERVICES AREA END -->

                    <!-- BOOKING AREA START -->
                    <div class="booking-area bg-1 call-to-bg plr-140 pt-75">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3 col-sm-4 col-xs-12">
                                    <div class="section-title text-white">
                                        <h3>BOOK YOUR</h3>
                                        <h2 class="h1">HOME HERE</h2>
                                    </div>
                                </div>
                                <div class="col-md-9 col-sm-8 col-xs-12">
                                    <div class="booking-conternt clearfix">
                                        <div class="book-house text-white">
                                            <h2>BOOK YO\`UR APPARTMENT OR HOUSE </h2>
                                            <h2 class="h5">CALL US ON : +0123  456  789  </h2>
                                        </div>
                                        <div class="booking-imgae">
                                            <img src="images/others/booking.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- BOOKING AREA END -->

                    <!-- FEATURED FLAT AREA START -->
                    <div class="featured-flat-area pt-115 pb-80">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title-2 text-center">
                                        <h2>Featured PROPERTY</h2>
                                        <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                                    </div>
                                </div>
                            </div>
                            <div class="featured-flat">
                                <div class="row">
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <span class="for-sale">For Sale</span>
                                                <a href="properties-details.html"><img src="images/flat/1.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <a href="properties-details.html"><img src="images/flat/2.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <span class="for-sale rent">For rent</span>
                                                <a href="properties-details.html"><img src="images/flat/3.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <a href="properties-details.html"><img src="images/flat/4.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <span class="for-sale">For Sale</span>
                                                <a href="properties-details.html"><img src="images/flat/5.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <a href="properties-details.html"><img src="images/flat/6.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <span class="for-sale rent">For rent</span>
                                                <a href="properties-details.html"><img src="images/flat/7.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <a href="properties-details.html"><img src="images/flat/8.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- flat-item -->
                                    <div class="col-md-4 hidden-sm col-xs-12">
                                        <div class="flat-item">
                                            <div class="flat-item-image">
                                                <span class="for-sale">For Sale</span>
                                                <a href="properties-details.html"><img src="images/flat/9.jpg" alt=""></a>
                                                <div class="flat-link">
                                                    <a href="properties-details.html">More Details</a>
                                                </div>
                                                <ul class="flat-desc">
                                                    <li>
                                                        <img src="images/icons/4.png" alt="">
                                                        <span>450 sqft</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/5.png" alt="">
                                                        <span>5</span>
                                                    </li>
                                                    <li>
                                                        <img src="images/icons/6.png" alt="">
                                                        <span>3</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="flat-item-info">
                                                <div class="flat-title-price">
                                                    <h5><a href="properties-details.html">Masons de Villa </a></h5>
                                                    <span class="price">$52,350</span>
                                                </div>
                                                <p><img src="images/icons/location.png" alt="">568 E 1st Ave, Ney Jersey</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- FEATURED FLAT AREA END -->

                    <!-- FEATURES AREA START -->
                    <div class="features-area fix">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-7 col-md-offset-5">
                                    <div class="features-info bg-gray">
                                        <div class="section-title mb-30">
                                            <h3>HERE IS</h3>
                                            <h2 class="h1">AWESOME FEATUES</h2>
                                        </div>
                                        <div class="features-desc">
                                            <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do smod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi</p>
                                        </div>
                                        <div class="features-include">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Fully Furnished</h6>
                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Royal Touch Paint</h6>
                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Latest Interior Design</h6>
                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Non Stop Security</h6>
                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Living Inside a Nature</h6>
                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Luxurious Fittings</h6>
                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- FEATURES AREA END -->

                    <!-- OUR AGENTS AREA START -->
                    <div class="our-agents-area pt-115 pb-55">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title-2 text-center">
                                        <h2>OUR AGENTS</h2>
                                        <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                                    </div>
                                </div>
                            </div>
                            <div class="our-agents">
                                <div class="row">
                                    <div class="agents-carousel">
                                        <!-- single-agent -->
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/1.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Shah M Nawaz</a></h5>
                                                        <p>Real Estate Agent</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Shah M Nawaz</a></h5>
                                                        <p>Real Estate Agent</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com </li>
                                                    </ul>
                                                    <ul class="social-media">
                                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- single-agent -->
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/2.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Eva Sharlin</a></h5>
                                                        <p>Real Estate Broker</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Eva Sharlin</a></h5>
                                                        <p>Real Estate Broker</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com </li>
                                                    </ul>
                                                    <ul class="social-media">
                                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- single-agent -->
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/3.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                        <p>Real Estate Broker</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                        <p>Real Estate Broker</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com </li>
                                                    </ul>
                                                    <ul class="social-media">
                                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- single-agent -->
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/4.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Sarmin Tabassum</a></h5>
                                                        <p>Real Estate Agent</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Sarmin Tabassum</a></h5>
                                                        <p>Real Estate Agent</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com </li>
                                                    </ul>
                                                    <ul class="social-media">
                                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- single-agent -->
                                        <div class="col-md-3 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/3.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                        <p>Real Estate Broker</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Momen Bhuyan</a></h5>
                                                        <p>Real Estate Broker</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">eva@gmail.com </li>
                                                    </ul>
                                                    <ul class="social-media">
                                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- OUR AGENTS AREA END -->                 
                  <!-- BRAND AREA START -->
                <div class="brand-area pb-115">
                    <div class="container">
                        <div class="row">
                            <div class="brand-carousel">
                                <!-- brand-item -->
                                <div class="col-md-2 col-sm-6 col-xs-12">
                                    <div class="brand-item">
                                        <img src="images/brand/1.png" alt="">
                                    </div>
                                </div>
                                <!-- brand-item -->
                                <div class="col-md-2 col-sm-6 col-xs-12">
                                    <div class="brand-item">
                                        <img src="images/brand/2.png" alt="">
                                    </div>
                                </div>
                                <!-- brand-item -->
                                <div class="col-md-2 col-sm-6 col-xs-12">
                                    <div class="brand-item">
                                        <img src="images/brand/3.png" alt="">
                                    </div>
                                </div>
                                <!-- brand-item -->
                                <div class="col-md-2 col-sm-6 col-xs-12">
                                    <div class="brand-item">
                                        <img src="images/brand/4.png" alt="">
                                    </div>
                                </div>
                                <!-- brand-item -->
                                <div class="col-md-2 col-sm-6 col-xs-12">
                                    <div class="brand-item">
                                        <img src="images/brand/5.png" alt="">
                                    </div>
                                </div>
                                <!-- brand-item -->
                                <div class="col-md-2 col-sm-6 col-xs-12">
                                    <div class="brand-item">
                                        <img src="images/brand/1.png" alt="">
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BRAND AREA END -->

                <!-- SUBSCRIBE AREA START -->
                <div class="subscribe-area bg-blue call-to-bg plr-140 ptb-50">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3 col-sm-4 col-xs-12">
                                <div class="section-title text-white">
                                    <h3>SUBSCRIBE</h3>
                                    <h2 class="h1">NEWSLETTER</h2>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-8 col-xs-12">
                                <div class="subscribe">
                                    <form action="#">
                                        <input type="text" name="subscribe" placeholder="Enter yur email here...">
                                        <button type="submit" value="send">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- SUBSCRIBE AREA END -->
            `;
            document.getElementById("body1").innerHTML = html;
        }
    });
}