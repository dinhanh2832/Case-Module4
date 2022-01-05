function getCommentById(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/comments/findByHomeId/" + id,
        success: function (data) {
            console.log(data)
            displayComment(data)
        }
    })
}
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
            "<h3>" + data[i].user.name + "</h3>" +
            "<h3>" + data[i].home.name + "</h3>"
    }
    document.getElementById("div3").innerHTML = res;
}
//
// function showFormAddComment() {
//     let res = '<h2>Add Comment</h2><hr><div class="row"><div class="col-6">' +
//         '<h5>Content:</h5>' +
//         '<div class="col-6">' +
//         '<input type="text" placeholder="Content" id="content">' +
//     '<button onclick="saveComment()">Add</button>'
//     document.getElementById('div4').innerHTML = res;
//
// }
// function saveComment() {
//     let content = document.getElementById("content").value;
//     let comment = {
//         content: content,
//     }
//     console.log(comment);
//     $.ajax({
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         type: 'POST',
//         url: "http://localhost:8080/api/comments/",
//         data: JSON.stringify(comment),
//         success: function (comment) {
//             findOne(comment)
//         },
//         error: function (error) {
//             console.log(error)
//         }
//     })
// }