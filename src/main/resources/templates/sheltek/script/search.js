// Tìm kiếm nhà theo địa chỉ, phòng ngủ, phòng tắm
function searchHome() {
    let address = document.getElementById("location").value;
    let bedroom = document.getElementById("bedroom").value;
    let showerRoom = document.getElementById("showerRoom").value;
    // let date = document.getElementById("bedroom").value;
    // let price = document.getElementById("bedroom").value;
    // let searchObj = {
    //     address: address,
    //     bedroom: bedroom
    //     // showerRoom: showerRoom,
    //     // date: date,
    //     // price: price,
    // }
    console.log(address);
    console.log(bedroom);
    console.log(showerRoom);
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
            console.log(data);
        }
    })
}
