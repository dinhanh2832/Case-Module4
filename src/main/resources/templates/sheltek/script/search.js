function searchHome() {
    // let address = $("location").val();
    // let content = $("#content").val();
    // let status = $("#status").val();
    let address = document.getElementById("location").value;
    let bedroom = document.getElementById("bedroom").value;
    // let showerRoom = document.getElementById("bedroom").value;
    // let date = document.getElementById("bedroom").value;
    // let price = document.getElementById("bedroom").value;
    let searchObj = {
        address: address,
        bedroom: bedroom
        // showerRoom: showerRoom,
        // date: date,
        // price: price,
    }
    console.log(searchObj);
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/homes/search/address",
        data: JSON.stringify(searchObj),
        success: function (data) {
            //truyền vào hàm gì đó ví dụ loadData() ở HTML
            console.log(data);
        }
    })
}
