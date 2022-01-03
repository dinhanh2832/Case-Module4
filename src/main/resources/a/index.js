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
    let res = "<h2>List blog</h2>" + "<table border='1px' width='100%'><tr>"
        + "<th>name</th>" + "<th>address</th>"

    for (let i = 0; i < data.length; i++) {
        res += "<tr><td>" + data[i].name + "</td>" +
            "<td>" + data[i].address + "</td>" +
            "<td>" + data[i].statusHome.name + "</td>" +
        "<td align=\"center\">" + "<button onclick='change(" + data[i].id + ")'>Delete</button>" + "</td>"
    }
    document.getElementById("div1").innerHTML = res;
}

function change(id) {
    let res = ""
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/" + id,
        success: function (data) {
            console.log(data)
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/homes/change/" + id,
                success: function (data1) {
                    console.log(data1)

                        res = data1.name
                    document.getElementById('div1').innerHTML = res;
                },
                error: function (error) {
                    console.log(error)
                    alert("ops!! Something wrong!")
                }
            })
        }
    })
}
