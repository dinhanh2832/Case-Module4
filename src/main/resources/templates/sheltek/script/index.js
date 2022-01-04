function loadHomeContent() {
    if(localStorage.getItem("user") == null ) {
        document.getElementById("login1").innerHTML = `
       <section id="page-content" class="page-wrapper">
            <div class="login-section pt-115 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="registered-customers mb-50">
                            <div id="messenger"></div>
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
        document.getElementById("div1").style.display = 'none';
        document.getElementById("div2").style.display = 'none';
        document.getElementById("body1").style.display = 'none';
        document.getElementById("slideLogout").style.display = 'none';
    } else if (localStorage.getItem("user") != null){
        if(localStorage.getItem("user") === "ROLE_USER"){
            document.getElementById("div1").style.display = 'block';
            document.getElementById("div2").style.display = 'block';
            document.getElementById("slideLogin").style.display = 'none';
            document.getElementById("slideLogout").style.display = 'block';
            document.getElementById("body1").style.display = 'block';
            loadData();
        } else if (localStorage.getItem("user") === "ROLE_ADMIN") {
            localStorage.setItem("token", data.accessToken)
            document.getElementById("div1").style.display = 'block';
            document.getElementById("div2").style.display = 'block';
        }
    }

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
            console.log(data.roles[0])
            if(data.roles[0].authority === "ROLE_USER"){
                localStorage.setItem("token", data.accessToken)
                localStorage.setItem("user", data.roles[0].authority)
                document.getElementById("div1").style.display = 'block';
                document.getElementById("div2").style.display = 'block';
                document.getElementById("slideLogout").style.display = 'block';
                document.getElementById("body1").style.display = 'block';
                document.getElementById("slideLogin").style.display = 'none';
                loadData();
                location.reload();
            } else if (data.roles[0].authority === "ROLE_ADMIN") {
                localStorage.setItem("token", data.accessToken)
                localStorage.setItem("user", data.roles[0].authority)
                document.getElementById("div1").style.display = 'block';
                document.getElementById("div2").style.display = 'block';
            }
        },
        error: function (error) {
            loadHomeContent();
            document.getElementById('messenger').innerHTML = `
                <p>Sai tài khoản hoặc mật khẩu!</p>
                `;
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
            let html = `
                    <!-- SERVICES AREA START -->
                    <section class="services-area pb-60">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="section-title-2 text-center">
                                        <h2>DỊCH VỤ CỦA CHÚNG TÔI</h2>
                                        <p>Tìm kiếm sự lựa chọn của bạn !</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="service-carousel">
                                    <!-- service-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/2.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Thuê nhà</a></h5>
                                                <p>Nơi tập hợp những địa điểm thuê nhà lý tưởng bậc nhất Việt Nam</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- service-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/3.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Cho thuê nhà</a></h5>
                                                <p>Cộng đồng người dùng đông đảo. Đặt uy tín lên hàng đầu</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- service-item -->
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <div class="service-item">
                                            <div class="service-item-image">
                                                <a href="service-details.html"><img src="images/service/4.jpg" alt=""></a>
                                            </div>
                                            <div class="service-item-info">
                                                <h5><a href="service-details.html">Quản lý</a></h5>
                                                <p>Kiểm soát tài sản của bạn một cách hợp lý và thuận tiện</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- SERVICES AREA END -->
                    <!-- BOOKING AREA START -->
                    <div class="booking-area bg-1 call-to-bg plr-140 pt-75">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3 col-sm-4 col-xs-12">
                                    <div class="section-title text-white">
                                        <h3>Đặt chỗ của bạn</h3>
                                        <h2 class="h1">Tại trang chủ</h2>
                                    </div>
                                </div>
                                <div class="col-md-9 col-sm-8 col-xs-12">
                                    <div class="booking-conternt clearfix">
                                        <div class="book-house text-white">
                                            <h2>ĐẶT CĂN HỘ HOẶC NHÀ CỦA CHÚNG TÔI </h2>
                                            <h2 class="h5">Gọi cho chúng tôi : +0123  456  789  </h2>
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
                                        <h2>Một số Địa điểm nổi trội</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="featured-flat">
                                <div class="row">`;

            for (let i =0; i < data.length;i++){
                html += `<!-- flat-item -->
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="flat-item">
                        <div class="flat-item-image">
                            <span class="for-sale">Cho thuê</span>
                            <a href="properties-details.html"><img src="images/${data[i].imageList[0].links}" alt="" class="img-fluid"></a>
                            <div class="flat-link">
                                <a href="properties-details.html">Xem chi tiết</a>
                            </div>
                            <ul class="flat-desc">
                                <li>
                                    <img src="images/icons/4.png" alt="">
                                        <span>${data[i].description}</span>
                                </li>
                                <li>
                                    <img src="images/icons/5.png" alt="">
                                        <span>${data[i].bedroom}</span>
                                </li>
                                <li>
                                    <img src="images/icons/6.png" alt="">
                                        <span>${data[i].showerRoom}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="flat-item-info">
                            <div class="flat-title-price">
                                <h5><a href="properties-details.html">${data[i].name}</a></h5>
                                <span class="price">${data[i].price}Đ</span>
                            </div>
                            <p><img src="images/icons/location.png" alt="">${data[i].address}</p>
                        </div>
                    </div>
                </div>`;
            }
            html +=`            </div>
                            </div>
                        </div>
                    </div>`;
            html += `<!-- FEATURES AREA START -->
                    <div class="features-area fix">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-7 col-md-offset-5">
                                    <div class="features-info bg-gray">
                                        <div class="section-title mb-30">
                                            <h3>Dưới đây</h3>
                                            <h2 class="h1">LÀ MỘT SỐ TIỆN ÍCH</h2>
                                        </div>
                                        <div class="features-desc">
                                            <p><span data-placement="top" data-toggle="tooltip" data-original-title="The name you can trust" class="tooltip-content">Sheltek</span> là một thế giới lý tưởng cho các bạn muốn tìm một ngôi nhà vừa ý. Một mơi lưu trân khi đi du lịch để tận hưởng cuộc sống, hay 1 ngôi nhà đầy đủ tiện nghi</p>
                                        </div>
                                        <div class="features-include">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Đầy đủ nội thất</h6>
<!--                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>-->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Sơn Touch Paint</h6>
<!--                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>-->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Thiết kế nội thất mới nhất</h6>
<!--                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>-->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Bảo mật không dừng</h6>
<!--                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>-->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Sống bên trong thiên nhiên</h6>
<!--                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>-->
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-md-6 col-sm-4">
                                                    <div class="features-include-list">
                                                        <h6><img src="images/icons/7.png" alt="">Phụ kiện sang trọng</h6>
<!--                                                        <p>Lorem is a dummy text do eiud tempor dolor sit amet dum</p>-->
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
                                        <h2>Các đại lý của chúng tôi</h2>
                                        <p>Sheltek có một hệ thống đại lý phong phú và phủ sóng khắp cả nước</p>
                                    </div>
                                </div>
                            </div>
                            <div class="our-agents">
                                <div class="row">
                                    <div class="agents-carousel">
                                        <!-- single-agent -->
                                        <div class="col-md-4 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/2.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Nguyễn Quốc Khánh</a></h5>
                                                        <p>Đà Nẵng</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Quốc Khánh</a></h5>
                                                        <p>Đại lý</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">khanh@gmail.com </li>
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
                                        <div class="col-md-4 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/3.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">Nguyễn Đình Ánh</a></h5>
                                                        <p>Đại lý</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Đình Ánh</a></h5>
                                                        <p>Đại lý</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">anh@gmail.com </li>
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
                                        <div class="col-md-4 col-sm-6 col-xs-12">
                                            <div class="single-agent">
                                                <div class="agent-image">
                                                    <img src="images/agents/4.jpg" alt="">
                                                </div>
                                                <div class="agent-info">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Lê Vũ Duy</a></h5>
                                                        <p>Đại lý</p>
                                                    </div>
                                                </div>
                                                <div class="agent-info-hover">
                                                    <div class="agent-name">
                                                        <h5><a href="agent-details.html">Vũ Duy</a></h5>
                                                        <p>Đại lý</p>
                                                    </div>
                                                    <ul class="agent-address">
                                                        <li><img src="images/icons/phone-2.png" alt="">+1245  785  659 </li>
                                                        <li><img src="images/icons/mail-close.png" alt="">duy@gmail.com </li>
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
                    <!-- OUR AGENTS AREA END -->`;
            document.getElementById("service").innerHTML = html;
        }
    });
}