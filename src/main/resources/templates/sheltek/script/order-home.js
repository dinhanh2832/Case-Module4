function orderHome() {
    // let idU = localStorage.getItem("idUser");
    // let idH = localStorage.getItem("idHome");
    let idH = 2; // test

    let strStartDate = document.getElementById("monthStart").value; // kiểm tra giá trị nhập vào có rỗng hay không
    let strEndDate = document.getElementById("monthEnd").value;
    let startDate = new Date(strStartDate);
    let endDate = new Date(strEndDate);
    let oneDay = 86400000;

    if (endDate >= startDate) console.log("true");
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
                if (!flag) alert("Nhà đang được cho thuê");
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

        }
    })

}
