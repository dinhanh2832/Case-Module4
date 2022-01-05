function loadDataHome() {
    seeDetailsHome();
}

function seeDetailsHome() {
    let id = localStorage.getItem("idHome")
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/homes/" + id,
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("token")},
        success: function (data) {
            console.log(data)
            let arr1 = data.imageList;
            console.log(arr1)
            document.getElementById("pro-1").innerHTML = `
            <a href="images/${data.imageList[0].links}" data-lightbox="image-1" data-title="Sheltek Properties - 1">
                                                <img src="images/${data.imageList[0].links}" alt="">
                  </a>
            `;
            for(let i =1;i <= arr1.length;i++){
                if(arr1[i].status === 2){
                    let idx = "xx" + i;
                    let pro = "#pro-" + i;
                    document.getElementById(idx).innerHTML =`
            <a href="${pro}" data-toggle="tab">
                                            <img src="images/${arr1[i].links}" alt="">
                                        </a>
            `
                }
            }
        }

    })
}
function back(){
    window.location="login.html";
    localStorage.removeItem("idHome");
}
