function orderHome() {
    // let idH = localStorage.getItem("idHome");
    let idH = 2;

    let strStartDate = document.getElementById("monthStart").value;
    let strEndDate = document.getElementById("monthEnd").value;
    let startDate = new Date(document.getElementById("monthStart").value);
    let endDate = new Date(document.getElementById("monthEnd").value);
    let oneDay = 86400000;

    // console.log(startDate);
    // console.log(endDate);
    if (endDate >= startDate) console.log("true");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homeTimes/searchByHome/" + idH,
        success: function (data) {
            let flag;
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
        }
    })
}
