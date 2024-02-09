var istatus = document.querySelector('h5')
var addfriend = document.querySelector('#add')

// var removefriend=document.querySelector('#remove')
var flag = 0;

addfriend.addEventListener('click', function () {
    if (flag == 0) {
        istatus.innerHTML = 'Friends';
        addfriend.style.backgroundcolor = 'green';
        istatus.style.color = "Green";
        flag = 1

    }

    else {
        istatus.innerHTML = 'Stranger';
        istatus.style.color = "red";
        flag = 0
    }
})
// removefriend.addEventListener('click',function(){
//     istatus.innerHTML='Stranger';
//     addfriend.style.backgroundcolor='';
//     istatus.style.color="red";
// })



// indow.addEventListener("click", function () {
//     if (off == 0) {

//         b.style.backgroundColor = "red"
//         off = 1;
//     }
//     else {
//         b.style.backgroundColor = "transparent";
//         off = 0;
//     }
// })