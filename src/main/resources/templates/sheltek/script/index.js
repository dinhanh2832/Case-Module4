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
    // document.getElementById("body1").style.display = 'none';
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
            // document.getElementById("login1").style.display = 'none';
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
            <section id="page-content" class="page-wrapper">

                    <!-- FIND HOME AREA START -->
                    <div class="find-home-area bg-blue call-to-bg plr-140 pt-60 pb-20">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3 col-xs-12">
                                    <div class="section-title text-white">
                                        <h3>FIND YOUR</h3>
                                        <h2 class="h1">HOME HERE</h2>
                                    </div>
                                </div>
                                <div class="col-md-9 col-xs-12">
                                    <div class="find-homes">
                                        <div class="row">
                                            <div class="col-sm-3 col-xs-12">
                                                <div class="find-home-item custom-select">
                                                    <select class="selectpicker" title="Location" data-hide-disabled="true" data-live-search="true">
                                                        <optgroup disabled="disabled" label="disabled">
                                                            <option>Hidden</option>
                                                        </optgroup>
                                                        <optgroup label="Australia">
                                                            <option>Sydney</option>
                                                            <option>Melbourne</option>
                                                            <option>Cairns</option>
                                                        </optgroup>
                                                        <optgroup label="USA">
                                                            <option>South Carolina</option>
                                                            <option>Florida</option>
                                                            <option>Rhode Island</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-xs-12">
                                                <div class="find-home-item custom-select">
                                                    <select class="selectpicker" title="Sub - Location" data-hide-disabled="true" data-live-search="true">
                                                        <optgroup disabled="disabled" label="disabled">
                                                            <option>Hidden</option>
                                                        </optgroup>
                                                        <optgroup label="Australia">
                                                            <option>southeastern coast</option>
                                                            <option>southeastern tip</option>
                                                            <option>northwest corner</option>
                                                        </optgroup>
                                                        <optgroup label="USA">
                                                            <option>Charleston</option>
                                                            <option>St. Petersburg</option>
                                                            <option>Newport</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-xs-12">
                                                <div class="find-home-item">
                                                    <input type="text" name="min-area" placeholder="Min area (sqft)">
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-xs-12">
                                                <div class="find-home-item">
                                                    <input type="text" name="max-area" placeholder="Max area (sqft)">
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-xs-12">
                                                <div class="find-home-item  custom-select">
                                                    <select class="selectpicker" title="No. of Beadrooms" data-hide-disabled="true">
                                                        <optgroup  label="1">
                                                            <option label="1">1 Beadrooms</option>
                                                            <option>2 Beadrooms</option>
                                                            <option>3 Beadrooms</option>
                                                            <option>4 Beadrooms</option>
                                                            <option>5 Beadrooms</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-xs-12">
                                                <div class="find-home-item custom-select">
                                                    <select class="selectpicker" title="No. of Bathrooms" data-hide-disabled="true">
                                                        <optgroup label="2">
                                                            <option>1 Bathrooms</option>
                                                            <option>2 Bathrooms</option>
                                                            <option>3 Bathrooms</option>
                                                            <option>4 Bathrooms</option>
                                                            <option>5 Bathrooms</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-xs-12">
                                                <div class="row">
                                                    <div class="col-sm-7 col-xs-12">
                                                        <div class="find-home-item">
                                                            <!-- shop-filter -->
                                                            <div class="shop-filter">
                                                                <div class="price_filter">
                                                                    <div class="price_slider_amount">
                                                                        <input type="submit"  value="You range :"/>
                                                                        <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                                                    </div>
                                                                    <div id="slider-range"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-5 col-xs-12">
                                                        <div class="find-home-item mb-0-xs">
                                                            <a class="button-1 btn-block btn-hover-1" href="#">SEARCH</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- FIND HOME AREA END -->

                    <!-- ABOUT SHELTEK AREA START -->
                    <div class="about-sheltek-area ptb-115">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-xs-12">
                                    <div class="section-title mb-30">
                                        <h3>SOME WORD </h3>
                                        <h2>ABOUT SHELTEK</h2>
                                    </div>
                                    <div class="about-sheltek-info">
                                        <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo.</p>
                                        <p>Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur </p>
                                        <p>Lorem is a dummy text do eiusmod tempor dolor sit amet, onsectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliqua Ut enim onsectetur </p>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-xs-12">
                                    <div class="about-image">
                                        <a href="about.html"><img src="images/about/1.jpg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ABOUT SHELTEK AREA END -->

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
                                        <div class="col-md-12">
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
                                        <div class="col-md-12">
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
                                        <div class="col-md-12">
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
                                        <div class="col-md-12">
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
                                        <div class="col-md-12">
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

                    <!-- TESTIMONIAL AREA START -->
                    <div class="testimonial-area pb-115">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="testimonial">
                                        <div class="row">
                                            <div class="col-md-8 col-sm-9">
                                                <div class="section-title mb-30">
                                                    <h3>SOME OF OUR</h3>
                                                    <h2 class="h1">HAPPY CLIENTS</h2>
                                                </div>
                                                <div class="testimonial-carousel dots-right-btm">
                                                    <!-- testimonial-item -->
                                                    <div class="testimonial-item">
                                                        <div class="testimonial-brief">
                                                            <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo. liquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo uis nostrud exercitation</p>
                                                        </div>
                                                        <h6>Zasica Luci, <span>CEO</span></h6>
                                                    </div>
                                                    <!-- testimonial-item -->
                                                    <div class="testimonial-item">
                                                        <div class="testimonial-brief">
                                                            <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo. liquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo uis nostrud exercitation</p>
                                                        </div>
                                                        <h6>Zasica Luci, <span>CEO</span></h6>
                                                    </div>
                                                    <!-- testimonial-item -->
                                                    <div class="testimonial-item">
                                                        <div class="testimonial-brief">
                                                            <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo. liquatd minim veniam, quis nostrud exercitation oris nisi ut aliquip ex ea commodo equat. Duis aute irure dolo uis nostrud exercitation</p>
                                                        </div>
                                                        <h6>Zasica Luci, <span>CEO</span></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-3">
                                                <div class="testimonial-image">
                                                    <img src="images/others/testimonial.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- TESTIMONIAL AREA END -->

                    <!-- BLOG AREA START -->
                    <div class="blog-area pb-60">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title-2 text-center">
                                        <h2>FROM BLOG</h2>
                                        <p>Sheltek is the best theme for  elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="blog-carousel">
                                    <!-- blog-item -->
                                    <div class="col-md-12">
                                        <article class="blog-item bg-gray">
                                            <div class="blog-image">
                                                <a href="single-blog.html"><img src="images/blog/1.jpg" alt=""></a>
                                            </div>
                                            <div class="blog-info">
                                                <div class="post-title-time">
                                                    <h5><a href="single-blog.html">Maridland de Villa</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                                <a class="read-more" href="single-blog.html">Read more</a>
                                            </div>
                                        </article>
                                    </div>
                                    <!-- blog-item -->
                                    <div class="col-md-12">
                                        <article class="blog-item bg-gray">
                                            <div class="blog-image">
                                                <a href="single-blog.html"><img src="images/blog/2.jpg" alt=""></a>
                                            </div>
                                            <div class="blog-info">
                                                <div class="post-title-time">
                                                    <h5><a href="single-blog.html">Latest Design House</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                                <a class="read-more" href="single-blog.html">Read more</a>
                                            </div>
                                        </article>
                                    </div>
                                    <!-- blog-item -->
                                    <div class="col-md-12">
                                        <article class="blog-item bg-gray">
                                            <div class="blog-image">
                                                <a href="single-blog.html"><img src="images/blog/3.jpg" alt=""></a>
                                            </div>
                                            <div class="blog-info">
                                                <div class="post-title-time">
                                                    <h5><a href="single-blog.html">Duplex Villa House</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                                <a class="read-more" href="single-blog.html">Read more</a>
                                            </div>
                                        </article>
                                    </div>
                                    <!-- blog-item -->
                                    <div class="col-md-12">
                                        <article class="blog-item bg-gray">
                                            <div class="blog-image">
                                                <a href="single-blog.html"><img src="images/blog/2.jpg" alt=""></a>
                                            </div>
                                            <div class="blog-info">
                                                <div class="post-title-time">
                                                    <h5><a href="single-blog.html">Latest Design House</a></h5>
                                                    <p>July 30, 2016 / 10 am</p>
                                                </div>
                                                <p>Lorem must explain to you how all this mistaolt denouncing pleasure and praising pain wasnad I will give you a complete pain was praising</p>
                                                <a class="read-more" href="single-blog.html">Read more</a>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- BLOG AREA END -->

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
                                    <div class="col-md-1">
                                        <div class="brand-item">
                                            <img src="images/brand/1.png" alt="">
                                        </div>
                                    </div>
                                    <!-- brand-item -->
                                    <div class="col-md-1">
                                        <div class="brand-item">
                                            <img src="images/brand/4.png" alt="">
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
                </section>
            `;
            document.getElementById("body1").innerHTML = html;
        }
    });
}