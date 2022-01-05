function getAllComment() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/comments/",
        success: function (data) {
            console.log(data)
            displayComment(data)
        }
    })
}

function displayComment(data) {
    let res = ""
    for (let i = 0; i < data.length; i++) {
        res += "<h3>" + data[i].content + "</h3>" +
            "<h3>" + data[i].time + "</h3>" +
            "<h3>" + data[i].home.name + "</h3>" +
            "<h3>" + data[i].user.name + "</h3>"
    }
    document.getElementById("div3").innerHTML = res;
}

function getOneByHome(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/" + id,
        success: function (data) {
            console.log(data)
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/comments/" + id,
                success: function (data) {
                    console.log(data)
                },
                error: function (error) {
                    console.log(error)
                    alert("ops!! Something wrong!")
                }
            })
        }
    })
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
