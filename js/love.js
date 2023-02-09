const date = new Date("2022-5-15")

$(function () {
    $('.xn').on('click', function (e) {

    });


    $('.date').text(`${(date.getDate()>9)?date.getDate():"0"+date.getDate()}-${(date.getMonth()>8)?(date.getMonth()+1):"0"+(date.getMonth()+1)}-${date.getFullYear()}`);
    $('.counter').text(Math.floor( Math.floor((new Date() - date) / 1000) / 60 / 60 / 24)+" DAYS");
    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - date) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - date) / 1000) / 60)) % 60,
        sec =  Math.floor((today - date) / 1000) % 60;
        $('.time').text(`${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`)
  } olock();
  var timer = setInterval(function(){olock()}, 1000);
});

var typing=new Typed(".type", {
    strings: [
        "",
        "Đã từng muốn chinh phục cả thế giới, nhưng cuối cùng quay đầu lại mới nhận ra, từng mảnh, từng mảnh trong thế giới ấy đều là em.",
        "Với thế giới, bạn có thể chỉ là một người, nhưng với một người, bạn có thể là cả thế giới.",
        "Chỉ mất 3 giây để nói lời yêu, nhưng phải mất cả cuộc đời để chứng minh điều đó.",
        "Tình yêu là sự đồng điệu lạ kì của hai trái tim, như hòa chung một nhịp , là chia sẻ , là gắn kết , là xem ai đó như cả thế giới , là muốn bên ai đó một đời.",
        "Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng điệu, là sự hòa nhịp của hai trái tim, làm người ta nhìn thấy mọi vật tươi đẹp hơn"],
    typeSpeed: 15,
    backSpeed: 15,
    loop: true,
});

const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 100) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)
