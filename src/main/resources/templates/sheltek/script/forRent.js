function houseForRent() {
    let html = `
    <div class="new-customers mb-50">
                                <div >
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
                                            <div class="col-sm-5 col-xs-12"></div>
                                           
                                            <div class="col-sm-2 col-xs-12">
                                                <button class="submit-btn-1 mt-20" type="submit" value="register">Đăng Cho Thuê</button>
                                            </div>           
                                            <div class="col-sm-5 col-xs-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    html +=`<!-- OUR AGENTS AREA START -->
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
                    <!-- OUR AGENTS AREA END -->\`;
<!-- BRAND AREA START -->
            <div class="brand-area pb-115">
                <div class="container">
                    <div class="row">
                        <div class="brand-carousel">
                            <!-- brand-item -->
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="brand-item">
                                    <img src="images/brand/1.png" alt="">
                                </div>
                            </div>
                            <!-- brand-item -->
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="brand-item">
                                    <img src="images/brand/2.png" alt="">
                                </div>
                            </div>
                            <!-- brand-item -->
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="brand-item">
                                    <img src="images/brand/3.png" alt="">
                                </div>
                            </div>
                            <!-- brand-item -->
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="brand-item">
                                    <img src="images/brand/4.png" alt="">
                                </div>
                            </div>
                            <!-- brand-item -->
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="brand-item">
                                    <img src="images/brand/5.png" alt="">
                                </div>
                            </div>
                            <!-- brand-item -->
                            <div class="col-md-2 col-sm-4 col-xs-12">
                                <div class="brand-item">
                                    <img src="images/brand/1.png" alt="">
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <!-- BRAND AREA END -->`
    document.getElementById("body2").innerHTML = html;
}

