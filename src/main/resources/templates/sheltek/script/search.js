// Tìm kiếm nhà theo địa chỉ, phòng ngủ, phòng tắm, mức giá
function searchHome() {
    let address = document.getElementById("location").value;
    let bedroom = document.getElementById("bedroom").value;
    let showerRoom = document.getElementById("showerRoom").value;
    let minPrice = $("#slider-range").slider("values", 0);
    let maxPrice = $("#slider-range").slider("values", 1);

    console.log(address);
    console.log(bedroom);
    console.log(showerRoom);
    console.log(minPrice);
    console.log(maxPrice);

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes",
        success: function (data) {
            console.log(data);
            let arr = [];
            if (address != "") {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].address == address) arr.push(data[i]);
                }
            } else {
                arr = data;
            }
            data = arr;
            arr = [];
            if (bedroom != "") {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].bedroom == bedroom) arr.push(data[i]);
                }
            } else {
                arr = data;
            }
            data = arr;
            arr = [];
            if (showerRoom != "") {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].showerRoom == showerRoom) arr.push(data[i]);
                }
            } else {
                arr = data;
            }
            data = arr;
            arr = [];
            if ((minPrice != "") && (maxPrice != "")) {
                for (let i = 0; i < data.length; i++) {
                    if ((minPrice <= data[i].price) && (data[i].price <= maxPrice)) arr.push(data[i]);
                }
            } else {
                arr = data;
            }
            data = arr;
            arr = [];
            console.log(data);
        }
    })
}
