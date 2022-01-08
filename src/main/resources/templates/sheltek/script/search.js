// Tìm kiếm nhà theo địa chỉ, phòng ngủ, phòng tắm, mức giá, diện tích
function searchHome() {
    let address = $("#location").val();
    let bedroom = $("#bedroom").val();
    let showerRoom = $("#showerRoom").val();
    let minArea = $("#min-area").val();
    let maxArea = $("#max-area").val();
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
                    let isCorrectAddress = data[i].address.toLowerCase().indexOf(address.toLowerCase()) != -1;
                    if (isCorrectAddress) arr.push(data[i]);
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
            if ((minArea != "") && (maxArea != "")) {
                for (let i = 0; i < data.length; i++) {
                    if ((minArea <= data[i].area) && (data[i].area <= maxArea)) arr.push(data[i]);
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
