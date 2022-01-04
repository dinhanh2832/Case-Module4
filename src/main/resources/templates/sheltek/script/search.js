function searchHome() {
    // let address = $("location").val();
    // let content = $("#content").val();
    // let status = $("#status").val();
    let address = document.getElementById("location").value;
    console.log(address);
    $.ajax({
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        type: "GET",
        url: "http://localhost:8080/api/homes/search/address?q=" + address,
        //     data: JSON.stringify(post),
        success: function (data) {
            //truyền vào hàm gì đó ví dụ loadData() ở HTML
            console.log(data);
        }
    })
}
