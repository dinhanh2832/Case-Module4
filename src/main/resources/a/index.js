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
        + "<th>name</th>" + "<th>address</th>" + "<th>Status</th>"

    for (let i = 0; i < data.length; i++) {
        res += "<tr><td>" + data[i].name + "</td>" +
            "<td>" + data[i].address + "</td>" +
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