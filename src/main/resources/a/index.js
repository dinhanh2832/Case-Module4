function getAllHome() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/",
        success: function (data) {
            console.log(data)
            displayHome(data)
        }
    })
}

function displayHome(data) {
    let res = "<h2>List home</h2>" + "<table border='1px' width='100%'><tr>"
        + "<th>name</th><th>address</th><th>Status</th>"

    for (let i = 0; i < data.length; i++) {
        res += "<tr><td>" + data[i].name + "</td>" +
            "<td>" + data[i].address + "</td>" +
            "<td>" + data[i].bedroom + "</td>" +
            "<td>" + data[i].showerRoom + "</td>" +
            "<td>" + data[i].description + "</td>" +
            "<td>" + data[i].price + "</td>" +
            "<td>" + data[i].category.name + "</td>" +
            "<td>" + data[i].statusHome.name + "</td>" +
            "<td align=\"center\"><button onclick='getOne(" + data[i].id + ")'>Thông tin nhà</button></td>" +
            "<td align=\"center\"><button onclick='change(" + data[i].id + ")'>Thuê</button></td>" +
            "<td align=\"center\"><button onclick='change2(" + data[i].id + ")'>Hủy</button></td>"
    }
    document.getElementById("div1").innerHTML = res;
}

function change(id) {
    if (confirm("Really want??")) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/homes/" + id,
            success: function (data) {
                console.log(data)
                $.ajax({
                    type: "DELETE",
                    url: "http://localhost:8080/api/homes/change2/" + id,
                    success: function (data1) {
                        console.log(data1)
                        getAllHome(data);
                        findOne(data1)
                    },
                    error: function (error) {
                        console.log(error)
                        alert("ops!! Something wrong!")
                    }
                })
            }
        })
    }
}

function change2(id) {
    if (confirm("Really want??")) {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/homes/" + id,
            success: function (data) {
                console.log(data)
                $.ajax({
                    type: "DELETE",
                    url: "http://localhost:8080/api/homes/change1/" + id,
                    success: function (data1) {
                        console.log(data1)
                        getAllHome(data);
                        findOne(data1)
                    },
                    error: function (error) {
                        console.log(error)
                        alert("ops!! Something wrong!")
                    }
                })
            }
        })
    }
}

function getOne(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/" + id,
        success: function (data) {
            console.log(data)
            findOne(data)
        },
        error: function (error) {
            console.log(error)
            alert("ops!! Something wrong!")
        }
    })
}

function findOne(data) {
    let res = "<h2>Home:" + " " + data.name + "</h2><hr><div class=\"row\">\n" +
        "<div class=\"col-6\">\n" +
        "<h3>Address:</h3><h3>Bedroom:</h3><h3>Price:</h3><h3>Description:</h3>\n" +
        "</div><div class=\"col-6\">\n" +
        "<h3>" + data.address + "</h3>" +
        "<h3>" + data.bedroom + "</h3>" +
        "<h3>" + data.price + "</h3>" +
        "<h3>" + data.description + "</h3></div></div>"
    res += "<h3>" + "Status: " + data.statusHome.name + "</h3>"
    document.getElementById("div2").innerHTML = res;
}

function showFormAdd() {
    let res = '<h2>Add Home</h2><hr><div class="row"><div class="col-6"><h5>name:</h5>' +
        '<h5>address:</h5><h5>bedroom:</h5><h5>showerRoom:</h5>' +
        '<h5>description:</h5><h5>price:</h5><h5>Category:</h5></div>' +
        '<div class="col-6">' +
        '<input type="text" placeholder="name" id="name">' +
        '<input type="text" placeholder="address" id="address">' +
        '<input type="text" placeholder="bedroom" id="bedroom">' +
        '<input type="text" placeholder="showerRoom" id="showerRoom">' +
        '<input type="text" placeholder="description" id="description">' +
        '<input type="text" placeholder="price" id="price"><br>' +
        "<select id=\"category\">"
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/findAllCategory",
        success: function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                res += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            res += "</select></div></div><br>" + '<button onclick="save()">Add</button>'
            document.getElementById('div3').innerHTML = res;
        }
    })
}

function save() {
    let name = $('#name').val()
    let address = document.getElementById("address").value;
    let bedroom = document.getElementById("bedroom").value;
    let showerRoom = document.getElementById("showerRoom").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let home = {
        name: name,
        address: address,
        bedroom: bedroom,
        showerRoom: showerRoom,
        description: description,
        price: price,

        category: {
            id: category
        }
    }
    console.log(home);
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        url: "http://localhost:8080/api/homes/",
        data: JSON.stringify(home),
        success: function (data) {
            getAllHome(data)

        },
        error: function (error) {
            console.log(error)
        }
    })
}