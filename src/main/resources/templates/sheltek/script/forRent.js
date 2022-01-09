function houseForRent() {
    localStorage.setItem("houseForRent","houseForRent")
    let html = `
    <div class="new-customers mb-50">
                                <div >                                  
                                    <div class="login-account p-30 box-shadow">
                                        <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-6">
                                        <h5 class="mb-50 text-center">CHO THUÊ</h5>
                                         <div class="col-sm-6">
                                                <input type="text"  placeholder="Tên nhà" id="username">
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text"  placeholder="Địa chỉ" id="address">
                                            </div>
                                            <div class="col-sm-6" id="category">                                                                                                                                                                                                   
                                            </div>                                    
                                            <div class="col-sm-6">
                                            <input type="text" placeholder="Số phòng ngủ" id="bedroom">                                                                                                                        
                                            </div>                                       
                                            <div class="col-sm-6">
                                            <input type="text" placeholder="Số phòng tắm" id="showerRoom"> 
                                            </div>                                       
                                            <div class="col-sm-6">
                                                <input type="text"  placeholder="Giá cho thuê" id="price">
                                            </div>
                                            <input type="text"  placeholder="Mô tả" id="description"> 
                                            <form enctype="multipart/form-data" id="form">
                                            <div class="col-sm-12">
                                            <p>Ảnh đại diện</p>
                                            <input type="file" name="files"/>
                                            </div>
                                            <div class="col-sm-12">
                                            <p>Phòng ngủ</p>
                                            <input type="file" name="files"/>
                                            </div> 
                                            <div class="col-sm-12">
                                            <p>Phòng khách</p>
                                            <input type="file" name="files"/>
                                            </div>                                           
                                            <div class="col-sm-12">
                                            <p>Phòng bếp</p>
                                            <input type="file" name="files"/>
                                            </div>
                                            <div class="col-sm-12">
                                            <p>Phòng tắm</p>
                                            <input type="file" name="files"/>
                                            </div>                                            
                                            <button class="submit-btn-1 mt-20" type="submit" onclick="createHome()" >Đăng Cho Thuê</button>                                                                                 
                                            <button class="submit-btn-1 mt-20" type="submit"  >Quay Lại</button>                                                                                 
                                            </form>                                        
                                         </div>
                                      <div class="col-sm-3"></div>                                  
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
    showCategory();
    document.getElementById("body2").innerHTML = html;
}
function createHome(){
    let form = $('#form')[0];
    let data = new FormData(form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8080/api/homes/uploadFile",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 1000000,
        success:function (data){
            console.log(data)
            let statusHome = 1;
            let numberOfTurns = 0;
            let userId = localStorage.getItem("idUser");
            let nameHouse = document.getElementById("username").value;
            let address = document.getElementById("address").value;
            let category = document.getElementById("cate").value;
            let bedroom = document.getElementById("bedroom").value;
            let showerRoom = document.getElementById("showerRoom").value;
            let description = document.getElementById("description").value;
            let price = document.getElementById("price").value;
            let home = {
                name: nameHouse,
                address: address,
                category:{
                    id: category
                },
                bedroom: bedroom,
                showerRoom: showerRoom,
                description: description,
                price: price,
                statusHome: {
                    id: statusHome
                },
                user: {
                    id: userId
                },
                numberOfTurns: numberOfTurns,
            }
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                type: "POST",
                url: "http://localhost:8080/api/homes/createHome",
                data: JSON.stringify(home),
                success: function () {
                    backHome();
                }
            })
        }
    })
}
function showCategory(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/findAllCategory",
        enctype: 'multipart/form-data',
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")},
        success: function (data) {
            let html = ``;
            html +=`<select class="custom-select-2">`;
            html += `<option value="0">Loại nhà</option>`;
            for(let i = 0;i< data.length;i++){
                html +=`<option value="${data[i].id}" id="cate">${data[i].name}</option>`;
            }
            html +=`</select>`;
            document.getElementById("category").innerHTML = html;
        }
    })
}

