function orderHome(){
    // let idH = localStorage.getItem("idHome");
    let idH = 2;

    // let strStartDate = document.getElementById("monthStart").value;
    // let strEndDate = document.getElementById("monthEnd").value;
    let startDate = new Date(document.getElementById("monthStart").value);
    let endDate = new Date(document.getElementById("monthEnd").value);
    let oneDay = 86400000;

    console.log(startDate);
    console.log(endDate);
    if (endDate >= startDate) console.log("true");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homeTimes/searchByHome/" + idH,
        success: function (data) {
            for (let i = )
                for (let i = startDate.getTime(); i <= endDate.getTime(); i += oneDay) {
                    console.log(i);
                    let date1 = new Date(i);
                    // homeTimeService.save(new HomeTime(date1, order.getHome(), "1"));
                    console.log(date1);
                }
            for (let i = 0; i < data.length; i++) {

                console.log(new Date(data[i].date));
                // if (data[i].bedroom == bedroom) arr.push(data[i]);
            }
        }
})
}
