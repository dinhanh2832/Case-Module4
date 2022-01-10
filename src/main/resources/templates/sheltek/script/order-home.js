function orderHome() {
    let idU = localStorage.getItem("idUser");
    let idH = localStorage.getItem("idHome");

    let strStartDate = document.getElementById("monthStart").value; // kiểm tra giá trị nhập vào có rỗng hay không
    let strEndDate = document.getElementById("monthEnd").value;
    let startDate = new Date(strStartDate);
    let endDate = new Date(strEndDate);
    let oneDay = 86400000;
    let now = new Date();
    console.log(now);
    // Check ngày tháng nhập vào
    if ((endDate < now) || (startDate < now)) alert("Bạn đã chọn ngày nhỏ hơn ngày hiện tại, Xin mời nhập lại !")
    else if (startDate >= endDate) alert("Bạn đã chọn ngày nhận phòng nhỏ hơn ngày trả phòng, Xin mời nhập lại!");
    else if (endDate >= startDate) {
        console.log("true");
        // Kiểm tra nhà đã được cho thuê trong 1 khoảng thời gian
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/homeTimes/searchByHome/" + idH,
            success: function (data) {
                console.log(data)
                if (data.length != 0) {
                    let flag = true;
                    for (let i = startDate.getTime(); i <= endDate.getTime(); i += oneDay) {
                        let orderDate = new Date(i);
                        console.log(orderDate);
                        for (let j = 0; j < data.length; j++) {
                            let bookingDate = (new Date(data[j].date));
                            console.log(bookingDate)
                            if ((orderDate.getDay() === bookingDate.getDay()) && (orderDate.getMonth() === bookingDate.getMonth()) && (orderDate.getFullYear() === bookingDate.getFullYear())) {
                                flag = false;
                                break;
                            }
                        }
                    }

                    if (!flag) {
                        let orderStartDate = new Date(data[0].date);
                        let orderEndDate = new Date(data[data.length - 1].date);
                        console.log(orderStartDate);
                        console.log(orderEndDate);
                        alert("Nhà đang được cho thuê từ ngày " + orderStartDate.getDay() + " / " +
                            orderStartDate.getMonth() + " / " +
                            orderStartDate.getFullYear() + " đến ngày " +
                            orderEndDate.getDay() + " / " +
                            orderEndDate.getMonth() + " / " +
                            orderEndDate.getFullYear());
                    } else {
                        alert("Thuê thoải mái đeee");
                        // Tạo order
                        let order = {
                            startDate: startDate,
                            endDate: endDate,
                            user: {
                                id: idU
                            },
                            home: {
                                id: idH
                            }
                        }
                        console.log(order);
                        $.ajax({
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            type: 'POST',
                            url: "http://localhost:8080/api/orders/",
                            data: JSON.stringify(order),
                            success: function (data) {
                            },
                            error: function (error) {
                                console.log(error)
                            }
                        })
                    }
                } else if (data.length == 0) {
                    alert("Sẵn sàng cho bạn thuê !!!")
                    // Tạo Order
                    let order = {
                        startDate: startDate,
                        endDate: endDate,
                        user: {
                            id: idU
                        },
                        home: {
                            id: idH
                        }
                    }
                    console.log(order);
                    $.ajax({
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        type: 'POST',
                        url: "http://localhost:8080/api/orders/",
                        data: JSON.stringify(order),
                        success: function (data) {
                        },
                        error: function (error) {
                            console.log(error)
                        }
                    })
                }
            }
        })
    }
}
